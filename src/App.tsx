import React, {ReactNode} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import {RootStateReduxType} from "./redux/redux-store";

type PropsType= {
    store: RootStateReduxType,
    dispatch: any;
}

function App(props: PropsType) {
    const state = props.store;
    // let message = state.profilePage.posts[0].message;
    // let message2=state.profilePage.posts[1].message;
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialogs store={state}
                                                 dialogs={state.dialogsReducer.dialogs}
                                                 messages={state.dialogsReducer.messages}
                                                 dispatch={props.dispatch}
                               />}
                        />
                        <Route path='/profile' element={
                            <Profile
                            posts={state.profileReducer.posts}
                            dispatch={props.dispatch}
                            newPostText={state.profileReducer.newPostText}
                            />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    )
}

export default App;
