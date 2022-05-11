import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostPropsType,} from "../../../redux/store";

export type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: Array<PostPropsType>
    newPostText: string
}


const MyPosts = (props: MyPostType) => {

    let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text);
        }

    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
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