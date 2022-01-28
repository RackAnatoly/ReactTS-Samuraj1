import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogItemType = {
    name: string
    id: number
}
type MessageType={
    message:string
    id:number
}

export const Dialogs = () => {
    let dialogs=[
        {id:1, name:'Anatoli'},
        {id:2, name:'Tatsi'},
        {id:3, name:'Adrian'},
    ]
    let messages=[
        {id:1, message:'Hi'},
        {id:2, message:'How are you'},
        {id:3, message:'Yo'},
    ]
    let dialogsElements=dialogs.map(d=><DialogsItem name={d.name} id={d.id}/>)
    let messageElements=messages.map(m=><Message message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};
