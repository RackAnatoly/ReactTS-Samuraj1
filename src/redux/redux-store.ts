import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

let reducers = combineReducers({
    dialogsReducer,
    profileReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>

export let store: Store<RootStateReduxType, any> = createStore(reducers);

//export type RootStateReduxType = typeof store;

