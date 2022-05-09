import {ActionsTypes, AddPostActionType, ChangeNewTextActionType, ProfilPageType} from "./store";

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you ', LikesCount: 0},
        {id: 2, message: 'It\'s my first message', LikesCount: 53},
    ],
    newPostText: 'it-kamasutra.com!'
}

export const profileReducer = (state: ProfilPageType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                LikesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            break;
    }

    return state

}


export const addPostActionCreator = (): AddPostActionType => ({type: 'ADD-POST'})
export const updateNewTextActionCreator = (text: string): ChangeNewTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
}