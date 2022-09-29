import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();   /* creamos la variables global donde se almacenara los datos, y donde tambien se podran compartir
                                                  los datos de un componente a otro. */

export const StateProvider = ({reducer, initialState, children}) => ( /* es la herramienta que se usara para compartir los datos de un componente a otro. */
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); /* permitira consumir desde cualquier componente los cambios del estado del "initialState" */