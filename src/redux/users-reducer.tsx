import {ActionsTypes, UsersType} from "./redux-store";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

export type initialStateType = typeof initialState

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<UsersType>
}

export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: true} : u)}
        case "SET_USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.value}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.count}
        case "SET-TOGGLE":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}


export const followAC = (userID: number): FollowType => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: number): UnFollowType => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: any): SetusersAC => ({type: 'SET_USERS', users})
export const setCurrentPageAC = (value: number): setCurrentPageAC => ({type: 'SET-CURRENT-PAGE', value})
export const setTotalCountAC = (count: number): setTotalCountACType => ({type: 'SET-TOTAL-COUNT', count})
export const setToggleAC = (isFetching: boolean): setToggleACType => ({type: 'SET-TOGGLE', isFetching})
export const setFolowingProgresAC = (isFetching: boolean, userId: any) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    isFetching,
    userId
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleAC(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalCountAC(data.totalCount))
            })
    }
}
export const followThunkCreator = (UserId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFolowingProgresAC(true,UserId))
        usersApi.unUnfollowUsers(UserId)
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(followAC(UserId))
                }
                dispatch(setFolowingProgresAC(false,UserId))
            })
    }
}
export const unFollowThunkCreator = (UserId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFolowingProgresAC(true,UserId))
        usersApi.followUsers(UserId)
            .then(res => {
                if (res.data.resultCode == 0) {
                    dispatch(unFollowAC(UserId))
                }
                dispatch(setFolowingProgresAC(false,UserId))
            })
    }
}

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
    isFetching: boolean
}
export type setFolowingProgresType = ReturnType<typeof setFolowingProgresAC>

