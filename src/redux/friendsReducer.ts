import {followUnfollow, SET_CURRENT_PAGE, SetCurrentPageType, setDisabled, setUsers, UsersType} from "./UsersReducer";
import {setError, setStatus} from "./appReducer";
import {usersApi} from "../api/UsersApi";
import {AxiosError} from "axios";
import {AppThunk} from "./store";

export type InitialStateType = typeof friendsInitialState
export const friendsInitialState = {
    friends: [] as UsersType[],
    currentPage: 1,
    pageSize: 5,
    totalCount: 0,
    error: ''
}


export const friendsReducer = (state: InitialStateType = friendsInitialState, action: FriendsReducerActonType): InitialStateType => {
    switch (action.type) {
        case 'SET_FRIENDS':
            return {
                ...state,
                friends: action.friends,
            }
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: action.count,
            }
        case "SET_CURRENT_FRIEND_PAGE":
            return {
                ...state,
                currentPage: action.value
            }

        case 'DELETE_FRIEND':
            return {
                ...state,
                friends: state.friends.filter(f => f.id !== action.id)
            }
        default:
            return state
    }
}

export type FriendsReducerActonType = SetFriendsType | DeleteFriendType | SetTotalCountType | SetCurrentFriendPageType
type SetFriendsType = ReturnType<typeof setFriends>
export const setFriends = (friends: UsersType[]) => {
    return {
        type: 'SET_FRIENDS',
        friends
    } as const
}
type DeleteFriendType = ReturnType<typeof deleteFriend>
export const deleteFriend = (id: number) => {
    return {
        type: 'DELETE_FRIEND',
        id
    } as const
}

type SetTotalCountType = ReturnType<typeof setTotalCount>
export const setTotalCount = (count: number) => {
    return {
        type: 'SET_TOTAL_COUNT',
        count
    } as const
}

type SetCurrentFriendPageType = ReturnType<typeof setCurrentFriendPage>
export const setCurrentFriendPage = (value: number) => {
    return {
        type: 'SET_CURRENT_FRIEND_PAGE',
        value
    }as const
}

export const setFriendsTC = (currentPage: number, pageSize: number, friend: boolean): AppThunk => dispatch => {
    dispatch(setStatus('loading'))
    usersApi.getFriends(currentPage, pageSize, friend)
        .then(res => {
                debugger
                dispatch(setStatus("idle"))
                dispatch(setFriends(res.data.items))
                dispatch(setTotalCount(res.data.totalCount))
            }
        )
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}

export const deleteFriendTC = (userId: number): AppThunk => dispatch => {
    dispatch(setDisabled(userId, true))
    usersApi.unfollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setDisabled(userId, false))
                dispatch(deleteFriend(userId))
            } else {
                dispatch(setError(res.data.messages[0]))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}





