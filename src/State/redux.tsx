import {rerenderEntereTree} from "../render";

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
}
export type RootStateType = {
    profilePage: ProfilPageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
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
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        LikesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntereTree(state)
}

export let updateNewPost = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntereTree(state)
}