const User = require("../models/signUp");
const validateObj = require("../helpers/validateObj");

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
    const user = new User(req.body);
    const validator = validateObj(user, ["firstName", "lastName", "email", "password"]);
    if (validator) {
        res.status(400).json({
            message: `${validator.join(", ")} fields are required`,
        });
        return;
    } else {
        User.find({ email: user.email }, function (err, docs) {
            if (docs.length) {
                res.status(400).json({
                    message: `There already exists an account registered with this email address.`,
                });
            } else {
                user.save()
                    .then((result) => {
                        res.status(200);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => res.send(user));
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
        User.find(user, function (err, docs) {
            if (docs.length) {
                res.status(200).json();
            } else {
                res.status(400).json({
                    message: `Incorrect email address or password.`,
                });
            }
        });
    }
};

// const blog_delete = (req, res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete(id)
//         .then((result) => {
//             res.json({ redirect: "/blogs" });
//         })
//         .catch((err) => console.log(err));
// };

module.exports = { user_create_post, user_auth_post };
