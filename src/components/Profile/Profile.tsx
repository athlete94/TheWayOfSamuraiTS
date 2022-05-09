import s from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"
import React, {useEffect} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileStateType, setUserProfileTC, setUserStatusTC} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

const Profile = () => {
    let dispatch = useDispatch()

    let {userId} = useParams()

    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))
        dispatch(setUserStatusTC(Number(userId)))
    }, [userId])

    let {userProfile, status} = useSelector<AppStateType, ProfileStateType>(state => state.profileReducer)

    return <div className={s.profile}>
        <div className={s.content_image}>
            <img src='https://static.dw.com/image/44124169_403.jpg' alt=""/>
        </div>

        <UserInfo userProfile={userProfile} status={status}/>
        <MyPostsContainer/>
    </div>
}

export {Profile}