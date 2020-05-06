import * as actionTypes from '../consts/YoutubeAPIToolActionType';

// 現在のstateとactionから新しいstateを作る

// 初期値
const initValue = {
    channelid: '',
    q: '',
    type: {
        channel: true,
        playlist: true,
        video: true,
    },
    channelType: '',
    eventType: '',
    maxResults: 5,
    order: 'relevance',
    result: '',
    playOption: {
        autoPlay: false,
    }
};

// 各アクション処理
const reducer = (state = initValue, action) => {
    switch(action.type){
        // 検索条件入力
        case actionTypes.INPUT_SEARCH_CONDITION:
            // 変更があった項目を更新して返す
            if(action.e.target.name === "type") {
                const typeName = action.e.target.value;
                const value = !state.type[typeName];
                return {...state, type: {...state.type, [action.e.target.value]: value}};
            } else {
                return {...state, [action.e.target.name]: action.e.target.value};
            }

        // 検索実行：これは不要
        // middlewares(saga)で実施

        // 検索成功
        case actionTypes.SEARCH_SUCCSES:
            // 検索結果をセットして返す
            return {...state, result: action.result};
        // 動画オプション変更
        case actionTypes.MOVIE_OPTION_CHANGE:
            return {...state, playOption: {...state.playOption, [action.e.target.name]: action.e.target.checked}};
        default:
            // 今の状態を返す
            return state;
    }
}

export default reducer;