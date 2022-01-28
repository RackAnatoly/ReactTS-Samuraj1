import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {DialogItemType, MessageType, PostPropsType, state} from "./State/redux";


export type StatePropsType = {
    posts: Array<PostPropsType>
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

ReactDOM.render(
    // <App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
    <App state={state}/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
