import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, RootStateType, updateNewPost,} from "./State/redux";

export let rerenderEntereTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>, document.getElementById('root')
    );
}
