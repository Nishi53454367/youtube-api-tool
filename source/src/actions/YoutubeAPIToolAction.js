import * as actionTypes from '../consts/YoutubeAPIToolActionType';

// typeとpayload(アクションに必要な任意のデータ)を設定

// 検索条件入力
export const searchConditionOnChange = (e) => ({
    type: actionTypes.INPUT_SEARCH_CONDITION,
    e   // payloadにイベントオブジェクトを設定
});

// 検索実行
export const executeSearchOnClick = (searchCondition) => ({
    type: actionTypes.EXECUTE_SEARCH,
    searchCondition // payloadに検索条件を設定
});

// 検索成功、検索失敗は、middlewares(saga)で定義

// 再検索
export const reSearch = () => ({
    type: actionTypes.RE_SEARCH
});

// 再生オプション変更
export const movieOptionOnChange = (e) => ({
    type: actionTypes.MOVIE_OPTION_CHANGE,
    e   // payloadにイベントオブジェクトを設定    
});