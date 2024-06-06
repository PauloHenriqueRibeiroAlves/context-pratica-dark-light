import { ReactNode, createContext, useReducer} from 'react';
import { UserType, userInitialState, userReducer } from '../Reducers/useRedecer';
import { ThenmeType, themeInitialState, themeReducer } from '../Reducers/themReducer'
import { reducerActionType } from '../types/reducerActionType';

type initialStateType = {
    user: UserType;
    theme: ThenmeType
}
type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}
const initialState = {
    user: userInitialState,
    theme: themeInitialState
}
export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)
});

export const ContextProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
//ContextProvider: React.FC = ({ children })

//Contexto antes da padronização
/*import { ReactNode, createContext } from 'react';

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Paulo',
    age: 30
}

export const Context = createContext<ContextType>(initialState);
//: React.FC
export const ContextProvider = ({ children }: {children: ReactNode}) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    );
}*/