import {addPost, profileReducer} from "./profileReducer";
import {v1} from "uuid";
import {GetUserProfileResponceType} from "../api/ProfileApi";

test('add post', () => {
    let startState = {
        posts: [{id: v1(), text: 'Salam'}],
        textInput: '',
        userProfile: {} as GetUserProfileResponceType,
        status: ''
    }

    let endState = profileReducer(startState, addPost('aleykum'))

    expect(endState.posts.length).toBe(2)
    expect(endState.posts[0].text).toBe('aleykum')
})