import * as actionTypes from '../consts/actionTypes';

// typeとpayload(アクションに必要な任意のデータ)を設定

// 検索条件入力
export const searchConditionOnChange = (e) => ({
    type: actionTypes.INPUT_SEARCH_CONDITION,
    e   // payloadにイベントオブジェクトを設定
});

// 検索実行
export const executeSearchOnClick = () => ({
    type: actionTypes.EXECUTE_SEARCH   
});