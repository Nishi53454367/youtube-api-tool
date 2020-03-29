import React from 'react';
import * as actions from '../actions/YoutubeAPIToolAction';
import defalutTheme from './theme/defaultTheme';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import {ThemeProvider, Container, Card, Typography, FormLabel, FormControlLabel, RadioGroup, Radio, TextField, Select, MenuItem, Button} from '@material-ui/core';

function YoutubeAPIToolComponent({state, dispatch}) {
    return (
        <ThemeProvider theme={defalutTheme}>
            <Container maxWidth="md">
                <Typography variant="h5" color="secondary"><YouTubeIcon fontSize="large"/>YouTube API Tool</Typography>
                <Card>
                    <FormLabel>Part</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel label="id" value="id" control={<Radio name="part" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="snippet" value="snippet" control={<Radio name="part" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                    </RadioGroup>
                    <FormLabel>チャンネルID</FormLabel>
                    <TextField name="channelid" variant="outlined" color="secondary" placeholder="チャンネルIDを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>検索キーワード</FormLabel>
                    <TextField name="q" variant="outlined" color="secondary" placeholder="キーワードを入力して下さい" onChange={(event) => dispatch(actions.searchConditionOnChange(event))} />
                    <FormLabel>チャンネル種別</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel label="全チャンネル" value="any" control={<Radio name="channelType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="番組のみ" value="show" control={<Radio name="channelType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                    </RadioGroup>
                    <FormLabel>ブロードキャストイベント</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel label="完了" value="completed" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="ライブ" value="live" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="配信予定" value="upcoming" control={<Radio name="eventType" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                    </RadioGroup>
                    <FormLabel>検索結果取得数</FormLabel>
                    <Select value={state.maxResults} name="maxResults" variant="outlined" color="secondary" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}>
                        {(()=>{
                            const menuItem = [];
                            menuItem.push(<MenuItem key={0} value=''> </MenuItem>);
                            for(let i=1; i<51; i++){
                                menuItem.push(<MenuItem key={i} value={i}>{i}</MenuItem>);
                            }
                            return menuItem;
                        })()}
                    </Select>
                    <FormLabel>検索結果表示順</FormLabel>
                    <RadioGroup row={true}>
                        <FormControlLabel label="作成日の新しい順" value="date" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="評価の高い順" value="rating" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="関連順" value="relevance" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="タイトル順" value="title" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="動画の番号順(降順)" value="videoCount" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                        <FormControlLabel label="再生回数の多い順" value="viewCount" control={<Radio name="order" onChange={(event) => dispatch(actions.searchConditionOnChange(event))}/>}/>
                    </RadioGroup>
                    <Button startIcon={<YoutubeSearchedForIcon />} variant="contained" color="secondary" size="large" fullWidth onClick={() => dispatch(actions.executeSearchOnClick(state))}>検索</Button>
                </Card>
            <div>
                検索結果<br />
                { state.result }
            </div>
            </Container>
        </ThemeProvider>
    )
}

export default YoutubeAPIToolComponent