import s from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"
import React, {useEffect} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {ProfileStateType, setUserProfileTC} from "../../redux/profileReducer";
import {GetUserProfileResponceType, ProfileApi} from "../../api/ProfileApi";

const Profile = () => {
    let dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setUserProfileTC(2))
    //
    // }, [])

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