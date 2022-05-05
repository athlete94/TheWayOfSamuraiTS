import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import Message from "./Message";
import {MessagesType} from "../../../redux/dialogsReducer";

type MessagesPropsType = {
    addMessageHandler: () => void
    messageText: string
    messages: Array<MessagesType>
    changeText: (e: ChangeEvent<HTMLTextAreaElement>) => void
 }

export const Messages = React.memo(({addMessageHandler, messages, messageText, changeText}: MessagesPropsType) => {
    console.log('messages')
    return (
        <div className={s.messages}>
            {messages.map(m => <Message key={m.id} text={m.message}/>)}
            <textarea name="message"
                      placeholder='Enter message'
                      value={messageText}
                      onChange={changeText}
                      autoFocus
            />
            <button onClick={addMessageHandler}>Send message</button>

        </div>
    );
}
)