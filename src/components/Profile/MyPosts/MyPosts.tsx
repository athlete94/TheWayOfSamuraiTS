import s from "./MyPosts.module.css"
import Post from './Post/Post'
import {ChangeEvent} from "react";
import React from "react";
import {PostsType} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    posts: Array<PostsType>,
    textInput: string,
    addPostHandler: () => void,
    setTextInput: (e: ChangeEvent<HTMLTextAreaElement>) => void
    deletePostHandler: (id: string) => void
}

const MyPosts = ({
                     posts,
                     textInput,
                     addPostHandler,
                     setTextInput,
                     deletePostHandler
                 }: MyPostsPropsType) => {


    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText}
                      value={textInput}
                      onChange={setTextInput}
            />

            <button className={s.btnAddPost}
                    onClick={addPostHandler}
            >Add
            </button>
        </div>

        <h4>Posts</h4>
        {posts.map(p => <Post
            id={p.id}
            key={p.id}
            text={p.text}
            deletePostHandler={deletePostHandler}
        />)}
    </div>

}

export default MyPosts