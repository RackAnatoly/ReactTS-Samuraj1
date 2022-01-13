import React from 'react';
import s from "./Profile.module.css";
import Post from "./MyPosts/Post/Post";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;