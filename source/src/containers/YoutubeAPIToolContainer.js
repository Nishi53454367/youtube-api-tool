import React from "react";
import { useSelector, useDispatch } from "react-redux";
import YoutubeAPIToolComponent from '../components/YoutubeAPIToolComponent';    // UI

const mapState = state => state;

export default function YoutubeAPIToolContainer() {
    const state = useSelector(mapState);
    const dispatch = useDispatch();
    return (
        <YoutubeAPIToolComponent state={state} dispatch={dispatch}/>
    );
};