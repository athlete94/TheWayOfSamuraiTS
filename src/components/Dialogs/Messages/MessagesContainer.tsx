import React, { useCallback} from 'react';
import {
    addMessage, MessagesType,
} from "../../../redux/dialogsReducer";
import {Messages} from "./Messages";
import {useAppDispatch} from "../../../redux/hooks";

type MessagesContainerType = {
    messages: Array<MessagesType>,
}

export const MessagesContainer = React.memo(({messages}: MessagesContainerType) => {

    const dispatch = useAppDispatch()

    const addMessageHandler = useCallback((message: string) => {
        dispatch(addMessage(message))
    }, [] )


    return (
        <div style={{width:"45%"}}>
            <Messages
                messages={messages}
                addMessageHandler={addMessageHandler}
            />

        </div>
    );
})