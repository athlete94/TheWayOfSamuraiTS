import React, {useEffect} from 'react';
import {
    deleteUserTC,
    followUserTC,
    setCurrentPage, setUsersTC,
} from "../../redux/UsersReducer";
import {User} from "./User/User";
import s from './Users.module.css'
import {Preloader} from "../Preloader/circle/Preloader";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

export const Users = () => {

    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        toggleFollowing
    } = useAppSelector(state => state.UsersReducer)
    const statusLoad = useAppSelector( state => state.AppReducer.status)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUsersTC(currentPage, pageSize))
    }, [])


    const followHandler = (id: number, followed: boolean) => {
        followed ?
            dispatch(followUserTC(id, followed))
            :
            dispatch(deleteUserTC(id, followed))
    }
    const onClickHandler = (currPage: number) => {
        dispatch(setCurrentPage(currPage))
        dispatch(setUsersTC(currPage, pageSize))
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users_block}>
            {statusLoad === 'loading' &&  <Preloader /> /*loading*/ }

            <div className={s.pagination}>
                {pages.map(p => <span
                    onClick={() => onClickHandler(p)}
                    className={p === currentPage ? s.activePage : ''}>{p}</span>)}
            </div>
            <div className={s.users}>
                {users.map(u => (
                    <User
                        id={u.id}
                        key={u.id}
                        name={u.name}
                        photos={u.photos}
                        status={u.status}
                        toggleFollowing={toggleFollowing}
                        followed={u.followed}
                        followHandler={followHandler}
                    />
                ))}
            </div>
        </div>
    );
};


