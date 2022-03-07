import React, {useState} from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogs,
        addMessage,
        messages
    } = props

    //UI
    return <div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)}
        </div>
        <Messages addMessage={addMessage}
                  messages={messages}/>
    </div>
}

export default Dialogs