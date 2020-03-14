import axios from 'axios';

function getYoutubeMovieInfoList(searchCondition) {
    return axios.get(
        'https://www.googleapis.com/youtube/v3/search?' +
        'key=AIzaSyCavU3u6Ekj1cYjdG0SHsSTmoYqKwKR92E' +
        '&part=' + searchCondition.part +
        (searchCondition.channelid != '' ? '&channelid=' + searchCondition.channelid : '') +
        (searchCondition.channelType != '' ? '&channelType=' + searchCondition.channelType : '') +
        (searchCondition.eventType != '' ? '&eventType=' + searchCondition.eventType : '') +
        (searchCondition.maxResults != '' ? '&maxResults=' + searchCondition.maxResults : '') +
        (searchCondition.order != '' ? '&order=' + searchCondition.order : '') +
        (searchCondition.q != '' ? '&q=' + searchCondition.q : '')
        ).then((result) => {
            return JSON.stringify(result.data, null, 4);
        }).catch((error) => {
            return (
                'エラーコード：' + error.response.data.error.code + 
                ' エラーメッセージ：' + error.response.data.error.message
            );
        });
}

export default getYoutubeMovieInfoList;