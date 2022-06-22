import {
    addPost,
    changeInputText, deletePost,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";

export const MyPostsContainer = () => {
    const {posts, textInput} = useAppSelector(state => state.profileReducer)
    const dispatch = useAppDispatch()

    const setTextInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeInputText(e.currentTarget.value.trimStart()))
    }
    const addPostHandler = () => {
        textInput && dispatch(addPost(textInput))
        dispatch(changeInputText(''))
    }

    const deletePostHandler = (id: string) => {
        dispatch(deletePost(id))
    }

    return (
        <div>
            <MyPosts
                posts={posts}
                textInput={textInput}
                addPostHandler={addPostHandler}
                setTextInput={setTextInput}
                deletePostHandler={deletePostHandler}
            />
        </div>
    )
}
