import s from './Navbar.module.css'


const Navbar = () => {
    return <div className={s.navbar}>
            <div className={s.navbar_item}>
                <a href='s#'>Home</a>
            </div>
            <div className={s.navbar_item}>
                <a href='s#'>Messages</a>
            </div>
            <div className={s.navbar_item}>
                <a href='s#'>friends</a>
            </div>
            <div className={s.navbar_item}>
                <a href='s#'>News</a>
            </div>
    </div>
}

export {Navbar}