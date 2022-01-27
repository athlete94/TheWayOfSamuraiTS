import {v1} from "uuid";
import exp from "constants";

export type postDataType = {
    id: string
    text: string
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messageDataType = {
    id: number
    message: string
}

export type stateType = {
    postData: Array<postDataType>
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
}

let state: stateType = {
    postData: [
        {id: v1(), text: "It is my post"}
    ],
    dialogsData: [
        {id: 1, name: 'Arina'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vlad'}
    ],
    messageData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello, it is frontend!'},
        {id: 3, message: 'Really?'},
        {id: 4, message: 'Really, didnt you believe?'},
    ]
}

export default state