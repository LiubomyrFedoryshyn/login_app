const generatePassord = (len) => {
    const length = len ? len : 10,
        string = "abcdefghijklmnopqrstuvwxyz", //to upper
        numeric = "0123456789",
        punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "",
        character = "";
    while (password.length < length) {
        const entity1 = Math.ceil(string.length * Math.random() * Math.random());
        const entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        const entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        let hold = string.charAt(entity1);
        hold = password.length % 2 === 0 ? hold.toUpperCase() : hold;
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }
    password = password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
    return password.substr(0, len);
};

module.exports = generatePassord;
