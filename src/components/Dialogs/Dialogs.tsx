import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {AppStateType} from "../../redux/store";
import {DialogsStateType} from "../../redux/dialogsReducer";
import {useSelector} from "react-redux";
import {MessagesContainer} from "./Messages/MessagesContainer";


const Dialogs = () => {

    const {dialogs, messages, messageText} = useSelector<AppStateType, DialogsStateType>(state => state.dialogsReducer)


    //UI
    return <div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)}
        </div>

        <MessagesContainer messages={messages} messageText={messageText}/>
    </div>
}

export default Dialogs