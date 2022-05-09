import {Dispatch} from "redux";
import {authApi} from "../api/Auth";

export type AuthInitialStateType = typeof initialState
const initialState = {
    userId: 0,
    email: '',
    login: '',
    isLogin: false,
}

export type ActionAuthType = SetUserDataType

export const AuthReducer = (state: AuthInitialStateType = initialState, action: ActionAuthType ): AuthInitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isLogin: true,
            }
        default:
            return state
    }
};

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (data: {userId: number, email: string, login: string}) => {
    return {
        type: 'SET_USER_DATA',
        data
    }as const
}

export const setUserDataTC = () => (dispatch: Dispatch) => {
    authApi.getAuth()
        .then(res => {
            if(res.data.resultCode === 0) {
                let {id: userId, email, login} = res.data.data
                dispatch(setUserData({userId, email, login}))
            }
        })
}
