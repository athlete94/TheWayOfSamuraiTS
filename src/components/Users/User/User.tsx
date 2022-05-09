import React from 'react';
import s from './User.module.css'
import {NavLink, useParams} from "react-router-dom";
import {setUserProfileTC, setUserStatusTC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";


type UserPropsType = {
    id: number,
    name: string,
    status: string,
    followed: boolean
    photos: {
        small: null,
        large: null,
    }
    followHandler: (id: number, followed: boolean) => void
}

export const User = (props: UserPropsType) => {

    const {
        id,
        name,
        status,
        followed,
        followHandler,
        photos
    } = props


    return (
        <div className={s.user}>
                <div className={s.img}>
                    <NavLink to={`/profile/${id}`} >
                        <img
                            src={photos.small ? photos.small : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrW-Jw-ZMy8KVpsK728K3CAEogswHduRgqog&usqp=CAU"}/>
                    </NavLink>
                    {
                    followed ?
                        <button onClick={() => followHandler(id, false)}>Unfollow</button> :
                        <button onClick={() => followHandler(id, true)}>Follow</button>
                }
            </div>
            <div className={s.info}>
                <div className={s.name}>{name}</div>
                <div className={s.status}>{status ? status : 'status...'}</div>
            </div>
        </div>
    );
};
;