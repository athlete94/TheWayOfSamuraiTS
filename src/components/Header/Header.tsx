import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthInitialStateType, setUserDataTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";

const Header = () => {
    const {login, isLogin} = useSelector<AppStateType, AuthInitialStateType>(state => state.AuthReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUserDataTC())
    }, [])

    return <header className={s.header}>
        <img className={s.logo} src="../logo.jpg" alt="Logo"/>
        <div className={s.login}>
            {isLogin ? login :  <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export {Header}