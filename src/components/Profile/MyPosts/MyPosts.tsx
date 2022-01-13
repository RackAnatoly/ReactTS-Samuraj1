import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={'hi, how are you'}/>
                <Post message={"It's my first message"}/>
            </div>
        </div>
    );
};

export default MyPosts;