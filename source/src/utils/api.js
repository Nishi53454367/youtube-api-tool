import axios from 'axios';

export function getRequest(url) {
    return axios.get(
        url
    ).then((result) => {
        return result.data;
    }).catch((error) => {
        return (
            'errorCode:' + error.response.data.error.code +
            'errorMessage' + error.response.data.error.message
        );
    });
}