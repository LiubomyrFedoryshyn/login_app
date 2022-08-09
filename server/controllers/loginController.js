const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/signUp");
const validateObj = require("../helpers/validateObj");

const JWT_TOKEN_EXPIRATION_TIME = "2h";

// const blog_index = (req, res) => {
//     Blog.find()
//         .sort({ createdAt: -1 })
//         .then((response) => {
//             res.render("blogs/index", { title: "All Blogs", blogs: response });
//         })
//         .catch((err) => console.log(err));
// };

// const blog_details = (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result) => {
//             res.render("blogs/details", { blog: result, title: "Blog Details" });
//         })
//         .catch((err) => {
//             // 404 page
//             res.status(404).render("404", { title: "Blog not found" });
//         });
// };

// const blog_create_get = (req, res) => {
//     res.render("blogs/create", { title: "Create A New Blog" });
// };

const user_create_post = (req, res) => {
    let user = new User(req.body);
    const validator = validateObj(user, ["firstName", "lastName", "email", "password"]);
    if (validator) {
        res.status(400).json({
            message: `${validator.join(", ")} fields are required`,
        });
        return;
    } else {
        User.find({ email: user.email }, (err, docs) => {
            if (docs.length) {
                res.status(400).json({
                    message: `There already exists an account registered with this email address.`,
                });
            } else {
                user.password = bcrypt.hashSync(req.body.password, 10);
                user.save()
                    .then((result) => {
                        res.status(200);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        user.password = undefined;
                        res.json(user);
                    });
            }
        });
    }
};

const user_auth_post = (req, res) => {
    const user = req.body;
    const validator = validateObj(user, ["email", "password"]);
    if (validator) {
        res.status(400).json({
            message: `${validator.join(", ")} fields are required`,
        });
        return;
    } else {
        User.findOne(
            {
                email: req.body.email,
            },
            (err, user) => {
                if (err) throw err;
                if (!user || !user.comparePassword(req.body.password)) {
                    return res.status(401).json({ message: "Authentication failed. Invalid email or password." });
                }
                const token = jwt.sign(
                    { email: user.email, firstName: user.firstName, lastName: user.lastName, _id: user._id },
                    "token",
                    { expiresIn: JWT_TOKEN_EXPIRATION_TIME }
                );
                res.cookie("token", token, { httpOnly: true });
                res.json({ token, user });
            }
        );
    }
};

const logout_user = (req, res) => {
    res.clearCookie("token");
    res.json();
};

module.exports = {
    user_create_post,
    user_auth_post,
    logout_user,
};
