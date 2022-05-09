import s from './UserInfo.module.css'
import {GetUserProfileResponceType} from "../../../api/ProfileApi";
import {useDispatch} from "react-redux";
import {setUserProfileTC, UpdateStatusTC} from "../../../redux/profileReducer";
import {EditableSpan} from "../../EditableSpan/EditableSpan";

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
    let dispatch = useDispatch()

    const updateStatus = (status: string) => {
        dispatch(UpdateStatusTC(status))
    }


    return <div className={s.user_info}>
        <div className={s.avatar} >
            <img
                src={photos.small ? photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"}
                alt=""/>
        </div>

        <div className={s.description}>
            <div className={s.fullName}>{fullName}</div>
            <div className={s.status}>
                <EditableSpan title={status} callback={updateStatus} />
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