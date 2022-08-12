const validatePassword = (password) => {
    if (password.length >= 8 && password.length <= 12) {
        const expression = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"); // has at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least eight characters long
        return expression.test(password);
    } else return false;
};

module.exports = validatePassword;
