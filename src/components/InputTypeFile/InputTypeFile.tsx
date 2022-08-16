import React, {ChangeEvent, useState} from 'react';
import {IconButton} from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {useAppSelector} from "../../redux/hooks";


type InputTypeFilePropsType = {
    setUserAva: (ava: File) => void
    userAva: string
    userId: number
}

export const InputTypeFile = React.memo(({userAva, setUserAva, userId}: InputTypeFilePropsType) => {
    const [isAvaBroken, setIsAvaBroken] = useState(false)
    const id = useAppSelector(state => state.AuthReducer.userId)


    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 4000000) {
                setUserAva(file)
            } else {
                alert('Слишком большой файл')
            }
        }
    }

    // const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    //     const reader = new FileReader();
    //
    //     reader.onloadend = () => {
    //         const file64 = reader.result as string
    //         callBack(file64)
    //     }
    //     reader.readAsDataURL(file)
    // }

    const errorHandler = () => {
        setIsAvaBroken(true)
        alert('Кривая картинка')
    }

    return (
        <label>
            <img src={userAva || !isAvaBroken ? userAva : 'https://klike.net/uploads/posts/2019-03/1551511809_6.jpg'}
                 onError={errorHandler}
                 alt=""/>

            <input type="file"
                   onChange={uploadHandler}
                   style={{display: 'none'}}

            />

            {userId === id && // показывай кнопку только если свой профайл
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <IconButton component="span">
                    <DriveFolderUploadIcon/>
                </IconButton>
            </div>
            }
        </label>
    )
})