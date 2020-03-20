import * as actionTypes from '../consts/YoutubeAPIToolActionType';
import { put, call, takeEvery } from 'redux-saga/effects';
import getYoutubeMovieInfoList from '../utils/api';

function* fetchList(action) {
    // call関数を使用してgetYoutubeMovieInfoListを実行して完了するまで待つ
    const result = yield call(getYoutubeMovieInfoList, action.searchCondition);
    // put関数を使用してactionをdispatch
    yield put({
        type: actionTypes.SEARCH_SUCCSES, result: result
    });
}

// takeEvery関数を使用して「EXECUTE_SEARCH」のアクションが実行される度にfetchListを実行する
const YoutubeAPIToolSaga = [takeEvery(actionTypes.EXECUTE_SEARCH, fetchList)];

export default YoutubeAPIToolSaga;