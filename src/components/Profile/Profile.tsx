import s from "./Profile.module.css"
import UserInfo from "./UserInfo/UserInfo"
import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type postDataType = {
    id: string
    text: string
}

const Profile = () => {
    return <div className={s.profile}>
        <div className={s.content_image}>
            <img src='https://static.dw.com/image/44124169_403.jpg' alt=""/>
        </div>

        <UserInfo/>
        <MyPostsContainer/>
    </div>
}

export {Profile}