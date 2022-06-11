import s from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"
import React, {useEffect} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStateType, setUserProfileTC, setUserStatusTC} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router-dom";
import {Preloader} from "../Preloader/circle/Preloader";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";


export const Profile = () => {

    let statusLoad = useAppSelector(state => state.AppReducer.status)
    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    let {userProfile, status} = useAppSelector(state => state.profileReducer)
    let dispatch = useAppDispatch()

    let {userId} = useParams()

    useEffect(() => {
        dispatch(setUserProfileTC(Number(userId)))

    }, [userId])

    useEffect(() => {
        dispatch(setUserStatusTC(Number(userId)))
    },[status, userId])


    if(!isLogin) {
        return <Navigate to={'/login'} />
    }

    return <div className={s.profile}>
        <div className={s.content_image}>
            <img src='https://static.dw.com/image/44124169_403.jpg' alt=""/>
        </div>

        {statusLoad === 'loading' ? <Preloader/> :
            <div>

                <UserInfo userProfile={userProfile} status={status}/>
                <MyPostsContainer/>
            </div>
        }

    </div>
}
