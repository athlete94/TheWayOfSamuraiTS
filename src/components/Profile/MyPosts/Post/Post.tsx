import s from './Post.module.css'
import React from "react";

type PostPropsType = {
    text: string
}

const Post: React.FC<PostPropsType> = ({text}) => {

    return <div className={s.post}>
        {text}
    </div>
    
}

export default Post
