import React from 'react'
import s from "./Message.module.css";

type MessagePropsType = {
    text: string
    id?: string
}

const Message: React.FC<MessagePropsType> = ({text,id}) => {

    return <div className={s.message}>
        {text}
    </div>
}

export default Message