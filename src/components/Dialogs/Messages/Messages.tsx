import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import Message from "./Message";
import {MessagesType} from "../../../redux/dialogsReducer";
import {AddItemForm} from "../../AddItemForm/AddItemForm";

type MessagesPropsType = {
    addMessageHandler: (message: string) => void
    messages: Array<MessagesType>
 }

export const Messages = React.memo(({addMessageHandler, messages}: MessagesPropsType) => {
    console.log('messages')
    return (
        <div className={s.messages}>
            {messages.map(m => <Message key={m.id} text={m.message}/>)}
            <AddItemForm callBack={(message: string) => addMessageHandler(message)}/>
        </div>
    );
}
)