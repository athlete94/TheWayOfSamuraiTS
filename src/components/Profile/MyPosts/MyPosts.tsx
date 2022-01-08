import s from "./MyPosts.module.css"
import Post from './Post/Post'

const MyPosts = () => {
    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText} name="text"></textarea>
            <button className={s.btnAddPost} >Add</button>
        </div>

        <h4>Posts</h4>
        <Post />
        <Post />
        <Post />
    </div>

}

export default MyPosts