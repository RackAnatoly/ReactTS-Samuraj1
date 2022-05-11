import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/store";
import {Dispatch} from 'redux';
import {RootStateReduxType} from "../../redux/redux-store";

//
// export const DialogsContainer = (props: DialogsPropsType) => {
//     const state = props.store.getState();
//     // let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
//     // let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)
//     // let newMessageBody = state.dialogsReducer.newMessageBody;
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return (
//         <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogs={state.dialogsReducer.dialogs}
//             messages={state.dialogsReducer.messages}
//             newMessageBody={state.dialogsReducer.newMessageBody}
//         />
//     );
// };

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}
export type DialogsToPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
// const mapStateToProps = (state:RootStateReduxType) => {
    return {
        dialogsPage: state.dialogsReducer,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }

}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);