import s from "./MyPosts.module.css"
import Post from './Post/Post'
import {useState, ChangeEvent} from "react";
import React from "react";
import {MyPostsPropsType} from "./MyPostsContainer";



const MyPosts = ({posts, addPost}: MyPostsPropsType) => {
    const [textInput, setTextInput] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.currentTarget.value.trimStart())
    const onClickHandler = () => {
        textInput && addPost(textInput)
        setTextInput('')
    }


    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText}
                      value={textInput}
                      onChange={onChangeHandler}
            />

            <button className={s.btnAddPost}
                    onClick={onClickHandler}
            >Add
            </button>
        </div>

        <h4>Posts</h4>
        {posts.map(p => <Post text={p.text}/>)}
    </div>

}

export default MyPosts