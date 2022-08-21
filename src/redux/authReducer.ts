import {Dispatch} from "redux";
import {authApi, captchaApi, LoginRequestParams} from "../api/Auth";
import {AppReducerActionType, setError, setStatus} from "./appReducer";
import {AxiosError} from "axios";
import {AppThunk} from "./store";

export type AuthInitialStateType = typeof initialState
const initialState = {
    userId: 0,
    email: '',
    login: '',
    isAuth: false,
    isLogin: false,
    captcha: '',
}

export type ActionAuthType = SetIsAuthType | AppReducerActionType | SetIsLoginType | SetCaptchaUrlType

export const AuthReducer = (state: AuthInitialStateType = initialState, action: ActionAuthType): AuthInitialStateType => {
    switch (action.type) {
        case 'SET_IS_AUTH':
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth,
            }
        case 'SET_IS_LOGIN':
            return {
                ...state,
                isLogin: action.isLogin
            }
        case 'SET_CAPTCHA_URL':
            return  {
                ...state,
                captcha: action.captcha
            }
        default:
            return state
    }
};

//action creators

type SetIsAuthType = ReturnType<typeof setIsAuth>
export const setIsAuth = (data: { userId: number, email: string, login: string }, isAuth: boolean) => {
    return {
        type: 'SET_IS_AUTH',
        data,
        isAuth
    } as const
}
type SetIsLoginType = ReturnType<typeof setIsLogin>
export const setIsLogin = (isLogin: boolean) => {
    return {
        type: "SET_IS_LOGIN",
        isLogin,
    } as const
}

type SetCaptchaUrlType = ReturnType<typeof setCaptchaUrl>
export const setCaptchaUrl = (captcha: string) => {
    return {
        type: "SET_CAPTCHA_URL",
        captcha,
    } as const
}


//thunk

export const setIsAuthTC = (): AppThunk => async dispatch => {
    try {
        let res = await authApi.getAuth()
        let {id: userId, email, login} = res.data.data
        if (res.data.resultCode === 0) {
            dispatch(setIsLogin(true))
        } else {
            dispatch(setIsLogin(false))
        }
        dispatch(setIsAuth({userId, email, login}, true))
    }
    catch(e: any) {
        throw new Error(e)
    }
}


export const loginTC = (data: LoginRequestParams): AppThunk => dispatch =>  {
    authApi.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLogin(true))
                dispatch(setCaptchaUrl(''))
            } else if(res.data.resultCode === 10) {
                dispatch(getCaptchaTC())
            } else {
                dispatch(setError(res.data.messages[0]))
            }
        }).then(() => {
        dispatch(setIsAuthTC())
    })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}

export const logoutTC = (): AppThunk => (dispatch) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLogin(false))
                dispatch(setIsAuth({userId: 0, email: '', login: ''}, true))
            }
        })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}

export const getCaptchaTC = (): AppThunk =>  dispatch =>  {
    captchaApi.getCaptchaUrl()
        .then(res => {
                dispatch(setCaptchaUrl(res.data.url))
    })
        .catch((err: AxiosError) => {
            dispatch(setError(err.message))
        })
}
