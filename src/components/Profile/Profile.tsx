import React from 'react';
import s from "./Profile.module.css";
import MyPosts, {MyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props:MyPostsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;