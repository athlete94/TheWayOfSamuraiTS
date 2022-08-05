import s from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"
import React, {useEffect} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {setUserProfileTC, setUserStatusTC, updatePhoto, UpdatePhotoTC} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {Preloader} from "../Preloader/circle/Preloader";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";


export const Profile = () => {

    let statusLoad = useAppSelector(state => state.AppReducer.status)
    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    let {userProfile, status} = useAppSelector(state => state.profileReducer)
    let id = useAppSelector(state => state.AuthReducer.userId)
    let dispatch = useAppDispatch()

    let {userId} = useParams()

    if(!userId) {
        userId = String(id)
    }

    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))
    }, [userId, userProfile.photos.large])

    useEffect(() => {
        dispatch(setUserStatusTC(Number(userId)))
    }, [userId, status])


    if(!isLogin) {
        return <Navigate to={'/login'} />
    }

    return <div className={s.profile}>
        {statusLoad === 'loading' ? <Preloader/> :
            <div>
                <UserInfo userProfile={userProfile} status={status}/>
                <MyPostsContainer/>
            </div>
        }

    </div>
}
