import React from 'react';
import s from './Header.module.css'

const Header = (props:any) => {
    return (
        <header className={s.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" alt=""/>
        </header>
    );
};

export default Header;
