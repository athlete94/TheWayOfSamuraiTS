import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, logoutTC, setIsAuthTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";
import {StatusType} from "../../redux/appReducer";
import {Dots} from "../Preloader/dots/dots";


const Header = () => {
    const isLogin = useSelector<AppStateType, boolean>(state => state.AuthReducer.isLogin)
    const login = useSelector<AppStateType, string>(state => state.AuthReducer.login)
    const statusLoad = useSelector<AppStateType, StatusType>(state => state.AppReducer.status)

    const dispatch = useDispatch()


    const logoutHandler = () => [
        dispatch(logoutTC())
    ]

    return <header className={s.header}>
        <img className={s.logo} src="../logo.jpg" alt="Logo"/>
        <div className={s.login}>
            {isLogin &&
                <div className={s.header_block}>

                    {statusLoad === 'loading' ?  '' : <div>{login}</div>}
                    <div><button onClick={logoutHandler}>logout</button></div>
                </div>
                }
        </div>
    </header>
}

export {Header}