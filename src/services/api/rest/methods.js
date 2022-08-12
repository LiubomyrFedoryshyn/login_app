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

const logOutUser = () => {
    return httpRequest({
        url: "login/logout",
        method: "POST",
    });
};

const resetPassword = (data) => {
    return httpRequest({
        url: "login/reset-password",
        method: "POST",
        data,
    });
};

const changePassword = (data) => {
    return httpRequest({
        url: "user/change-password",
        method: "PATCH",
        data,
    });
};

export { createUser, loginUser, getUser, logOutUser, resetPassword, changePassword };
