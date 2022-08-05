import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {UpdatePhotoTC, UpdateStatusTC} from "../../../redux/profileReducer";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {Dots} from "../../Preloader/dots/dots";
import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {InputTypeFile} from "../../InputTypeFile/InputTypeFile";

type UserInfoType = {
    userProfile: GetUserProfileResponceType,
    status: string
}
const UserInfo = React.memo(({userProfile, status}: UserInfoType) => {
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


    const updateStatus = useCallback((status: string) => {
        dispatch(UpdateStatusTC(status))
    }, [dispatch])

    const setUserAva = (ava: File) => {
        dispatch(UpdatePhotoTC(ava))
    }

    return <div className={s.user_info}>
        <div className={s.avatar}>
            <InputTypeFile userId={userId} setUserAva={setUserAva} userAva={photos.large}/>
        </div>

        <div className={s.description}>
            <div className={s.fullName}>{fullName}</div>
            <div className={s.status}>
                <EditableSpan title={status ? status : 'change status..'} callback={updateStatus}/>
                {statusLoad === 'statusUpdating' && <Dots/>}
            </div>
            <div>{lookingForAJobDescription && `Job: ${lookingForAJobDescription}`}</div>
            <div>
                {(vk || github || instagram) &&
                <div>
                    Social:
                    <div>{vk}</div>
                    <div>{github}</div>
                    <div>{instagram}</div>
                </div>
                }
            </div>
        </div>
    </div>
})

export default UserInfo