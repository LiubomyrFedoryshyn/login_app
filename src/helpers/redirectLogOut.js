const redirectLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
};

export default redirectLogOut;
