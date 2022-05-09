import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogItemType, MessageType} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogs:Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody:string
    // dialogs: Array<DialogItemType>
    // store: DialogsPropsType
    // dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    // const state = props.store.getState();
    let dialogsElements = props.dialogs.map((d:any) => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map((m:any) => <Message message={m.message} id={m.id}/>)
    let newMessageBody =props.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let newMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body);
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
