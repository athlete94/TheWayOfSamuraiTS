export type StatusType = 'loading' | 'idle' | 'statusUpdating'

type InitialStateAppType = {
    status: StatusType
    error: null | string
}
export const initialState: InitialStateAppType = {
    error: null,
    status: "idle",
}

export const AppReducer = (state: InitialStateAppType = initialState, action: AppReducerActionType): InitialStateAppType => {
        switch(action.type) {
            case 'SET_ERROR':
                return {
                    ...state,
                    error: action.error
                }
            case 'SET_STATUS':
                return {
                    ...state,
                    status: action.status
                }
            default:
                return state
        }
};


export type AppReducerActionType = SetErrorType | SetStatusType

export type SetErrorType = ReturnType<typeof setError>
export const setError = (error: null | string) => {
    return {
        type: 'SET_ERROR',
        error
    }as const
}

export type SetStatusType = ReturnType<typeof setStatus>
export const setStatus = (status: StatusType) => {
    return {
        type: 'SET_STATUS',
        status
    }as const
}