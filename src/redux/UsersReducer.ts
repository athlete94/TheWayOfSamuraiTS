import {Dispatch} from "redux";
import {usersApi} from "../api/UsersApi";
import {AxiosError} from "axios";
import {AppReducerActionType, setError, setStatus} from "./appReducer";
import {AppThunk} from "./store";

const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
export  const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_DISABLED = 'SET_DISABLED'
const SET_PAGE_SIZE = 'SET_PAGE_SIZE'

export type UsersType = {
    id: number,
    name: string,
    photos: {
        small: null,
        large: null,
    }
    status: string
    followed: boolean
}

export type UsersInitialStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    toggleFollowing: number[]
}
export const usersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    toggleFollowing: []
}


export const UsersReducer = (state: UsersInitialStateType = usersInitialState, action: UsersReducerActionType): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.id ? {...u, followed: action.payload.followed} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload.users] //склеиваем старых и новых

            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload.pageSize
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload.totalUsersCount
            }
        case SET_DISABLED:
            return {
                ...state,
                toggleFollowing: action.payload.isDisabled
                    ? [...state.toggleFollowing, action.payload.userId]
                    : state.toggleFollowing.filter(id => id !== action.payload.userId)
            }

        default:
            return state
    }
}

export type UsersReducerActionType =
    FollowActionType |
    setUsersType |
    SetCurrentPageType |
    SetTotalUsersCountType |
    SetDisabledType
    | AppReducerActionType
    | SetPageSizeType

type FollowActionType = ReturnType<typeof followUnfollow>
export const followUnfollow = (id: number, followed: boolean) => {
    return {
        type: FOLLOW,
        payload: {
            id,
            followed,
        }
    } as const
}

type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        }
    } as const
}

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

type SetPageSizeType = ReturnType<typeof setPageSize>
export const setPageSize = (pageSize: number) => {
    return {
        type: SET_PAGE_SIZE,
        payload: {
            pageSize
        }
    } as const
}

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalUsersCount
        }
    } as const
}


type SetDisabledType = ReturnType<typeof setDisabled>
export const setDisabled = (userId: number, isDisabled: boolean) => {
    return {
        type: SET_DISABLED,
        payload: {
            isDisabled,
            userId,
        }
    } as const
}

// thunk creactors
export const setUsersTC = (currentPage: number, pageSize: number): AppThunk => dispatch => {
    dispatch(setStatus('loading'))
    usersApi.getUsers(currentPage, pageSize)
        .then(res => {
                dispatch(setStatus("idle"))
                dispatch(setTotalUsersCount(res.data.totalCount))
                dispatch(setUsers(res.data.items))
            }
        )
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
    // let res = await usersApi.getUsers(currentPage, pageSize)
    // dispatch(setLoading(false))
    // dispatch(setUsers(res.data.items))

}
export const followUserTC = (userId: number, followed: boolean): AppThunk => dispatch => {
    dispatch(setDisabled(userId, true))
    usersApi.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabled(userId, false))
                dispatch(followUnfollow(userId, followed))
            } else {
                dispatch(setError(res.data.messages[0]))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}
export const deleteUserTC = (userId: number, followed: boolean): AppThunk => dispatch => {
    dispatch(setDisabled(userId, true))
    usersApi.unfollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabled(userId, false))
                dispatch(followUnfollow(userId, followed))
            } else {
                dispatch(setError(res.data.messages[0]))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}
