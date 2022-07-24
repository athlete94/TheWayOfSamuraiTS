import {followUnfollow, setDisabled, setUsers, UsersType} from "./UsersReducer";
import {setError, setStatus} from "./appReducer";
import {usersApi} from "../api/UsersApi";
import {AxiosError} from "axios";
import {AppThunk} from "./store";

export type InitialStateType = typeof friendsInitialState
export const friendsInitialState = {
    friends: [] as UsersType[],
}


export const friendsReducer = (state:InitialStateType = friendsInitialState, action: FriendsReducerActonType): InitialStateType => {
    switch (action.type) {
        case 'SET_FRIENDS':
            return {
                ...state,
                friends: action.friends
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

export type FriendsReducerActonType = SetFriendsType | DeleteFriendType
type SetFriendsType = ReturnType<typeof setFriends>
export const setFriends = (friends: UsersType[]) => {
    return {
        type: 'SET_FRIENDS',
        friends
    }as const
}
type DeleteFriendType = ReturnType<typeof deleteFriend>
export const deleteFriend = (id: number) => {
    return {
        type: 'DELETE_FRIEND',
        id
    }as const
}

export const setFriendsTC = (currentPage: number, pageSize: number, friend: boolean): AppThunk => dispatch => {
    dispatch(setStatus('loading'))
    usersApi.getFriends(currentPage, pageSize, friend)
        .then(res => {
            debugger
                dispatch(setStatus("idle"))
                dispatch(setFriends(res.data.items))
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





