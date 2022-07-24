import s from "./MyPosts.module.css"
import Post from './Post/Post'
import {ChangeEvent} from "react";
import React from "react";
import {PostsType} from "../../../redux/profileReducer";
import {AddItemForm} from "../../AddItemForm/AddItemForm";

type MyPostsPropsType = {
    posts: Array<PostsType>,
    addPostHandler: (post: string) => void,
    deletePostHandler: (id: string) => void
}

const MyPosts = React.memo(({
                                posts,
                                addPostHandler,
                                deletePostHandler
                            }: MyPostsPropsType) => {


    console.log('my posts')
    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <AddItemForm placeholder={'new post'} callBack={(post: string) => addPostHandler(post)}/>
        </div>

        <h4>Posts</h4>
        {posts.map(p => <Post
            id={p.id}
            key={p.id}
            text={p.text}
            deletePostHandler={deletePostHandler}
        />)}
    </div>

})

export default MyPosts