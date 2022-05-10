import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {UsersReducer} from "./UsersReducer";
import thunk from "redux-thunk";
import {AuthReducer} from "./authReducer";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    UsersReducer,
    AuthReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store;