import s from './Post.module.css'
import React from "react";
import {v1} from "uuid";

type PostPropsType = {
    text: string
    id?: string
}

const Post: React.FC<PostPropsType> = React.memo(({text}) => {
    console.log("post")
    return <div className={s.post}>
        {text}
    </div>
    
})
export default Post