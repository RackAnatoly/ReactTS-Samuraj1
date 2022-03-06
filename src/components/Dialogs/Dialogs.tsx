import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

type DialogsPropsType = {
    dialogs:Array<DialogItemType>
    messages:Array<MessageType>
    store:any
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements=props.dialogs.map(d=><DialogsItem name={d.name} id={d.id}/>)
    let messageElements=props.messages.map(m=><Message message={m.message} id={m.id}/>)
    let newMessageBody=props.store.dialogsPage.newMessageBody

    let onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }

    let newMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let body=e.currentTarget.value
        props.store.dispath(updateNewMessageBodyCreator(body))
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
                        placeholder='Enter your message'></textarea> </div>
                    <div><button onClick={alert}>Send</button> </div>
                </div>
            </div>

        </div>
    );
};
