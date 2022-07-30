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
import BasicPagination from "../Pagination/BasicPagination";
import SelectAutoWidth from "../PageCount/PageCount";

export const Users = () => {

    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        toggleFollowing
    } = useAppSelector(state => state.UsersReducer)
    const statusLoad = useAppSelector(state => state.AppReducer.status)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setUsersTC(currentPage, pageSize))
    }, [pageSize, currentPage])


    const followHandler = (id: number, followed: boolean) => {
        followed ?
            dispatch(followUserTC(id, followed))
            :
            dispatch(deleteUserTC(id, followed))
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value))
    };

    let pagesCount = Math.ceil(totalUsersCount / pageSize)


    return (
        <div className={s.users_block}>
            {statusLoad === 'loading' && <Preloader/> /*loading*/}

            <div className={s.pagination}>
                <SelectAutoWidth/>
                <BasicPagination handleChange={handleChange} pagesCount={pagesCount}/>
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


