import { all } from 'redux-saga/effects';
import YoutubeAPIToolSaga from './YoutubeAPITool';

function* rootSaga(){
    // all関数で指定されたミドルウェアを並列で実行する
    yield all([
        ...YoutubeAPIToolSaga,
    ]);
}

export default rootSaga;