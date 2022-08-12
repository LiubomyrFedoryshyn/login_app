const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/signUp");
const validateObj = require("../helpers/validateObj");
const nodemailer = require("nodemailer");
const validatePassword = require("../helpers/validatePassword");
const generatePassord = require("../helpers/generatePassword");

const JWT_TOKEN_EXPIRATION_TIME = "2h";

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "", // your external gmail account
        pass: "", // your external gmail account application password
    },
});

const user_create_post = (req, res) => {
    let user = new User(req.body);
    const validator = validateObj(user, ["firstName", "lastName", "email", "password"]);
    if (validator) {
        res.status(400).json({
            message: `${validator.join(", ")} fields are required`,
        });
        return;
    } else if (!validatePassword(user.password)) {
        return res.status(400).json({
            message: `Password should hawe at least one lowercase letter, one uppercase letter, one digit, one special
            character, and is at least eight characters long!`,
        });
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
    } else if (!validatePassword(user.password)) {
        return res.status(400).json({
            message: `Password should hawe at least one lowercase letter, one uppercase letter, one digit, one special
            character, and is at least eight characters long!`,
        });
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

const reset_password = (req, res) => {
    const validator = validateObj(req.body, ["email"]);
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
                if (!user) {
                    return res.status(401).json({ message: "There is no user with such an email" });
                }

                const generatedPass = generatePassord();

                transporter.sendMail(
                    {
                        from: "", // your external email account
                        to: req.body.email,
                        subject: "Email was sent automatically using login application",
                        text: `Your new password is "${generatedPass}". Please, don't share it with anyone!`,
                    },
                    (err, info) => {
                        if (err) {
                            throw err;
                        } else {
                            console.log(info.response);
                            res.status(200);
                            res.json();
                        }
                    }
                );
                user.password = bcrypt.hashSync(generatedPass, 10);
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
        );
    }
};

module.exports = {
    user_create_post,
    user_auth_post,
    logout_user,
    reset_password,
};
