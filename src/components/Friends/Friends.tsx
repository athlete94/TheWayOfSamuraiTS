import React, {useCallback, useEffect} from "react";
import s from './Friends.module.css'
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {deleteFriendTC, setCurrentFriendPage, setFriendsTC} from "../../redux/friendsReducer";
import {Preloader} from "../Preloader/circle/Preloader";
import {Friend} from "./Friend/Friend";
import {deleteUserTC, followUserTC, setCurrentPage} from "../../redux/UsersReducer";
import style from '../Users/Users.module.css'
import BasicPagination from "../Pagination/BasicPagination";

const Friends = () => {
    let isLogin = useAppSelector(state => state.AuthReducer.isLogin)
    let friends = useAppSelector(state => state.friendsReducer.friends)
    let statusLoad = useAppSelector(state => state.AppReducer.status)
    let toggleFollowing = useAppSelector(state => state.UsersReducer.toggleFollowing)
    const {
        pageSize,
        currentPage,
        totalCount,
    } = useAppSelector(state => state.friendsReducer)

    let dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setFriendsTC(currentPage, pageSize, true))
    }, [currentPage])


    const followHandler = useCallback((id: number, followed: boolean) => {
        followed ?
            dispatch(followUserTC(id, followed))
            :
            dispatch(deleteFriendTC(id))
    }, [])
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentFriendPage(value))
    };

    let pagesCount = Math.ceil(totalCount / pageSize)

    if (!isLogin) {
        return <Navigate to={'/login'}/>
    }
    return <div className={s.friends}>
        {statusLoad === 'loading' && <Preloader/> /*loading*/}

        <div className={style.pagination}>
            <BasicPagination page={currentPage} handleChange={handleChange} pagesCount={pagesCount}/>
        </div>
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