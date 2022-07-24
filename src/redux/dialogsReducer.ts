import {v1} from "uuid";

const ADD_MESSAGE = 'ADD_MESSAGE'

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}

export type DialogsStateType = typeof dialogsState

const dialogsState= {
    dialogs: [
        {id: v1(), name: 'Arina'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Vlad'}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'Hello, it is frontend!'},
        {id: v1(), message: 'Really?'},
        {id: v1(), message: 'Really, didnt you believe?'},
    ]as Array<MessagesType>,
}

export const dialogsReducer = (state: DialogsStateType = dialogsState, action: dialogsReducerActionType): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: action.payload.text}
            return {
                ...state,
                messages: [ ...state.messages, newMessage]
            }
        default:
            return state
    }
}

export  type dialogsReducerActionType = addMessageACType

type addMessageACType = ReturnType<typeof addMessage>
export const addMessage = (text: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            text,
        }
    } as const
}


