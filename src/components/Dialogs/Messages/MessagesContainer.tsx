import React, {ChangeEvent} from 'react';
import {
    addMessage,
    changeMessageText,
    dialogsReducerActionType,
    DialogsStateType, MessagesType,
} from "../../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {useAppDispatch} from "../../../redux/hooks";

type MessagesContainerType = {
    messageText: string,
    messages: Array<MessagesType>,
}

export const MessagesContainer = ({messageText, messages}: MessagesContainerType) => {

    const dispatch = useAppDispatch()

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