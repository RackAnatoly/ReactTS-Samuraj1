import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

let reducers = combineReducers({
    dialogsReducer,
    profileReducer
})

// export type RootStateReduxType = ReturnType<typeof reducers>

export let store = createStore(reducers);

export type RootStateReduxType= typeof store;

