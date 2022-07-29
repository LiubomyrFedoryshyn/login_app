import httpRequest from "../httpRequest";

const createUser = (data) => {
    return httpRequest({
        url: " http://localhost:3001/login/create-user",
        method: "POST",
        data,
    });
};

const loginUser = (data) => {
    return httpRequest({
        url: " http://localhost:3001/login/auth-user",
        method: "POST",
        data,
    });
};

export { createUser, loginUser };
