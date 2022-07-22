import axios from "axios";

const httpRequest = async ({ url = "/", method = "GET", params = {}, headers = {}, data }) => {
    try {
        const authHeaders = {
            ...headers,
        };

        const response = await axios({
            url,
            method,
            params,
            headers: {
                ...authHeaders,
            },
            data,
        });
        return response.response;
    } catch (e) {
        console.log(e.response);
        // toast(e.response.body);
        return e.response;
    }
};

export default httpRequest;
