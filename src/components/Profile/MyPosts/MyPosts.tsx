import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div><button>Add Post</button></div>
                <div><button>Remove</button></div>
            </div>
            <div className={s.posts}>
                <Post message={'hi, how are you '} LikesCount={ 0}/>
                <Post message={"It's my first message"} LikesCount={ 53}/>
            </div>
        </div>
    );
};

export default MyPosts;