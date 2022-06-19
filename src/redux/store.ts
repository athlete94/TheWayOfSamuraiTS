import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, profileReducerActionType} from "./profileReducer";
import {dialogsReducer, dialogsReducerActionType} from "./dialogsReducer";
import {UsersReducer, UsersReducerActionType} from "./UsersReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionAuthType, AuthReducer} from "./authReducer";
import {AppReducer, AppReducerActionType} from "./appReducer";
import {friendsReducer, FriendsReducerActonType} from "./friendsReducer";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    UsersReducer,
    AuthReducer,
    AppReducer,
    friendsReducer,
})

//state всего приложения
// export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export type AppActionType =
    ActionAuthType
    | UsersReducerActionType
    | profileReducerActionType
    | dialogsReducerActionType
    | AppReducerActionType
    | FriendsReducerActonType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    AppActionType>
//@ts-ignore
window.store = store;