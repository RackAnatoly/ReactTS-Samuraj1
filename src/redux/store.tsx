import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type PostPropsType = {
    id?: number
    message: string
    LikesCount: number
}
type DialogItemType = {
    id: number
    name: string
}
type MessageType = {
    message: string
    id: number
}
export type ProfilPageType = {
    posts: Array<PostPropsType>
    newPostText: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogItemType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilPageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType,
    _callSubscriber: () => void,
    getState: () => RootStateType,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionsTypes) => void
}
export type AddPostActionType = {
    type: 'ADD-POST'
}
export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export type UpdateNewBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE',
    // body: string
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType
    | UpdateNewBodyType | SendMessageType;

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you ', LikesCount: 0},
                {id: 2, message: 'It\'s my first message', LikesCount: 53},
            ],
            newPostText: 'it-kamasutra.com!'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionsTypes) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    },

}

// export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
// export const updateNewTextActionCreator = (text: string): ChangeNewTextActionType => {
//     return {
//         type: 'UPDATE-NEW-POST-TEXT',
//         newText: text
//     }
// }
