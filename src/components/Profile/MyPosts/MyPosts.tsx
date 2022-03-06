import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {
    ActionsTypes,
    addPostActionCreator,
    AddPostActionType,
    ChangeNewTextActionType,
    PostPropsType, updateNewTextActionCreator
} from "../../../redux/state";
import {text} from "stream/consumers";

export type MyPostsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewTextActionCreator(text));
        }

    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;