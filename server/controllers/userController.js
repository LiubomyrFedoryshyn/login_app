const User = require("../models/signUp");
const bcrypt = require("bcrypt");
const validatePassword = require("../helpers/validatePassword");

const user_info = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            const { _id, firstName, lastName, email, createdAt, updatedAt } = result;
            res.json({ id: _id, firstName, lastName, email, createdAt, updatedAt });
        })
        .catch((err) => {
            res.status(401).json({
                message: `There is no user with such ID`,
            });
        });
};

const change_password = (req, res) => {
    const id = req.body.id;
    const newPassword = req.body.newPassword;
    if (!validatePassword(newPassword)) {
        return res.status(400).json({
            message: `Password should hawe at least one lowercase letter, one uppercase letter, one digit, one special
            character, and is at least eight characters long!`,
        });
    }

    User.findById(id, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.status(401).json({ message: "There is no user with such ID" });
        }
        if (user.comparePassword(newPassword)) {
            return res.status(400).json({
                message: `Your new password is the same as previous. Please, change it to another new one!`,
            });
        }
        user.password = bcrypt.hashSync(newPassword, 10);
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
    });
};

module.exports = {
    user_info,
    change_password,
};
