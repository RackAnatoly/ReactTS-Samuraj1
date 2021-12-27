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

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>rect</li>
            </ul>
        </div>
    )
}

export default App;
