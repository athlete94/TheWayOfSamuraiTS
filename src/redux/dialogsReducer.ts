import {v1} from "uuid";

const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'

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
    messageText: '',
}

export const dialogsReducer = (state: DialogsStateType = dialogsState, action: dialogsReducerActionType): DialogsStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: v1(), message: action.payload.text}
            return {
                ...state,
                messages: [ ...state.messages, newMessage]
            }
        case CHANGE_MESSAGE_TEXT:
            return {...state, messageText: action.payload.text}
        default:
            return state
    }
}

export  type dialogsReducerActionType = addMessageACType | changeMessageTextActionType

type addMessageACType = ReturnType<typeof addMessage>
export const addMessage = (text: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            text,
        }
    } as const
}

type changeMessageTextActionType = ReturnType<typeof changeMessageText>
export const changeMessageText = (text: string) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        payload: {
            text,
        }
    }as const
}

