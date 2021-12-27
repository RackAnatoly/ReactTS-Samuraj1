import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="">Home</a>
            <a href="">News Feed</a>
            <a href="">Message</a>
        </div>
    )
}



export default App;
