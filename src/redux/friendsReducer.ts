import {setUsers, UsersType} from "./UsersReducer";
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
        default:
            return state
    }
}

export type FriendsReducerActonType = SetFriendsType
type SetFriendsType = ReturnType<typeof setFriends>
export const setFriends = (friends: UsersType[]) => {
    return {
        type: 'SET_FRIENDS',
        friends
    }
}

export const setFriendsTC = (currentPage: number, pageSize: number, friend: boolean): AppThunk => dispatch => {
    dispatch(setStatus('loading'))
    usersApi.getFriends(currentPage, pageSize, friend)
        .then(res => {
                dispatch(setStatus("idle"))
                dispatch(setFriends(res.data.items))
            }
        )
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}





