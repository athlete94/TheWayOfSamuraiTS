import React from "react";
import s from './Friends.module.css'
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";

const Friends = () => {
    let isLogged = useAppSelector(state => state.AuthReducer.isLogin)

    if(!isLogged) {
        return <Navigate to={'/login'} />
    }
    return <div className={s.friends}>
        My friends
    </div>
}

export default Friends