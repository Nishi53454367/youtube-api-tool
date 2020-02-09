import React, { useState } from "react";
import axios from "axios";

import YoutubeAPIToolComponent from '../components/YoutubeAPITool';

function YoutubeAPIToolContainer() {
    const [searchCondition, setSearchCondition] = useState({
        part: 'id',
        channelid: '',
        channelType: '',
        eventType: '',
        maxResults: '',
        order: '',
        q: ''
    })
    const [searchResult, setSearchResult] = useState('')
    const handleOnChange = (e) => {
        setSearchCondition({...searchCondition,[e.target.id]:e.target.value})
        setSearchResult('')
    }
    const handleOnClick = (e) =>{
        axios.get(
            'https://www.googleapis.com/youtube/v3/search?' +
            'key=AIzaSyCavU3u6Ekj1cYjdG0SHsSTmoYqKwKR92E' +
            '&part=' + searchCondition.part +
            (searchCondition.channelid != '' ? '&channelid=' + searchCondition.channelid : '') +
            (searchCondition.channelType != '' ? '&channelType=' + searchCondition.channelType : '') +
            (searchCondition.eventType != '' ? '&eventType=' + searchCondition.eventType : '') +
            (searchCondition.maxResults != '' ? '&maxResults=' + searchCondition.maxResults : '') +
            (searchCondition.order != '' ? '&order=' + searchCondition.order : '') +
            (searchCondition.q != '' ? '&q=' + searchCondition.q : '')
            ).then((result) => {
                setSearchResult(JSON.stringify(result.data, null, 4))
            }).catch((error) => {
                setSearchResult(
                    'エラーコード：' + error.response.data.error.code + 
                    ' エラーメッセージ：' + error.response.data.error.message
                )
            })
    }
    return (
        <YoutubeAPIToolComponent onChange={ handleOnChange } onClick={ handleOnClick } searchResult={ searchResult }></YoutubeAPIToolComponent>
    );
}

export default YoutubeAPIToolContainer;