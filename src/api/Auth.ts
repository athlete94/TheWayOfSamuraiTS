import axios from "axios";

export const authApi = {
    getAuth() {
        return axios.get<ResponceType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
    }
}

export type ResponceType = {
    data: {
        id: number,
        email: string,
        login: string,
    },
    resultCode: number,
    messages: string[]
}