import s from './Navbar.module.css'


const Navbar = () => {
    return <div className={s.navbar}>
            <div className={s.navbar_item}>
                <a href='/profile'>Home</a>
            </div>
            <div className={s.navbar_item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={s.navbar_item}>
                <a href='s#'>Friends</a>
            </div>
            <div className={s.navbar_item}>
                <a href='s#'>News</a>
            </div>
    </div>
}

export {Navbar}