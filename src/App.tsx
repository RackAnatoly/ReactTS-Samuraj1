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
import {StoreType} from "./redux/state";

type PropsType= {
    store:StoreType,

}


function App(props: PropsType) {
    const state = props.store.getState();
    // let message = state.profilePage.posts[0].message;
    // let message2=state.profilePage.posts[1].message;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialogs store={state} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>}/>
                        <Route path='/profile' element={
                            <Profile
                            posts={state.profilePage.posts}
                            dispatch={props.store.dispatch.bind(props.store)}
                            newPostText={state.profilePage.newPostText}
                            />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
