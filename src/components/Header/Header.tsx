import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
            <img className={s.logo} src="../logo.jpg" alt="Logo" />

    </header>
}

export {Header}