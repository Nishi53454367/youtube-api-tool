import * as actionTypes from '../consts/YoutubeAPIToolActionType';

// 現在のstateとactionから新しいstateを作る

// 初期値
const initValue = {
    part: 'id',
    channelid: '',
    channelType: '',
    eventType: '',
    maxResults: '',
    order: '',
    q: '',
    result: ''
};

// 各アクション処理
const reducer = (state = initValue, action) => {
    switch(action.type){
        // 検索条件入力
        case actionTypes.INPUT_SEARCH_CONDITION:
            // 変更があった項目を更新して返す
            return {...state, [action.e.target.id]:action.e.target.value};

        // 検索実行：これは不要
        // middlewares(saga)で実施

        // 検索成功
        case actionTypes.SEARCH_SUCCSES:
            // 検索結果をセットして返す
            return {...state, result: action.result};
        default:
            // 今の状態を返す
            return state;
    }
}

export default reducer;