import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    return <div className={s.navbar}>

        <NavLink className={({ isActive }) => isActive  ? s.item : s.navLink_item} to='/'>Home</NavLink>

        <NavLink className={({ isActive }) => isActive  ? s.item : s.navLink_item} to='/dialogs'>Messages</NavLink>

        <NavLink className={({ isActive }) => isActive  ? s.item : s.navLink_item} to='/friends'>Friends</NavLink>

        <NavLink className={({ isActive }) => isActive  ? s.item : s.navLink_item} to='/news'>News</NavLink>

        <NavLink className={({ isActive }) => isActive  ? s.item : s.navLink_item} to='/users'>Users</NavLink>

    </div>
}

export {Navbar}