import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DialogsPageType} from "../../redux/store";
import {Dispatch} from 'redux';
import {RootStateReduxType} from "../../redux/redux-store";

type MapStatePropsType = {
    dialogsPage: DialogsPageType,
    isAuth:any
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPages,
        isAuth:state.auth.isAuth
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