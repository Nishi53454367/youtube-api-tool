import React from 'react';
import * as actions from '../actions/YoutubeAPIToolAction';
import * as resultStatusType from '../consts/YoutubeAPIToolResultStatusType';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import ReplayIcon from '@material-ui/icons/Replay';
import { Grid, Container, Card, CardContent, CardActions, Typography, FormLabel, FormControlLabel, TextField, Checkbox, RadioGroup, Radio, Select, MenuItem, Switch, Button, FormGroup, Link } from '@material-ui/core';
import YouTube from 'react-youtube';

function YoutubeAPIToolComponent({ state, dispatch }) {
    // 検索条件入力画面のレンダリング
    const searchConditionRender = () => {
        return (
            <Container maxWidth="md">
                <Typography variant="h5" color="secondary"><YouTubeIcon fontSize="large" />YouTubeAPIで動画検索ツール</Typography>
                <Card>
                    <FormLabel>チャンネルID</FormLabel>
                    <TextField name="channelid" variant="outlined" color="secondary" placeholder="チャンネルIDを入力して下さい" value={state.searchCondition.channelid} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>検索キーワード</FormLabel>
                    <TextField name="q" variant="outlined" color="secondary" placeholder="検索キーワードを入力して下さい" value={state.searchCondition.q} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>検索対象</FormLabel>
                    <FormControlLabel label="チャンネル" value="channel" control={<Checkbox name="type" checked={state.searchCondition.type.channel} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormControlLabel label="プレイリスト" value="playlist" control={<Checkbox name="type" checked={state.searchCondition.type.playlist} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormControlLabel label="ビデオ" value="video" control={<Checkbox name="type" checked={state.searchCondition.type.video} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormLabel>チャンネル種別</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel disabled={!(state.searchCondition.type.channel && (!state.searchCondition.type.playlist && !state.searchCondition.type.video))} label="全チャンネル" value="any" control={<Radio name="channelType" checked={(state.searchCondition.channelType === 'any' ? true : false)} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.searchCondition.type.channel && (!state.searchCondition.type.playlist && !state.searchCondition.type.video))} label="番組のみ" value="show" control={<Radio name="channelType" checked={(state.searchCondition.channelType === 'show' ? true : false)} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    </RadioGroup>
                    <FormLabel>ブロードキャストイベント</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel disabled={!(state.searchCondition.type.video && (!state.searchCondition.type.playlist && !state.searchCondition.type.channel))} label="完了" value="completed" control={<Radio name="eventType" checked={(state.searchCondition.eventType === 'completed' ? true : false)} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.searchCondition.type.video && (!state.searchCondition.type.playlist && !state.searchCondition.type.channel))} label="ライブ" value="live" control={<Radio name="eventType" checked={(state.searchCondition.eventType === 'live' ? true : false)} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.searchCondition.type.video && (!state.searchCondition.type.playlist && !state.searchCondition.type.channel))} label="配信予定" value="upcoming" control={<Radio name="eventType" checked={(state.searchCondition.eventType === 'upcoming' ? true : false)} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    </RadioGroup>
                    <FormLabel>検索結果取得数</FormLabel>
                    <Select value={state.searchCondition.maxResults} name="maxResults" variant="outlined" color="secondary" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}>
                        {(() => {
                            const menuItem = [];
                            menuItem.push(<MenuItem key={0} value=''> </MenuItem>);
                            for (let i = 1; i < 51; i++) {
                                menuItem.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
                            }
                            return menuItem;
                        })()}
                    </Select>
                    <FormLabel>検索結果表示順</FormLabel>
                    <RadioGroup value={state.searchCondition.order} row={true}>
                        <FormControlLabel label="関連順" value="relevance" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel label="作成日の新しい順" value="date" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel label="評価の高い順" value="rating" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel label="タイトル順" value="title" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel label="動画の番号順(降順)" value="videoCount" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel label="再生回数の多い順" value="viewCount" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    </RadioGroup>
                    <FormLabel>再生オプション</FormLabel>
                    <FormGroup row={true}>
                        <FormControlLabel checked={state.playOption.autoPlay} control={<Switch name="autoPlay" />} label="自動再生" onChange={(event) => dispatch(actions.movieOptionOnChange(event))} />
                    </FormGroup>
                    <Button startIcon={<YoutubeSearchedForIcon />} variant="contained" color="secondary" size="large" fullWidth onClick={() => dispatch(actions.executeSearchOnClick(state.searchCondition))}>検索</Button>
                </Card>
            </Container>
        )
    }
    // 検索結果成功時のレンダリング
    const searchResultSuccessRender = () => {
        const autoPlay = state.playOption.autoPlay ? 1 : 0;
        let opts = {
            height: '240',
            width: '360',
            playerVars: {
                autoplay: autoPlay,
            },
        }
        if (state.result.items.length !== 0) {
            return (
                <Container maxWidth="lg">
                    <Card>
                        <Link href="#" onClick={() => dispatch(actions.reSearch())}><Typography variant="h5">検索入力に戻る</Typography></Link>
                        <Grid container justify="center">
                            {state.result.items.map(
                                (data, index) => (
                                    <Grid item key={index}>
                                        <Card style={{ padding: 0 }}>
                                            <CardContent style={{ padding: 0 }}>
                                                <YouTube videoId={data.id.videoId} opts={opts} />
                                            </CardContent>
                                            <CardActions>
                                                <Button startIcon={<ReplayIcon />} variant="outlined" color="secondary" size="small" fullWidth onClick={() => dispatch(actions.reloadMovie(state.searchCondition, state.nextPageToken, index))}>違う動画を読み込む</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Card>
                </Container>
            );
        } else {
            return (
                <Container maxWidth="sm">
                    <Typography variant="h5" color="secondary">検索結果が0件でした</Typography>
                    <Link href="#" onClick={() => dispatch(actions.reSearch())}><Typography variant="h5">検索入力に戻る</Typography></Link>
                </Container>
            );
        }
    }
    // 検索結果失敗時のレンダリング
    const searchResultFailedRender = () => {
        return (
            <Container maxWidth="sm">
                <Typography variant="h5" color="secondary">エラーが発生しました</Typography>
                <Typography variant="subtitle1" color="secondary">エラーメッセージ：{state.errorMessage}</Typography>
                <Link href="#" onClick={() => dispatch(actions.reSearch())}><Typography variant="h5">検索入力に戻る</Typography></Link>
            </Container>
        )
    }
    // 検索結果ステータスによって描画内容を変更
    switch (state.resultStatus) {
        case resultStatusType.UNSEARCHED:           // 未検索状態は、検索条件入力画面
            return searchConditionRender();
        case resultStatusType.SUCCESS:
            return searchResultSuccessRender();     // 検索成功時は、検索結果表示画面
        case resultStatusType.FAILED:
            return searchResultFailedRender();      // 検索失敗時は、エラー画面
        default:
            return searchConditionRender();
    }
}

export default YoutubeAPIToolComponent