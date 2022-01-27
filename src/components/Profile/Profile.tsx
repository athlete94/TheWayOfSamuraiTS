import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import UserInfo from "./UserInfo/UserInfo"
import React from "react";
import {postDataType} from "../../redux/state";

type ProfilePropsType = {
    postData: Array<postDataType>
}


const Profile: React.FC<ProfilePropsType> = ({postData}) => {
    return <div className={s.profile}>
        <div className={s.content_image} >
            <img src='https://static.dw.com/image/44124169_403.jpg' alt="" />
        </div>

        <UserInfo />
        <MyPosts postData={postData}/>
    </div>
}

export {Profile}