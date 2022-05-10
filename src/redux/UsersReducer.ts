import {Dispatch} from "redux";
import {usersApi} from "../api/UsersApi";

const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_LOADING = 'SET_LOADING'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_DISABLED = 'SET_DISABLED'

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
    loading: boolean,
    toggleFollowing: number[]
}
export const usersInitialState: UsersInitialStateType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 100,
    currentPage: 1,
    loading: false,
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
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload.totalUsersCount
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload.loading
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
    SetLoadingType |
    SetDisabledType

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

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage
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

export type SetLoadingType = ReturnType<typeof setLoading>
export const setLoading = (loading: boolean) => {
    return {
        type: SET_LOADING,
        payload: {
            loading,
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
    }as const
}

// thunk creactors
export const setUsersTC = (users: Array<UsersType>, currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    usersApi.getUsers(currentPage, pageSize)
        .then(res => {
                dispatch(setLoading(false))
                //dispatch(setTotalUsersCount(response.data.totalCount))
                dispatch(setUsers(res.data.items))
            }
        )
}
export const followUserTC = (userId: number, followed: boolean) => (dispatch: Dispatch) => {
    dispatch(setDisabled(userId,true))
    usersApi.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabled(userId,false))
                dispatch(followUnfollow(userId, followed))
            }
        })
}
export const deleteUserTC = (userId: number, followed: boolean) => (dispatch: Dispatch) => {
    dispatch(setDisabled(userId, true))
    usersApi.unfollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabled(userId, false))
                dispatch(followUnfollow(userId, followed))
            }
        })
}
