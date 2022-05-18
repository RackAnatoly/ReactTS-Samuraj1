import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../redux/redux-store";
import {PostPropsType} from "../../../redux/store";
import {Dispatch} from "redux";

type mstpType = {
    posts: Array<PostPropsType>
    newPostText: string
}
type mdtpType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
const mapStateToProps = (state: RootStateReduxType): mstpType => {
    return {
        posts: state.profilePages.posts,
        newPostText: state.profilePages.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mdtpType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);