import { reducerActionType } from "../types/reducerActionType";

export type ThenmeType = {
    status: 'dark' | 'light'
}
export const themeInitialState: ThenmeType = {
    status: 'light'
}
export const themeReducer = (state: ThenmeType, action: reducerActionType) => {
    switch(action.type) {
        case 'CHANGE_STATUS':
            return {...state, status: action.payload.status};
        break;
    }
    return state;
}