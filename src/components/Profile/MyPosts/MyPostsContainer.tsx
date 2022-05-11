import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {RootStateReduxType, store} from "../../../redux/redux-store";
import {PostPropsType} from "../../../redux/store";
import {Dispatch} from "redux";

// const MyPostsContainer = (props: ProfileType) => {
//     let state=props.store.getState();
//     let addPost = () => {
//             props.store.dispatch(addPostActionCreator())
//     }
//     let onPostChange = (text:string) => {
//         props.store.dispatch(updateNewTextActionCreator(text));
//     }
//     return (
//        <MyPosts
//            updateNewPostText={onPostChange}
//            addPost={addPost}
//            posts={state.profileReducer.posts}
//            newPostText={state.profileReducer.newPostText}
//        />
// )
// };
//
// export default MyPostsContainer ;

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
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
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