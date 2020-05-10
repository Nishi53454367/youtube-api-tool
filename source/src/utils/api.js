import axios from 'axios';

export function getRequest(url) {
    return axios.get(
        url
    ).then((result) => {
        return ({
            'responseCode': 200,
            'data': result.data
        })
    }).catch((error) => {
        return ({
            'responseCode': error.response.data.error.code,
            'data': error.response.data.error.message
        });
    });
}