import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";

const MyPostsContainer = (props: ProfileType) => {
    let state=props.store.getState();
    let addPost = () => {
            props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text:string) => {
        props.store.dispatch(updateNewTextActionCreator(text));
    }
    return (
       <MyPosts
           updateNewPostText={onPostChange}
           addPost={addPost}
           posts={state.profileReducer.posts}
           newPostText={state.profileReducer.newPostText}
       />
)
};

export default MyPostsContainer ;