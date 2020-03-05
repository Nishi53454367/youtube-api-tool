import React from 'react';

function YoutubeAPIToolComponent(props) {
    return (
        <div style={{textAlign: "center"}}>
            <div>
                必須パラメータ<br/>
                part：
                <input id="part" type="radio" name="part" value="id" onChange={(event) => props.searchConditionOnChange(event) }/>id
                &nbsp;
                <input id="part" type="radio" name="part" value="snippet" onChange={(event) => props.searchConditionOnChange(event) }/>snippet
            </div>
            <div>
                任意パラメータ<br/>
                チャンネルID：<input id="channelid" type="text" placeholder="チャンネルIDを入力して下さい" onChange={(event) => props.searchConditionOnChange(event) }></input>
                <br/>
                検索キーワード：<input id="q" type="text" placeholder="キーワードを入力して下さい" onChange={ (event) => props.searchConditionOnChange(event) }></input>
                <br/>
                チャンネル種別：
                <input id="channelType" type="radio" name="channelType" value="any" onChange={(event) => props.searchConditionOnChange(event) }/>全チャンネル
                &nbsp;
                <input id="channelType" type="radio" name="channelType" value="show" onChange={(event) => props.searchConditionOnChange(event) }/>番組のみ
                <br/>
                ブロードキャストイベント：
                <input id="eventType" type="radio" name="eventType" value="completed" onChange={(event) => props.searchConditionOnChange(event) }/>完了
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="live" onChange={(event) => props.searchConditionOnChange(event) }/>ライブ
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="upcoming" onChange={(event) => props.searchConditionOnChange(event) }/>配信予定
                <br/>
                検索結果取得数：<input id="maxResults" type="text" placeholder="0〜50までを入力して下さい" onChange={(event) => props.searchConditionOnChange(event) }></input>
                <br/>
                検索結果表示順：
                <input id="order" type="radio" name="order" value="date" onChange={(event) => props.searchConditionOnChange(event) }/>作成日の新しい順
                &nbsp;
                <input id="order" type="radio" name="order" value="rating" onChange={(event) => props.searchConditionOnChange(event) }/>評価の高い順
                &nbsp;
                <input id="order" type="radio" name="order" value="relevance" onChange={(event) => props.searchConditionOnChange(event) }/>関連順
                &nbsp;
                <input id="order" type="radio" name="order" value="title" onChange={(event) => props.searchConditionOnChange(event) }/>タイトル順
                &nbsp;
                <input id="order" type="radio" name="order" value="videoCount" onChange={(event) => props.searchConditionOnChange(event) }/>動画の番号順(降順)
                &nbsp;
                <input id="order" type="radio" name="order" value="viewCount" onChange={(event) => props.searchConditionOnChange(event) }/>再生回数の多い順
            </div>
            <div>
                入力値<br/>
                part:{ props.searchCondition.part }<br/>
                チャンネルID:{ props.searchCondition.channelid }<br/>
                検索キーワード:{ props.searchCondition.q }<br/>
                チャンネル種別:{ props.searchCondition.channelType}<br/>
                ブロードキャストイベント:{ props.searchCondition.eventType}<br/>
                検索結果取得数:{ props.searchCondition.maxResults}<br/>
                検索結果表示順:{ props.searchCondition.order}<br/>
            </div>
        </div>
    )
}

export default YoutubeAPIToolComponent