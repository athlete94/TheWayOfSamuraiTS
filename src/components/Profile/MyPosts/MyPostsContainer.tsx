import React from 'react';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC, PostsType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/store";


type mapStatePropsType = {
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    addPost: (text: string) => void
}
export type MyPostsPropsType = mapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profileReducer.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (text: string) => dispatch(addPostAC(text))
    }
}


export let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
