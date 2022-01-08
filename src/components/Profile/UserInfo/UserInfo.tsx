import s from './UserInfo.module.css'

const UserInfo = () => {
    return <div className={s.user_info}>
    <div className={s.avatar}>
        <img src="https://vjoy.cc/wp-content/uploads/2020/10/kartinki-na-avatarku-dlya-parnej-i-muzhchin-18-scaled.jpg" alt="" />
    </div>

    <div className={s.description}>
        Description
    </div>
</div>
}

export default UserInfo