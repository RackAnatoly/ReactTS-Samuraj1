import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType} from "../../../State/redux";
import {text} from "stream/consumers";

export type MyPostsType = {
    posts: Array<PostPropsType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value='';
        }
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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