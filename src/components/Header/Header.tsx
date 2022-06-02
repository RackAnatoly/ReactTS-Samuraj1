import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png" alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
