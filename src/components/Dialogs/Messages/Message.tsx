import React from 'react'
import s from "./Message.module.css";

type MessagePropsType = {
    text: string
    id?: number
}

const Message: React.FC<MessagePropsType> = ({text,id}) => {

    return <div className={s.message}>
        {text}
    </div>
}

export default Message