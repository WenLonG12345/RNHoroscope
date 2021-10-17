import axios from "axios";

const endpoint = "https://aztro.sameerkumar.website/";

export const horoscopeRequest = async (params) => {

    const response = await axios.post(endpoint, null, {
        params: {
            sign: params.sign,
            day: params.day
        }
    })
    .catch(err => {
        throw new Error("Something went wrong!");
    })

    return response.data;
}