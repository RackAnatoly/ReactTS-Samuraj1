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
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPost={props.updateNewPost}/>
        </div>
    );
};

export default Profile;