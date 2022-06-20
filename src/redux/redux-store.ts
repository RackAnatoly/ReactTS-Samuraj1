import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunkMiddleware from "redux-thunk";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {
    followAC,
    FollowType,
    setCurrentPageAC, setFolowingProgresType, setToggleACType,
    setTotalCountACType,
    SetusersAC,
    UnFollowType,
    usersReducer
} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    dialogsPages: dialogsReducer,
    profilePages: profileReducer,
    usersPages: usersReducer,
    auth: authReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>

export let store: Store<RootStateReduxType, any> = createStore(reducers,applyMiddleware(thunkMiddleware));

//export type RootStateReduxType = typeof store;

export type PostPropsType = {
    id?: number
    message: string
    LikesCount: number
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
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
export type UsersType = {
    id: number,
    photos: { small: any, large: any },
    followed: boolean,
    name: string,
    status: string,
    location?: LocationType
    uniqueUrlName?: any
}
export type LocationType = {
    city: string,
    country: string
}
export type UsersPageType = {
    users: Array<UsersType>
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
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE',
    profile: object
}

export type UpdateNewBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE',
}
export type ActionsTypes =
    AddPostActionType
    | ChangeNewTextActionType
    | UpdateNewBodyType
    | SendMessageType
    | FollowType
    | UnFollowType
    | SetusersAC
    | setCurrentPageAC
    | setTotalCountACType
    | setToggleACType
    | SetUserProfileActionType
    | setFolowingProgresType