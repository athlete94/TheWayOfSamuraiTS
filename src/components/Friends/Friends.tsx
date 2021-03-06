import React, {useCallback, useEffect} from "react";
import s from './Friends.module.css'
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {deleteFriendTC, setFriendsTC} from "../../redux/friendsReducer";
import {Preloader} from "../Preloader/circle/Preloader";
import {Friend} from "./Friend/Friend";
import {deleteUserTC, followUserTC} from "../../redux/UsersReducer";

const Friends = () => {
    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    let friends = useAppSelector(state => state.friendsReducer.friends)
    let statusLoad = useAppSelector(state => state.AppReducer.status)
    let toggleFollowing = useAppSelector(state => state.UsersReducer.toggleFollowing)

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setFriendsTC(1, 100, true))
    }, [])


    const followHandler = useCallback((id: number, followed: boolean) => {
        followed ?
            dispatch(followUserTC(id, followed))
            :
            dispatch(deleteFriendTC(id))
    }, [])

    if (!isLogin) {
        return <Navigate to={'/login'}/>
    }
    return <div className={s.friends}>
        {statusLoad === 'loading' && <Preloader/> /*loading*/}

        {friends.map(f => {
            return (
                <Friend
                    id={f.id}
                    name={f.name}
                    status={f.status}
                    followed={f.followed}
                    photos={f.photos}
                    followHandler={followHandler}
                    toggleFollowing={toggleFollowing}
                />
            )
        })}

            </div>
        }

            export default Friends