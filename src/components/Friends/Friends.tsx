import React from "react";
import s from './Friends.module.css'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const Friends = () => {
    let isLogged = useSelector<AppStateType, boolean>(state => state.AuthReducer.isLogin)

    if(!isLogged) {
        return <Navigate to={'/login'} />
    }
    return <div className={s.friends}>
        My friends
    </div>
}

export default Friends