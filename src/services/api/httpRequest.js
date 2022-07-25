import axios from "axios";
import { toast } from "react-toastify";

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
        return response;
    } catch (e) {
        toast.error(e?.response?.data?.message);
        return e.response;
    }
};

export default httpRequest;
