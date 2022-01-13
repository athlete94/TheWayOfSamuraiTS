import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return <div className={s.dialogs}>
        <div className={s.dialogs_items}>

            <div className={s.dialog_item}>
                <NavLink to='/dialogs/Arina'>
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="ava"/>
                    Арина
                </NavLink>
            </div>
            <div className={s.dialog_item}>
                <NavLink to='/dialogs/andrey'>
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="ava"/>
                    Андрей
                </NavLink>
            </div>
            <div className={s.dialog_item}>
                <NavLink to='/dialogs/sasha'>
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="ava"/>
                    Саша
                </NavLink>
            </div>
            <div className={s.dialog_item}>
                <NavLink to='/dialogs/vlad'>
                    <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="ava"/>
                    Владик
                </NavLink>
            </div>

        </div>

        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Hello, it is frontend</div>
            <div className={s.message}>Really?</div>
            <div className={s.message}>Really, didn't you believe?</div>
        </div>
    </div>
}

export default Dialogs