import {v1} from "uuid";
import {Dispatch} from "redux";
import {ProfileApi} from "../api/ProfileApi";
import {GetUserProfileResponceType} from '../api/ProfileApi'

const ADD_POST = 'ADD_POST'
const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

export type PostsType = {
    id: string
    text: string
}

export type ProfileStateType = typeof initialState

let initialState = {
    posts: [] as Array<PostsType>,
    textInput: '',
    userProfile: {
        userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Aza',
        contacts: {},
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
        photos: {
            small: '',
            large: ''
        },
    } as GetUserProfileResponceType,
    status: '',
}


export const profileReducer = (state: ProfileStateType = initialState, action: profileReducerActionType): ProfileStateType => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {id: v1(), text: action.payload.text}
            return {...state, posts:[newPost, ...state.posts]}
        case CHANGE_TEXT_INPUT:
            return {...state, textInput: action.payload.text}
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload.user
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }

}

export type profileReducerActionType = addPostACType | changeInputTextActionType | SetUserProfileType | SetUserStatusType

type addPostACType = ReturnType<typeof addPost>
export const addPost = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    }as const
}

type changeInputTextActionType = ReturnType<typeof changeInputText>
export const changeInputText = (text: string) => {
    return {
        type: 'CHANGE_TEXT_INPUT',
        payload: {
            text,
        },
    }as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (user: GetUserProfileResponceType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            user
        }
    }as const
}
type SetUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (userId: number, status: string) => {
    return {
        type: SET_USER_STATUS,
        payload: {
            userId,
            status,
        }
    }as const
}

//thunk creators

export const setUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    ProfileApi.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data))
            debugger
        })
}
export const setUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
    ProfileApi.getUserStatus(userId)
        .then(res => {
            dispatch(setUserStatus(userId, res.data))
        })
}