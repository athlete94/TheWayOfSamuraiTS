import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'a1cb2198-6145-426b-aef5-83678121f4d6',
    },
})

export const authApi = {
    getAuth() {
        return instance.get<ResponseType<{id: number, email: string, login: string}>>('auth/me')
    },
    login(loginData: LoginRequestParams) {
        return instance.post<ResponseType<{userId: number}>>('auth/login', loginData)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
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