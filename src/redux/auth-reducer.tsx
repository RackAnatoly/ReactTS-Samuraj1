export type initialStateType = typeof initialState

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
}
export const authReducer = (state: initialStateType = initialState, action: SetAuthUserDataACType): initialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data,isAuth: true}
        }
        default:
            return state
    }
}
export const setAuthUserDataAC = (data: any): SetAuthUserDataACType => {
    return {
        type: 'SET-USER-DATA',
        data
    }
}

type SetAuthUserDataACType = {
    type: 'SET-USER-DATA',
    data: {
        userId: null,
        email: null,
        login: null
    }
}

