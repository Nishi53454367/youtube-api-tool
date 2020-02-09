import React from 'react';

function YoutubeAPIToolComponent(props) {
    return (
        <div style={{textAlign: "center"}}>
            <div>
                必須パラメータ<br/>
                part：
                <input id="part" type="radio" name="part" value="id" checked onChange={ props.onChange }/>id
                &nbsp;
                <input id="part" type="radio" name="part" value="snippet" onChange={ props.onChange }/>snippet
            </div>
            <div>
                任意パラメータ<br/>
                チャンネルID：<input id="channelid" type="text" placeholder="チャンネルIDを入力して下さい" onChange={ props.onChange }></input>
                <br/>
                検索キーワード：<input id="q" type="text" placeholder="キーワードを入力して下さい" onChange={ props.onChange }></input>
                <br/>
                チャンネル種別：
                <input id="channelType" type="radio" name="channelType" value="any" onChange={ props.onChange }/>全チャンネル
                &nbsp;
                <input id="channelType" type="radio" name="channelType" value="show" onChange={ props.onChange }/>番組のみ
                <br/>
                ブロードキャストイベント：
                <input id="eventType" type="radio" name="eventType" value="completed" onChange={ props.onChange }/>完了
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="live" onChange={ props.onChange }/>ライブ
                &nbsp;
                <input id="eventType" type="radio" name="eventType" value="upcoming" onChange={ props.onChange }/>配信予定
                <br/>
                検索結果取得数：<input id="maxResults" type="text" placeholder="0〜50までを入力して下さい" onChange={ props.onChange }></input>
                <br/>
                検索結果表示順：
                <input id="order" type="radio" name="order" value="date" onChange={ props.onChange }/>作成日の新しい順
                &nbsp;
                <input id="order" type="radio" name="order" value="rating" onChange={ props.onChange }/>評価の高い順
                &nbsp;
                <input id="order" type="radio" name="order" value="relevance" onChange={ props.onChange }/>関連順
                &nbsp;
                <input id="order" type="radio" name="order" value="title" onChange={ props.onChange }/>タイトル順
                &nbsp;
                <input id="order" type="radio" name="order" value="videoCount" onChange={ props.onChange }/>動画の番号順(降順)
                &nbsp;
                <input id="order" type="radio" name="order" value="viewCount" onChange={ props.onChange }/>再生回数の多い順
            </div>
            <div>
                <button onClick={ props.onClick }>検索</button>
            </div>
            <div>
                検索結果<br/>
                { props.searchResult }
            </div>
        </div>
    )
}

export default YoutubeAPIToolComponent