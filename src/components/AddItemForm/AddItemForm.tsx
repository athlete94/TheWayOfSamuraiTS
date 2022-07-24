import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import s from './AddItemForm.module.css'

type AddItemFormTypeProps={
    callBack: (title:string)=>void,
    placeholder?: string
    disabled?: boolean

}

export const AddItemForm = React.memo(({callBack, placeholder, disabled}:AddItemFormTypeProps) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            callBack(newTitle);
            setTitle('')
        }
    }

    const onFocusHandler = () => {
        setError('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(error !== null) setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <div className={s.addItemForm}>
                <div style={{width:'100%'}}>
                    <input value={title}
                           onChange={onChangeHandler}
                           onKeyPress={onKeyPressHandler}
                           className={error ? "error" : ""}
                           placeholder={placeholder}
                           onFocus={onFocusHandler}
                           disabled={disabled}
                    />
                </div>
                <div>
                    <button onClick={addTask} disabled={disabled}>add</button>
                </div>

            </div>
            {error && <div className="error-message">{error}</div>}

        </div>

    );
});

