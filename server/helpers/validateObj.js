const validateObj = (body, fields) => {
    const emptyFields = fields.filter((el) => body[el] === "");
    return emptyFields.length ? emptyFields : null;
};

module.exports = validateObj;
