import axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'a1cb2198-6145-426b-aef5-83678121f4d6',
    },
})


export const ProfileApi = {
    getUserProfile(userId: number) {
        return instance.get<GetUserProfileResponceType >(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    }
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