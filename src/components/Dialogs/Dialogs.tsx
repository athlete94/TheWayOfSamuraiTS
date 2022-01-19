import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";

type dialogsDataType = {
    id: number
    name: string
}

type messageDataType = {
    id: number
    message: string
}


const Dialogs = () => {
    //BLL
    const dialogsData: Array<dialogsDataType> = [
        {id: 1, name: 'Arina'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vlad'}
    ]
    const messageData: Array<messageDataType> = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello, it is frontend!'},
        {id: 3, message: 'Really?'},
        {id: 4, message: 'Really, didnt you believe?'},
    ]

    //UI
    return <div className={s.dialogs}>

        <div className={s.dialogs_items}>
            {dialogsData.map(d => <Dialog key={d.id} name={d.name} /> )}
        </div>

        <div className={s.messages}>
            {messageData.map(m => <Message key={m.id} text={m.message} />)}
        </div>
    </div>
}

export default Dialogs