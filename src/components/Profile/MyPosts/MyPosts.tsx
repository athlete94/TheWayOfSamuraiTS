import s from "./MyPosts.module.css"
import Post from './Post/Post'


const MyPosts = () => {

    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText} name="text" />
            <button className={s.btnAddPost} >Add</button>
        </div>

        <h4>Posts</h4>
        <Post />
    </div>

}

export default MyPosts