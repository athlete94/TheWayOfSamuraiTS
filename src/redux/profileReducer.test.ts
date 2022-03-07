import {addPostAC, profileReducer} from "./profileReducer";
import {v1} from "uuid";

test('add post', () => {
    let startState = {posts: [{id: v1(), text: 'Salam'}]}

    let endState = profileReducer(startState, addPostAC('aleykum'))

    expect(endState.posts.length).toBe(2)
    expect(endState.posts[0].text).toBe('aleykum')
})