import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {useDispatch, useSelector} from "react-redux";
import {setUserProfileTC, UpdateStatusTC} from "../../../redux/profileReducer";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {AppStateType} from "../../../redux/store";
import {SetStatusType, StatusType} from "../../../redux/appReducer";
import {Dots} from "../../Preloader/dots/dots";
import React, {useEffect} from "react";

type UserInfoType = {
    userProfile: GetUserProfileResponceType,
    status: string
}
const UserInfo = ({userProfile, status}: UserInfoType) => {
    const {
        userId,
        fullName,
        lookingForAJobDescription,
        github,
        vk,
        instagram,
        photos
    } = userProfile

    let statusLoad = useSelector<AppStateType, StatusType>(state => state.AppReducer.status)
    let dispatch = useDispatch()


    const updateStatus = (status: string) => {
        dispatch(UpdateStatusTC(status))

    }


    return <div className={s.user_info}>
        <div className={s.avatar}>
            <img
                src={photos.small ? photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"}
                alt=""/>
        </div>

        <div className={s.description}>
            <div className={s.fullName}>{fullName}</div>
            <div className={s.status}>
                <EditableSpan title={status ? status : 'change status..'} callback={updateStatus}/>
                {statusLoad === 'statusUpdating' && <Dots/>}
            </div>
            <div>{lookingForAJobDescription && `Job: ${lookingForAJobDescription}`}</div>
            <div>
                Social:
                <div>{vk}</div>
                <div>{github}</div>
            </div>
        </div>
    </div>
}

export default UserInfo