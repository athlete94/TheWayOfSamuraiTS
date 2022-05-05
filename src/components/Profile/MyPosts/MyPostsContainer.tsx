import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {
    addPost,
    changeInputText,
    profileReducerActionType,
    ProfileStateType
} from "../../../redux/profileReducer";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";
import {ChangeEvent} from "react";

export const MyPostsContainer = () => {
    const {posts, textInput} = useSelector<AppStateType, ProfileStateType>(state => state.profileReducer)
    const dispatch = useDispatch<Dispatch<profileReducerActionType>>()

    const setTextInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeInputText(e.currentTarget.value.trimStart()))
    }
    const addPostHandler = () => {
        textInput && dispatch(addPost(textInput))
        dispatch(changeInputText(''))
    }

    return (
        <div>
            <MyPosts
                posts={posts}
                textInput={textInput}
                addPostHandler={addPostHandler}
                setTextInput={setTextInput}
            />
        </div>
    )
}
