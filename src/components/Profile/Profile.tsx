import React from 'react';
import s from "./Profile.module.css";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {RootStateReduxType} from "../../redux/redux-store";

export type ProfileType={
    store:RootStateReduxType
}

const Profile = (props:ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    );
};

export default Profile;