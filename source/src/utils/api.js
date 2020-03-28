import axios from 'axios';

export function getAPI(url) {
    return axios.get(
        url
    ).then((result) => {
        return JSON.stringify(result.data);
    }).catch((error) => {
        return (
            'errorCode:' + error.response.data.error.code +
            'errorMessage' + error.response.data.error.message
        );
    });
}