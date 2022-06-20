import {ActionsTypes, AddPostActionType, ChangeNewTextActionType, SetUserProfileActionType} from "./redux-store";
import {PostPropsType} from "./store";
import {Dispatch} from "redux";

export type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'hi, how are you ', LikesCount: 0},
        {id: 2, message: 'It\'s my first message', LikesCount: 53},
    ] as Array<PostPropsType>,
    newPostText: 'it-kamasutra.com!',
    profile: {}
}
export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                LikesCount: 0
            };
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
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
export const setUserProfile = (profile: object): SetUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}

export const getUserProfile = (userId:any)=>(dispatch:Dispatch)=>{

}