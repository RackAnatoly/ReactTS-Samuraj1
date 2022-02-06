import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogItemType, MessageType} from "../../State/redux";

type DialogsPropsType = {
    dialogs:Array<DialogItemType>
    messages:Array<MessageType>
}

export const Dialogs = (props: DialogsPropsType) => {
    let newMessageElement=React.createRef<HTMLTextAreaElement>();

    let addMessage=()=>{
        let message=newMessageElement.current?.value;
        alert(message);
    }


    let dialogsElements=props.dialogs.map(d=><DialogsItem name={d.name} id={d.id}/>)
    let messageElements=props.messages.map(m=><Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add</button>
        </div>
    );
};
