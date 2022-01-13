import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    LikesCount: number;
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/795/449/png-transparent-computer-icons-icon-design-avatar-encapsulated-postscript-avatar-face-heroes-logo-thumbnail.png"
                alt=""/>
            {props.message}
            <div>
                <span className={s.item}>like {props.LikesCount}</span>
            </div>
        </div>
    );
};

export default Post;