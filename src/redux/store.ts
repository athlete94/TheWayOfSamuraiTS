import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, profileReducerActionType} from "./profileReducer";
import {dialogsReducer, dialogsReducerActionType} from "./dialogsReducer";
import {UsersReducer, UsersReducerActionType} from "./UsersReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {ActionAuthType, AuthReducer} from "./authReducer";
import {AppReducer, AppReducerActionType} from "./appReducer";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    UsersReducer,
    AuthReducer,
    AppReducer,
})

//state всего приложения
export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppActionType =
    ActionAuthType
    | UsersReducerActionType
    | profileReducerActionType
    | dialogsReducerActionType
    | AppReducerActionType

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionType
    >
//@ts-ignore
window.store = store;