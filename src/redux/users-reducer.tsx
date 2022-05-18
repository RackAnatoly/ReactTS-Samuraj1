import {ActionsTypes, MessageType, UsersType} from "./redux-store";

export type initialStateType = typeof initialState

let initialState = {
    users: [
    ] as Array<UsersType>,
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state,users: [...state.users,...action.users]}
        default:
            return state
    }
}


export const followAC = (userID: number): FollowType => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: number): UnFollowType => ({type: 'UNFOLLOW', userID})
export const setUsersAC=(users:any)=>({type:'SET_USERS',users})

export type FollowType = {
    type: 'FOLLOW',
    userID: number
}
export type UnFollowType = {
    type: 'UNFOLLOW',
    userID: number
}
export type SetusersAC = {
    type: 'SET_USERS',
    users: any
}