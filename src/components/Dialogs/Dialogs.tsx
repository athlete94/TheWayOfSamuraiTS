import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {dialogsDataType, messageDataType} from "../../redux/state";

type dialogsPropsType = {
    messageData: Array<messageDataType>
    dialogsData: Array<dialogsDataType>
}


const Dialogs: React.FC <dialogsPropsType> = ({messageData, dialogsData }) => {

    //UI
    return <div className={s.dialogs}>

        <div className={s.dialogs_items}>
            {dialogsData.map(d => <Dialog key={d.id} name={d.name} id={d.id} /> )}
        </div>

        <div className={s.messages}>
            {messageData.map(m => <Message key={m.id} text={m.message} />)}
        </div>
    </div>
}

export default Dialogs