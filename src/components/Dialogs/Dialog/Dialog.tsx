import React from 'react'
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id?: number
}

const Dialog: React.FC<DialogPropsType> = ({name, id}) => {

    return <div className={s.dialog_item}>
        <NavLink to={`/dialogs/${id}`}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg" alt="ava"/>
            {name}
        </NavLink>
    </div>
}

export default Dialog