import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {UpdatePhotoTC, UpdateStatusTC} from "../../../redux/profileReducer";
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {Dots} from "../../Preloader/dots/dots";
import React, {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {InputTypeFile} from "../../InputTypeFile/InputTypeFile";
import {NavLink} from "react-router-dom";
import UserContacts from "./UserContacts/UserContacts";
import EditIcon from '@mui/icons-material/Edit';


type UserInfoType = {
    userProfile: GetUserProfileResponceType,
    status: string
    id: number
}
const UserInfo = React.memo(({userProfile, status, id}: UserInfoType) => {
    const {
        userId,
        fullName,
        aboutMe,
        lookingForAJobDescription,
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
            <div className={s.description_content}>
                <div className={s.fullName}>{fullName}</div>
                <div className={s.status}>
                    <EditableSpan title={status ? status : 'change status..'} callback={updateStatus}/>
                    {statusLoad === 'statusUpdating' && <Dots/>}
                </div>
                <div>{aboutMe}</div>
                <div>{lookingForAJobDescription && `Job: ${lookingForAJobDescription}`}</div>
                <div>
                    <UserContacts />
                </div>
            </div>

            {
                userId === id &&
                <div className={s.editBtn}>
                    <NavLink to='/UpdateProfile'>
                        <EditIcon fontSize={'small'}/>
                    </NavLink>
                </div>
            }
        </div>
    </div>
})

export default UserInfo