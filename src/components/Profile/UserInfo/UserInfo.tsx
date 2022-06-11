import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {setUserProfileTC, UpdateStatusTC} from "../../../redux/profileReducer";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {Dots} from "../../Preloader/dots/dots";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";

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

    let statusLoad = useAppSelector(state => state.AppReducer.status)
    let dispatch = useAppDispatch()


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