import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks";


const Dialogs = () => {

    const {dialogs, messages, messageText} = useAppSelector(state => state.dialogsReducer)
    let isLogged = useAppSelector(state => state.AuthReducer.isLogin)

    if(!isLogged) {
        return <Navigate to={'/login'} />
    }

    return <div className={s.dialogs}>
        <div className={s.dialogs_items}>
            {dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)}
        </div>

        <MessagesContainer messages={messages} messageText={messageText}/>
    </div>
}

export default Dialogs