import React, {ChangeEvent, useState} from 'react';
import s from "../Dialogs.module.css";
import Message from "./Message";
import {MessagesType} from "../../../redux/dialogsReducer";

type MessagesPropsType = {
    addMessage: (text: string) => void
    messages: Array<MessagesType>
}

export const Messages = ({addMessage, messages}: MessagesPropsType) => {

    const [changeText, setChangeText] = useState('')

    const newMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setChangeText(e.currentTarget.value.trimStart())
    }
    const onClickHandler = () => {
        changeText && addMessage(changeText)
        setChangeText('')
    }

    return (
        <div className={s.messages}>
            {messages.map(m => <Message key={m.id} text={m.message}/>)}
            <textarea name="message"
                      placeholder='Enter message'
                      value={changeText}
                      onChange={newMessageHandler}
                      autoFocus
            />
            <button onClick={onClickHandler}>Send message</button>

        </div>
    );
};
