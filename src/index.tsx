import React from 'react';
import './index.css';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree=(state:any)=>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})