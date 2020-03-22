import * as actionTypes from '../consts/YoutubeAPIToolActionType';
import * as YoutubeAPIToolURL from '../consts/YoutubeAPIToolURL';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../utils/api';

function* getYoutubeMovieInfoList(action) {
    // URL作成
    let url = YoutubeAPIToolURL.YOUTUBE_SEARCH_API + 
        process.env.REACT_APP_YOUTUBE_API_KEY +
        '&part=' + action.searchCondition.part +
        (action.searchCondition.channelid != '' ? '&channelid=' + action.searchCondition.channelid : '') +
        (action.searchCondition.channelType != '' ? '&channelType=' + action.searchCondition.channelType : '') +
        (action.searchCondition.eventType != '' ? '&eventType=' + action.searchCondition.eventType : '') +
        (action.searchCondition.maxResults != '' ? '&maxResults=' + action.searchCondition.maxResults : '') +
        (action.searchCondition.order != '' ? '&order=' + action.searchCondition.order : '') +
        (action.searchCondition.q != '' ? '&q=' + action.searchCondition.q : '')

    // call関数を使用してapi.getAPIを実行して完了するまで待つ
    let result = yield call(api.getAPI, url);

    // put関数を使用してactionをdispatch
    yield put({
        type: actionTypes.SEARCH_SUCCSES, result: result
    });
}

// takeEvery関数を使用して「EXECUTE_SEARCH」のアクションが実行される度にgetYoutubeMovieInfoListを実行する
const YoutubeAPIToolSaga = [takeEvery(actionTypes.EXECUTE_SEARCH, getYoutubeMovieInfoList)];

export default YoutubeAPIToolSaga;