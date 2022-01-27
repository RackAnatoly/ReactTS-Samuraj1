import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id;
    return <div className={`${s.dialog}${s.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Anatoli'},
        {id: 2, name: 'Tatsi'},
        {id: 3, name: 'Adrian'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How Are You?'},
        {id: 3, message: 'YO'},
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messengesElements = messages.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messengesElements}
            </div>
        </div>
    );
};

export default Dialogs;
