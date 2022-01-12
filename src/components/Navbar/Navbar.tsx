import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return <div className={s.navbar}>

        <NavLink className={s.navbar_item} to='/profile'>Home</NavLink>
        <NavLink className={s.navbar_item} to='/dialogs'>Messages</NavLink>
        <NavLink className={s.navbar_item} to='/friends'>Friends</NavLink>
        <NavLink className={s.navbar_item} to='/news'>News</NavLink>
        </div>
}

export {Navbar}