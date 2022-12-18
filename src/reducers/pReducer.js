import { types } from "../types/types";

const initialState = {
    listaP : null,
    pFocus : null
}

export const pReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.pGetLista:
            return {
                ...state,
                listaP : [...action.payload]
            }
        case types.pGetData : 
            return {
                ...state,
                pFocus : {...action.payload}
            }
        case types.pEditar : 
            return {
                ...state,
                pFocus : {
                    ...state.pFocus,
                    ...action.payload
                }
            }
        case types.pReset : 
            return {
                ...state,
                pFocus : initialState.pFocus
            };
        default:
            return state;
    }

}
