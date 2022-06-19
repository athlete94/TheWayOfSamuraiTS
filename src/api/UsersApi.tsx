import axios from "axios";
import {UsersType} from "../redux/UsersReducer";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'a1cb2198-6145-426b-aef5-83678121f4d6',
    },
})


export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<usersApiType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post<FollowResponceType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowResponceType>(`follow/${userId}`)
    },
    getFriends(currentPage: number, pageSize: number, friend: boolean) {
        return instance.get<usersApiType>(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)
    }
}


type usersApiType = {
    items: Array<UsersType>,
    totalCount: number,
    error: string
}

type FollowResponceType = {
    resultCode: number,
    messages: string[],
    data: []
}