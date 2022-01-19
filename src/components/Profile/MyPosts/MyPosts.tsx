import s from "./MyPosts.module.css"
import Post from './Post/Post'

type postDataType = {
    id: number
    text: string
}


const MyPosts = () => {

    const postData = [
        {id: 1, text: "Salam aleykum"},
        {id: 2, text: "Hello, friends!"},
        {id: 3, text: "It is my post"},
    ]

    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText} name="text" />
            <button className={s.btnAddPost} >Add</button>
        </div>

        <h4>Posts</h4>
        {postData.map(p => <Post text={p.text} />)}
    </div>

}

export default MyPosts