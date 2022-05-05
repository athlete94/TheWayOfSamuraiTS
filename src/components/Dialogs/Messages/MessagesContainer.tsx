import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addMessage,
    changeMessageText,
    dialogsReducerActionType,
    DialogsStateType, MessagesType,
} from "../../../redux/dialogsReducer";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";
import {Messages} from "./Messages";

type MessagesContainerType = {
    messageText: string,
    messages: Array<MessagesType>,
}

export const MessagesContainer = ({messageText, messages}: MessagesContainerType) => {

    const dispatch = useDispatch<Dispatch<dialogsReducerActionType>>()

    const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeMessageText(e.currentTarget.value.trimStart()))
    }
    const addMessageHandler = () => {
        messageText && dispatch(addMessage(messageText))
        dispatch(changeMessageText(''))
    }


    return (
        <div>
            <Messages
                messages={messages}
                messageText={messageText}
                addMessageHandler={addMessageHandler}
                changeText={changeText}
            />

        </div>
    );
}