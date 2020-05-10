import * as actionTypes from '../consts/YoutubeAPIToolActionType';
import * as YoutubeAPIToolURL from '../consts/YoutubeAPIToolURL';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../utils/api';

function* getYoutubeMovieInfoList({ searchCondition }) {
    // typeパラメータ作成
    let type = '&type=';
    if (searchCondition.type.channel) {
        type += 'channel,'
    }
    if (searchCondition.type.playlist) {
        type += 'playlist,'
    }
    if (searchCondition.type.video) {
        type += 'video,'
    }
    // URL作成
    let url = YoutubeAPIToolURL.YOUTUBE_SEARCH_API +
        process.env.REACT_APP_YOUTUBE_API_KEY +
        '&part=snippet' +
        (searchCondition.channelid !== '' ? '&channelId=' + searchCondition.channelid : '') +
        (searchCondition.q !== '' ? '&q=' + searchCondition.q : '') +
        (type !== '&type=' ? type : '') +
        (searchCondition.channelType !== '' ? '&channelType=' + searchCondition.channelType : '') +
        (searchCondition.eventType !== '' ? '&eventType=' + searchCondition.eventType : '') +
        (searchCondition.maxResults !== '' ? '&maxResults=' + searchCondition.maxResults : '') +
        (searchCondition.order !== '' ? '&order=' + searchCondition.order : '')

    // call関数を使用してapiをcallして完了するまで待つ
    let result = yield call(api.getRequest, url);
    let actionType = actionTypes.SEARCH_SUCCESS;

    // エラーの場合
    if (result.responseCode !== 200) {
        actionType = actionTypes.SEARCH_FAILED;
    }

    // put関数を使用してactionをdispatch
    yield put({
        type: actionType, result: result.data
    });
}

function* getYoutubeMovieNextPage({ searchCondition, nextPageToken, index }) {
    // typeパラメータ作成
    let type = '&type=';
    if (searchCondition.type.channel) {
        type += 'channel,'
    }
    if (searchCondition.type.playlist) {
        type += 'playlist,'
    }
    if (searchCondition.type.video) {
        type += 'video,'
    }
    // URL作成
    let url = YoutubeAPIToolURL.YOUTUBE_SEARCH_API +
        process.env.REACT_APP_YOUTUBE_API_KEY +
        '&part=snippet' +
        (searchCondition.channelid !== '' ? '&channelId=' + searchCondition.channelid : '') +
        (searchCondition.q !== '' ? '&q=' + searchCondition.q : '') +
        (type !== '&type=' ? type : '') +
        (searchCondition.channelType !== '' ? '&channelType=' + searchCondition.channelType : '') +
        (searchCondition.eventType !== '' ? '&eventType=' + searchCondition.eventType : '') +
        '&maxResults=1' +
        (searchCondition.order !== '' ? '&order=' + searchCondition.order : '') +
        '&pageToken=' + nextPageToken

    // call関数を使用してapiをcallして完了するまで待つ
    let result = yield call(api.getRequest, url);
    let actionType = actionTypes.RELOAD_MOVIE_SUCCESS;

    // エラーの場合
    if (result.responseCode !== 200) {
        actionType = actionTypes.SEARCH_FAILED;
    }

    // put関数を使用してactionをdispatch
    yield put({
        type: actionType, result: result.data, index: index
    });
}

// takeEvery関数を使用して「EXECUTE_SEARCH」のアクションが実行される度にgetYoutubeMovieInfoListを実行する
const YoutubeAPIToolSaga = [
    takeEvery(actionTypes.EXECUTE_SEARCH, getYoutubeMovieInfoList),
    takeEvery(actionTypes.RELOAD_MOVIE, getYoutubeMovieNextPage)
];

export default YoutubeAPIToolSaga;