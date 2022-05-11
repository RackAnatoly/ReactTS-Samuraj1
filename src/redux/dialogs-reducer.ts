import {ActionsTypes, SendMessageType, UpdateNewBodyType} from "./store";

export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}

export type initialStateType= typeof initialState

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Anatoli'},
        {id: 2, name: 'Tatsi'},
        {id: 3, name: 'Adrian'},
    ] as Array<DialogItemType>,
    newMessageBody: ''
}

export const dialogsReducer = (state: initialStateType = initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = ():SendMessageType => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body: string):UpdateNewBodyType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    }
}