import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/795/449/png-transparent-computer-icons-icon-design-avatar-encapsulated-postscript-avatar-face-heroes-logo-thumbnail.png"
                alt=""/>
            Post 1
            <div className={s.item}>
                like
            </div>
        </div>
    );
};

export default Post;