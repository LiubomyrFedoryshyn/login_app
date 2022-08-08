import httpRequest from "../httpRequest";

const createUser = (data) => {
    return httpRequest({
        url: "login/create-user",
        method: "POST",
        data,
    });
};

const loginUser = (data) => {
    return httpRequest({
        url: "login/auth-user",
        method: "POST",
        data,
    });
};

const getUser = (id) => {
    return httpRequest({
        url: `user/info/${id}`,
        method: "GET",
    });
};

export { createUser, loginUser, getUser };
