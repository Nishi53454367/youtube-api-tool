import React from "react";
import { useSelector, useDispatch } from "react-redux";
import YoutubeAPIToolComponent from '../components/YoutubeAPIToolComponent';    // UI
import defalutTheme from '../components/theme/defaultTheme';
import { ThemeProvider } from '@material-ui/core';

const mapState = state => state;

export default function YoutubeAPIToolContainer() {
    const state = useSelector(mapState);
    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={defalutTheme}>
            <YoutubeAPIToolComponent state={state} dispatch={dispatch} />
        </ThemeProvider>
    );
};