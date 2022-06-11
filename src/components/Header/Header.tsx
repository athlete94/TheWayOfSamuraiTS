import s from './Header.module.css'
import {logoutTC} from "../../redux/authReducer";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";


const Header = () => {
    const {isLogin, login} = useAppSelector(state => state.AuthReducer)
    const dispatch = useAppDispatch()


    const logoutHandler = () => [
        dispatch(logoutTC())
    ]

    return <header className={s.header}>
        <img className={s.logo} src="../logo.jpg" alt="Logo"/>
        <div className={s.login}>
            {isLogin &&
                <div className={s.header_block}>
                    <div>{login}</div>
                    <div><button onClick={logoutHandler}>logout</button></div>
                </div>
                }
        </div>
    </header>
}

export {Header}