import {
    addPost,
    deletePost,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import React, {ChangeEvent, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";

export const MyPostsContainer = React.memo(() => {
    console.log('my posts container')

    const posts = useAppSelector(state => state.profileReducer.posts)
    const dispatch = useAppDispatch()


    const addPostHandler = useCallback((post: string) => {
         dispatch(addPost(post))
    }, [dispatch])

    const deletePostHandler = useCallback((id: string) => {
        dispatch(deletePost(id))
    }, [dispatch])

    return (
        <div>
            <MyPosts
                posts={posts}
                addPostHandler={addPostHandler}
                deletePostHandler={deletePostHandler}
            />
        </div>
    )
})