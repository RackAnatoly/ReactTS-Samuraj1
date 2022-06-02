import React from 'react';
import {profilePropsType} from "../../Profile";
import Preloader from "../../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = (props:profilePropsType) => {
    if(!props.profile){
        <Preloader/>
    }
    return <div>
        <div className={s.photo}>
            <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
        </div>
        <div>
            <img src={props.profile.photos}/>
            ava + description
        </div>
    </div>
        ;
};
