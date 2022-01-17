import React, {ReactNode} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/message' element={<Dialogs/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
