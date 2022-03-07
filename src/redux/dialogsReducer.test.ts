import {v1} from "uuid";
import {addMessageAC, dialogsReducer} from "./dialogsReducer";


test('add message', () => {
    let startState = {
        dialogs: [{id: v1(), name: 'Arina'},],
        messages: [{id: v1(), message: 'Hi!'},]
    }

    let endState =  dialogsReducer(startState, addMessageAC('New post'))

    expect(endState.messages.length).toBe(2)
    expect(endState.messages[1].message).toBe('New post')
})