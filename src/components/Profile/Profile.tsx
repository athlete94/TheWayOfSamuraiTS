import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import UserInfo from "./UserInfo/UserInfo"


const Profile = () => {
    return <div className={s.profile}>
        <div className={s.content_image} >
            <img src='https://static.dw.com/image/44124169_403.jpg' alt="" />
        </div>

        <UserInfo />
        <MyPosts />
    </div>
}

export {Profile}