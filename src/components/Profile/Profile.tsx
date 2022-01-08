import s from "./Profile.module.css"


const Profile = () => {
    return <div className={s.content}>
        <div className={s.content_image} >
            <img src='https://static.dw.com/image/44124169_403.jpg' alt="" />
        </div>

        <div className={s.user_info}>
            <div className={s.avatar}>
                <img src="https://vjoy.cc/wp-content/uploads/2020/10/kartinki-na-avatarku-dlya-parnej-i-muzhchin-18-scaled.jpg" alt="" />
            </div>

            <div className={s.description}>
                Description
            </div>
        </div>

        <div>
            <h4>Posts</h4>
            <div>Post1</div>
            <div>Post2</div>
            <div>Post3</div>
        </div>
    </div>
}

export {Profile}