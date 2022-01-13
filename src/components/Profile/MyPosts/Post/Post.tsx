import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/795/449/png-transparent-computer-icons-icon-design-avatar-encapsulated-postscript-avatar-face-heroes-logo-thumbnail.png"
                alt=""/>
            {props.message}
            <div>
                <span className={s.item}>like</span>
            </div>
        </div>
    );
};

export default Post;