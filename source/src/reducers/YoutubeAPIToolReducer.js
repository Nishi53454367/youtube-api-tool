import * as actionTypes from '../consts/YoutubeAPIToolActionType';
import * as resultStatusTypes from '../consts/YoutubeAPIToolResultStatusType';

// 現在のstateとactionから新しいstateを作る

// 初期値
const initValue = {
    searchCondition: {
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
    },
    playOption: {
        autoPlay: false,
    },
    result: '',
    errorMessage: '',
    resultStatus: resultStatusTypes.UNSEARCHED,
    nextPageToken: '',
};

// 各アクション処理
const reducer = (state = initValue, action) => {
    switch (action.type) {
        // 検索条件入力
        case actionTypes.INPUT_SEARCH_CONDITION:
            // 変更があった項目を更新して返す
            if (action.e.target.name === "type") {
                const typeName = action.e.target.value;
                const value = !state.searchCondition.type[typeName];
                return {
                    ...state,
                    searchCondition: {
                        ...state.searchCondition,
                        type: {
                            ...state.searchCondition.type, [action.e.target.value]: value
                        },
                        channelType: '',
                        eventType: ''
                    }
                };
            } else {
                return { ...state, searchCondition: { ...state.searchCondition, [action.e.target.name]: action.e.target.value } };
            }
        // 検索実行は、middlewares(saga)で定義
        // 検索成功
        case actionTypes.SEARCH_SUCCESS:
            // 検索結果と検索ステータスをセットして返す
            return {
                ...state,
                result: action.result,
                errorMessage: '',
                resultStatus: resultStatusTypes.SUCCESS,
                nextPageToken: action.result.nextPageToken
            };
        // 検索失敗
        case actionTypes.SEARCH_FAILED:
            // エラーメッセージと検索ステータスをセットして返す
            return {
                ...state,
                result: '',
                errorMessage: action.result,
                resultStatus: resultStatusTypes.FAILED
            };
        // 再検索
        case actionTypes.RE_SEARCH:
            // 検索ステータスを「未検索」にして返す
            return { ...state, resultStatus: resultStatusTypes.UNSEARCHED }
        // 再生オプション変更
        case actionTypes.MOVIE_OPTION_CHANGE:
            return { ...state, playOption: { ...state.playOption, [action.e.target.name]: action.e.target.checked } };
        // 違う動画読み込みは、middlewares(saga)で定義
        // 違う動画読み込み成功
        case actionTypes.RELOAD_MOVIE_SUCCESS:
            // indexで指定された動画の差し替えと次ページ検索用トークンの更新
            return {
                ...state,
                result: {
                    ...state.result,
                    items: [
                        ...state.result.items.slice(0, action.index),
                        action.result.items[0],
                        ...state.result.items.slice(action.index + 1)
                    ]
                },
                nextPageToken: action.result.nextPageToken
            }
        default:
            // 今の状態を返す
            return state;
    }
}

export default reducer;