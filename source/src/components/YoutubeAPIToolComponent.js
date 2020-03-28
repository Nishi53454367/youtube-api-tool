import React from 'react';
import * as actions from "../actions/YoutubeAPIToolAction";

function YoutubeAPIToolComponent({state, dispatch}) {
    return (
        <div style={{textAlign: "center"}}>
            <div>
                必須パラメータ<br/>
                part：
                <input id="part" type="radio" name="part" value="id" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>id
                &nbsp;
                <input id="part" type="radio" name="part" value="snippet" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>snippet
            </div>
            <div>
                任意パラメータ<br/>
                チャンネルID：<input id="channelid" type="text" placeholder="チャンネルIDを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}></input>
                <br/>
                検索キーワード：<input id="q" type="text" placeholder="キーワードを入力して下さい" onChange={ (event) => dispatch(actions.searchConditionOnChange(event))}></input>
                <br/>
                チャンネル種別：
                <input id="channelType" type="radio" name="channelType" value="any" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>全チャンネル
                &nbsp;
                <input id="channelType" type="radio" name="channelType" value="show" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>番組のみ
                <br/>
                ブロードキャストイベント：
                <input id="eventType" type="radio" name="eventType" value="completed" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>完了
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="live" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>ライブ
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="upcoming" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>配信予定
                <br/>
                検索結果取得数：<input id="maxResults" type="text" placeholder="0〜50までを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}></input>
                <br/>
                検索結果表示順：
                <input id="order" type="radio" name="order" value="date" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>作成日の新しい順
                &nbsp;
                <input id="order" type="radio" name="order" value="rating" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>評価の高い順
                &nbsp;
                <input id="order" type="radio" name="order" value="relevance" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>関連順
                &nbsp;
                <input id="order" type="radio" name="order" value="title" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>タイトル順
                &nbsp;
                <input id="order" type="radio" name="order" value="videoCount" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>動画の番号順(降順)
                &nbsp;
                <input id="order" type="radio" name="order" value="viewCount" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>再生回数の多い順
            </div>
            <div>
                入力値<br/>
                part:{ state.part }<br/>
                チャンネルID:{ state.channelid }<br/>
                検索キーワード:{ state.q }<br/>
                チャンネル種別:{ state.channelType}<br/>
                ブロードキャストイベント:{ state.eventType}<br/>
                検索結果取得数:{ state.maxResults}<br/>
                検索結果表示順:{ state.order}<br/>
            </div>
            <div>
                <button onClick={() => dispatch(actions.executeSearchOnClick(state))}>検索実行</button><br/>
                検索結果<br />
                { state.result }
            </div>
        </div>
    )
}

export default YoutubeAPIToolComponent