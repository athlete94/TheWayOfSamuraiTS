import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./EditableSpan.module.css"

type EditableSpanPropsType = {
    title: string
    callback: (title: string) => void
}

export const EditableSpan = ({title, callback}: EditableSpanPropsType) => {

    const [edit, setEdit] = useState(true)
    const [titleList, setTitleList] = useState(title)

    const onDoubleClickHandler = () => {
        setEdit(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            onBlurHandler()
        }
    }
    const onBlurHandler = () => {
        callback(titleList)
        setEdit(true)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleList(e.currentTarget.value)
    }

    return (
        <div className={s.editableSpan}>
            {edit ?
                <div className={s.span}><span onDoubleClick={onDoubleClickHandler}>{title}</span></div>
                 :
                <input onBlur={onBlurHandler}
                       onKeyPress={onKeyPressHandler}
                       autoFocus
                       value={titleList}
                       onChange={onChangeHandler}/>}
        </div>
    );
};
