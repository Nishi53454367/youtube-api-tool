import * as actionTypes from '../consts/actionTypes';

// 現在のstateとactionから新しいstateを作る

// state初期値
const searchCondition = {
    part: 'id',
    channelid: '',
    channelType: '',
    eventType: '',
    maxResults: '',
    order: '',
    q: ''
};

// 各アクション処理
const reducer = (state = searchCondition, action) => {
    switch(action.type){
        // 検索条件入力
        case actionTypes.INPUT_SEARCH_CONDITION:
            // 変更があった項目を更新して返す
            return {...state, [action.e.target.id]:action.e.target.value};
        default:
            // 今の状態を返す
            return state;
    }
}

export default reducer;