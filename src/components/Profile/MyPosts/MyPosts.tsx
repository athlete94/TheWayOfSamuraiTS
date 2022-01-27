import s from "./MyPosts.module.css"
import Post from './Post/Post'
import {useState, ChangeEvent, KeyboardEvent} from "react";
import {v1} from "uuid";
import React from "react";
import {postDataType} from '../../../redux/state'


type MyPostsPropsType = {
    postData: Array<postDataType>
}


const MyPosts: React.FC<MyPostsPropsType> = ({postData}) => {

    const [posts, setPosts] = useState<Array<postDataType>>(postData)
    const [textInput, setTextInput] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTextInput(e.currentTarget.value)
    const onClickHandler = () => {
        if(textInput === "\n") { // если нажали Enter ничего не вводя, пост не добавить
            setTextInput('')
        }
        else if ( textInput === '') {
            return
        }
        else {
            let newPost = {id: v1(), text: textInput}
            setPosts([newPost, ...posts])
            setTextInput('')
        }

    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.charCode === 13) {
            onClickHandler()
        }
    }


    return <div className={s.myPosts}>

        <div className={s.addPost}>
            <textarea className={s.postText}
                      value={textInput}
                      onChange={onChangeHandler}
                      onKeyPress={onKeyPressHandler}/>

            <button className={s.btnAddPost}
                    onClick={onClickHandler}
            >Add
            </button>
        </div>

        <h4>Posts</h4>
        {posts.map(p => <Post text={p.text}/>)}
    </div>

}

export default MyPosts