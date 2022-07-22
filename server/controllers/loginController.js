const User = require("../models/login");
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
        user.save()
            .then((result) => {
                res.status(200);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => res.send(user));
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

module.exports = { user_create_post };
