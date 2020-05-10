import * as actionTypes from '../consts/YoutubeAPIToolActionType';
import * as YoutubeAPIToolURL from '../consts/YoutubeAPIToolURL';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../utils/api';

function* getYoutubeMovieInfoList(action) {
    // typeパラメータ作成
    let type = '&type=';
    if (action.searchCondition.type.channel) {
        type += 'channel,'
    }
    if (action.searchCondition.type.playlist) {
        type += 'playlist,'
    }
    if (action.searchCondition.type.video) {
        type += 'video,'
    }
    // URL作成
    let url = YoutubeAPIToolURL.YOUTUBE_SEARCH_API +
        process.env.REACT_APP_YOUTUBE_API_KEY +
        '&part=snippet' +
        (action.searchCondition.channelid !== '' ? '&channelId=' + action.searchCondition.channelid : '') +
        (action.searchCondition.q !== '' ? '&q=' + action.searchCondition.q : '') +
        (type !== '&type=' ? type : '') +
        (action.searchCondition.channelType !== '' ? '&channelType=' + action.searchCondition.channelType : '') +
        (action.searchCondition.eventType !== '' ? '&eventType=' + action.searchCondition.eventType : '') +
        (action.searchCondition.maxResults !== '' ? '&maxResults=' + action.searchCondition.maxResults : '') +
        (action.searchCondition.order !== '' ? '&order=' + action.searchCondition.order : '')

    // call関数を使用してapiをcallして完了するまで待つ
    let result = yield call(api.getRequest, url);
    let actionType = actionTypes.SEARCH_SUCCSES;

    // エラーの場合
    if (result.responseCode !== 200) {
        actionType = actionTypes.SEARCH_FAILED;
    }

    // put関数を使用してactionをdispatch
    yield put({
        type: actionType, result: result.data
    });
}

// takeEvery関数を使用して「EXECUTE_SEARCH」のアクションが実行される度にgetYoutubeMovieInfoListを実行する
const YoutubeAPIToolSaga = [takeEvery(actionTypes.EXECUTE_SEARCH, getYoutubeMovieInfoList)];

export default YoutubeAPIToolSaga;