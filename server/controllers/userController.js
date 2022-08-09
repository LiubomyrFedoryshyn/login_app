const User = require("../models/signUp");

const user_info = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then((result) => {
            const { _id, firstName, lastName, email, createdAt, updatedAt } = result;
            res.json({ id: _id, firstName, lastName, email, createdAt, updatedAt });
        })
        .catch((err) => {
            res.status(400).json({
                message: `There is no user with such ID`,
            });
        });
};

module.exports = {
    user_info,
};
