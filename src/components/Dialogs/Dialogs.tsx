import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Anatoli</div>
                <div className={s.dialog}>Tatsi</div>
                <div className={s.dialog}>Adrian</div>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>Piotr</div>
                <div className={s.dialog}>Sasha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How Are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;
