import s from './Post.module.css'
import React, {useState} from "react";
import {v1} from "uuid";

type PostPropsType = {
    text: string
    id: string
    deletePostHandler: (id: string) => void
}

const Post = (({id, text, deletePostHandler}: PostPropsType) => {

    let [show, setShow] = useState(false)

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const onClickHandler = () => {
        deletePostHandler(id)
    }

    return <div className={s.post}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
    >
        <div className={s.text}>{text}</div>
        {show && <button className={s.delBtn} onClick={onClickHandler}>x</button>}
    </div>

})
export default Post
