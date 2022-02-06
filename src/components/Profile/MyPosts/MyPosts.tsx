import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType} from "../../../State/redux";
export type MyPostsType= {
    posts:Array<PostPropsType>
}

const MyPosts = (props:MyPostsType) => {

    let postsElements=props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement=React.createRef<HTMLTextAreaElement>();

    let addPost=()=>{
        let text=newPostElement.current?.value;
        alert(text);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div><button onClick={addPost}>Add Post</button></div>
                <div><button>Remove</button></div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;