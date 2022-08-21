import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //@ts-ignore
        'api-key': process.env.REACT_APP_API_KEY,
    },
})

export const authApi = {
    getAuth() {
        return instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    },
    login(loginData: LoginRequestParams ) {
        debugger
        return instance.post<ResponseType<{userId: number}>>('auth/login', loginData)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}

export const captchaApi = {
    getCaptchaUrl() {
        return instance.get<{'url': string}>('security/get-captcha-url')
    }
}


export type ResponseType<T = {}> = {
    data: T,
    resultCode: number,
    messages: string[]
}

export type LoginRequestParams = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
}