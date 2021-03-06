import axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        //@ts-ignore
        'api-key': process.env.REACT_APP_API_KEY,
    },
})


export const ProfileApi = {
    getUserProfile(userId: number) {
        return instance.get<GetUserProfileResponceType >(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponceType>('profile/status', {status})
    }
}


export type ResponceType = {
    resultCode: number,
    messages: string[],
    data: {}
}

export type GetUserProfileResponceType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {
        small: string,
        large: string
    }
}