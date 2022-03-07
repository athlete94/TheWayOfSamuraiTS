import {v1} from "uuid";

const ADD_POST = 'ADD_POST'

export type PostsType = {
    id: string
    text: string
}

export type InitialStateType = typeof initialState

let initialState = {
    posts: [] as Array<PostsType>
}


export const profileReducer = (state: InitialStateType = initialState, action: profileReducerActionType): InitialStateType => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {id: v1(), text: action.payload.text}
            return {...state, posts:[newPost, ...state.posts]}
        default:
            return state
    }

}

type profileReducerActionType = addPostACType

type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    }as const
}