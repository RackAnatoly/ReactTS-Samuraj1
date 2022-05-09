import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogItemType, MessageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {RootStateReduxType} from "../../redux/redux-store";

type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    store: RootStateReduxType
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = props.store.dialogsReducer.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let newMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        onChange={newMessageChange}
                        value={newMessageBody}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
