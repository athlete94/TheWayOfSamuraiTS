import s from './Post.module.css'
import React, {useState} from "react";


type PostPropsType = {
    text: string
    id: string
    deletePostHandler: (id: string) => void
}

const Post = React.memo(({id, text, deletePostHandler}: PostPropsType) => {

    const onClickHandler = () => {
        deletePostHandler(id)
    }

    return <div className={s.post}>
        <div className={s.text}>{text}</div>
        <button className={s.delBtn} onClick={onClickHandler}>x</button>
    </div>

})
export default Post
