import React from 'react';
import * as actions from '../actions/YoutubeAPIToolAction';
import defalutTheme from './theme/defaultTheme';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ThemeProvider, Grid, Container, Card, CardContent, CardActions, Typography, FormLabel, FormControlLabel, TextField, Checkbox, RadioGroup, Radio, Select, MenuItem, Switch, Button, FormGroup } from '@material-ui/core';
import YouTube from 'react-youtube';

function YoutubeAPIToolComponent({ state, dispatch }) {
    const showSearchResult = () => {
        if (state.result != '') {
            const autoPlay = state.playOption.autoPlay ? 1 : 0;
            let opts = {
                height: '240',
                width: '360',
                playerVars: {
                    autoplay: autoPlay,
                },
            }
            if (state.result.items.length != 0) {
                return (
                    <Card>
                        <Grid container justify="center">
                            {state.result.items.map(
                                (data, index) => (
                                    <Grid item>
                                        <Card style={{ padding: 0 }}>
                                            <CardContent style={{ padding: 0 }}>
                                                <YouTube videoId={data.id.videoId} opts={opts} />
                                            </CardContent>
                                            <CardActions>
                                                <Button startIcon={<DeleteOutlineIcon />} variant="outlined" color="secondary" size="small" fullWidth>削除</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Card>
                );
            }
        }
    }
    return (
        <ThemeProvider theme={defalutTheme}>
            <Container maxWidth="md">
                <Typography variant="h5" color="secondary"><YouTubeIcon fontSize="large" />YouTubeAPIで動画検索ツール</Typography>
                <Card>
                    <FormLabel>チャンネルID</FormLabel>
                    <TextField name="channelid" variant="outlined" color="secondary" placeholder="チャンネルIDを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>検索キーワード</FormLabel>
                    <TextField name="q" variant="outlined" color="secondary" placeholder="検索キーワードを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>検索対象</FormLabel>
                    <FormControlLabel label="チャンネル" value="channel" control={<Checkbox name="type" checked={state.type.channel} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormControlLabel label="プレイリスト" value="playlist" control={<Checkbox name="type" checked={state.type.playlist} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormControlLabel label="ビデオ" value="video" control={<Checkbox name="type" checked={state.type.video} onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    <FormLabel>チャンネル種別</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel disabled={!(state.type.channel && (!state.type.playlist && !state.type.video))} label="全チャンネル" value="any" control={<Radio name="channelType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.type.channel && (!state.type.playlist && !state.type.video))} label="番組のみ" value="show" control={<Radio name="channelType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    </RadioGroup>
                    <FormLabel>ブロードキャストイベント</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel disabled={!(state.type.video && (!state.type.playlist && !state.type.channel))} label="完了" value="completed" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.type.video && (!state.type.playlist && !state.type.channel))} label="ライブ" value="live" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                        <FormControlLabel disabled={!(state.type.video && (!state.type.playlist && !state.type.channel))} label="配信予定" value="upcoming" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />} />
                    </RadioGroup>
                    <FormLabel>検索結果取得数</FormLabel>
                    <Select value={state.maxResults} name="maxResults" variant="outlined" color="secondary" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}>
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
                    <RadioGroup value={state.order} row={true}>
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
                    <Button startIcon={<YoutubeSearchedForIcon />} variant="contained" color="secondary" size="large" fullWidth onClick={() => dispatch(actions.executeSearchOnClick(state))}>検索</Button>
                </Card>
            </Container>
            <Container maxWidth="lg">
                {showSearchResult()}
            </Container>
        </ThemeProvider>
    )
}

export default YoutubeAPIToolComponent