import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {RootStateReduxType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: RootStateReduxType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState();
    // let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    // let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    // let newMessageBody = state.dialogsReducer.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogs={state.dialogsReducer.dialogs}
            messages={state.dialogsReducer.messages}
            newMessageBody={state.dialogsReducer.newMessageBody}
        />
    );
};
