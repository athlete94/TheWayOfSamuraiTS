import {v1} from "uuid";
import {ProfileApi} from "../api/ProfileApi";
import {GetUserProfileResponceType} from '../api/ProfileApi'
import {AppReducerActionType, setError, setStatus} from "./appReducer";
import {AxiosError} from "axios";
import {AppThunk} from "./store";
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const DEL_POST = 'DEL_POST'
const UPDATE_PHOTO = 'UPDATE_PHOTO'

export type PostsType = {
    id: string
    text: string
}

export type ProfileStateType = typeof initialState

let initialState = {
    posts: [] as Array<PostsType>,
    userProfile: {
        userId: 0,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        },
    } as GetUserProfileResponceType,
    status: '',
}


export const profileReducer = (state: ProfileStateType = initialState, action: profileReducerActionType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), text: action.payload.text}
            return {...state, posts: [newPost, ...state.posts]}
        case DEL_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.payload.id)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload.user
            }
        case SET_USER_STATUS:
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        case UPDATE_PHOTO:
            debugger
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.payload.photos}
            }
        default:
            return state
    }
}

export type profileReducerActionType = addPostACType
    | SetUserProfileType
    | SetUserStatusType
    | UpdateStatusType
    | AppReducerActionType
    | DeletePostType
    | UpdatePhotoType

type addPostACType = ReturnType<typeof addPost>
export const addPost = (text: string) => {
    return {
        type: ADD_POST,
        payload: {
            text
        }
    } as const
}

type DeletePostType = ReturnType<typeof deletePost>
export const deletePost = (id: string) => {
    return {
        type: DEL_POST,
        payload: {
            id
        }
    } as const
}

type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (user: GetUserProfileResponceType) => {

    return {
        type: SET_USER_PROFILE,
        payload: {
            user
        }
    } as const
}
type SetUserStatusType = ReturnType<typeof setUserStatus>
export const setUserStatus = (userId: number, status: string) => {
    return {
        type: SET_USER_STATUS,
        payload: {
            userId,
            status,
        }
    } as const
}

type UpdateStatusType = ReturnType<typeof updateStatus>
export const updateStatus = (status: string) => {
    return {
        type: 'UPDATE_STATUS',
        payload: {
            status,
        }
    } as const
}

type UpdatePhotoType = ReturnType<typeof updatePhoto>
export const updatePhoto = (photos: { small: string, large: string }) => {
    return {
        type: 'UPDATE_PHOTO',
        payload: {
            photos,
        }
    } as const
}

//thunk creators

export const setUserProfileTC = (userId: number): AppThunk => dispatch => {
    dispatch(setStatus('loading'))
    ProfileApi.getUserProfile(userId)
        .then(res => {
            dispatch(setStatus('idle'))
            dispatch(setUserProfile(res.data))
        })
}
export const setUserStatusTC = (userId: number): AppThunk => dispatch => {
    ProfileApi.getUserStatus(userId)
        .then(res => {
            if (res.data === null)
                dispatch(setUserStatus(userId, 'status...'))
            else {
                dispatch(setUserStatus(userId, res.data))
            }
        })
}

export const UpdateStatusTC = (status: string): AppThunk => dispatch => {
    dispatch(setStatus('statusUpdating'))
    ProfileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(updateStatus(status))
            } else {
                dispatch(setError(res.data.messages[0]))
            }

            dispatch(setStatus('idle'))

        })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
            dispatch(setStatus('idle'))
        })
}

export const UpdatePhotoTC = (image: File): AppThunk => async dispatch => {
    try {
        dispatch(setStatus('loading'))
        let responce = await ProfileApi.updatePhoto(image)
        if (responce.data.resultCode === 0) {
            dispatch(updatePhoto(responce.data.data))
            dispatch(setStatus('idle'))
        }

    } catch (err: any) {
        dispatch(setError(err.message))
        dispatch(setStatus('idle'))
    }
}

export const UpdateProfileTC = (data: any): AppThunk => async dispatch => {

    try {
        dispatch(setStatus('loading'))
        let responce = await ProfileApi.updateProfile(data)
        if (responce.data.resultCode === 0) {
            dispatch(setUserProfile(data))
            dispatch(setStatus('idle'))
        }

    } catch (err: any) {
        dispatch(setError(err.message))
        dispatch(setStatus('idle'))
    }
}



export type UpdateProfileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
