import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts=[
        {id:1, message:'hi, how are you ', likesCount:0},
        {id:2, message:'It\'s my first message', likesCount:53},
    ]
    let postsElements=posts.map(p=><Post message={p.message} LikesCount={p.likesCount}/>)

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