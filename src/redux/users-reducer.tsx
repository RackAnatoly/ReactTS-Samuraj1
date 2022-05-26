import {ActionsTypes, MessageType, UsersType} from "./redux-store";

export type initialStateType = typeof initialState

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.value}
        case "SET-TOTAL-COUNT":
            return{...state,totalUsersCount: action.count}
        case "SET-TOGGLE":
            return {...state, isFetching: action.isFetching }
        default:
            return state
    }
}


export const followAC = (userID: number): FollowType => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: number): UnFollowType => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: any): SetusersAC => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (value: number): setCurrentPageAC => ({type: 'SET-CURRENT-PAGE', value})
export const setTotalCountAC = (count: number): setTotalCountACType => ({type: 'SET-TOTAL-COUNT', count})
export const setToggleAC = (isFetching:boolean): setToggleACType => ({type: 'SET-TOGGLE',isFetching})

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
export type setCurrentPageAC = {
    type: 'SET-CURRENT-PAGE',
    value: any
}
export type setTotalCountACType = {
    type: 'SET-TOTAL-COUNT',
    count: any
}
export type setToggleACType = {
    type: 'SET-TOGGLE',
    isFetching:boolean
}

