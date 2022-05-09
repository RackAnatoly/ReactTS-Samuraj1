import {ActionsTypes, DialogsPageType, SendMessageType, UpdateNewBodyType} from "./store";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Anatoli'},
        {id: 2, name: 'Tatsi'},
        {id: 3, name: 'Adrian'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        // break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state;
        // break;
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