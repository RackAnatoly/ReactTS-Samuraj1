import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType} from "../../../State/redux";
export type MyPostsType= {
    posts:Array<PostPropsType>
}

const MyPosts = (props:MyPostsType) => {

    let postsElements=props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div><button>Add Post</button></div>
                <div><button>Remove</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;