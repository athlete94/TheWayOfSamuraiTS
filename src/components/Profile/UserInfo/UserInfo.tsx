import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {useDispatch} from "react-redux";
import {setUserProfileTC} from "../../../redux/profileReducer";

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


    return <div className={s.user_info}>
        <div className={s.avatar} >
            <img
                src={photos.small ? photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"}
                alt=""/>
        </div>


        <div className={s.description}>
            <div className={s.fullName}>{fullName}</div>
            <div className={s.status}>{status}</div>
            <div>{lookingForAJobDescription && `Job: ${lookingForAJobDescription}`}</div>
        </div>
    </div>
}

export default UserInfo