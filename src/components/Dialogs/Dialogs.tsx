import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
    let newMessageBody =props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage();
        // props.updateNewMessageBody('')
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
