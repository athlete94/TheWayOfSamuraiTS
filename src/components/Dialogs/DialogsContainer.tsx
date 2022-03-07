import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {addMessageAC, DialogsType, MessagesType} from "../../redux/dialogsReducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type mapDispatchProps = {
    addMessage: (text: string) => void
}
export type DialogsPropsType = MapStatePropsType & mapDispatchProps

let mapStateToProps = (state: AppStateType ): MapStatePropsType => {
    return {
        messages: state.dialogsReducer.messages,
        dialogs: state.dialogsReducer.dialogs
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchProps => {
    return {
        addMessage: (text: string) => dispatch(addMessageAC(text))
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;