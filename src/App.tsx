import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" alt=""/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Message</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
