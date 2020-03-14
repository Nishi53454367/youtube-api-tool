import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import YoutubeAPIToolContainer from './containers/YoutubeAPITool';
import reducer from './reducers/reducer';
import rootSaga from './middlewares/rootSaga';

// sagaミドルウェアを作成
const sagaMiddleware = createSagaMiddleware();

// store(reducerによって作成されたstate, sagaミドルウェア)作成
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
    );

// すでに統合して1つにまとめておいたsaga effectを起動させる
sagaMiddleware.run(rootSaga)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    // providerを使ってstoreをcontainerに渡す
    <Provider store={ store }>
        <YoutubeAPIToolContainer />,
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
