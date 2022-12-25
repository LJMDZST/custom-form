import { types } from "../types/types";

const initialState = {
    modalCampos : null,
    showModal : false,
    nom : null
}

export const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.modalLoading:
            return {
                ...state,
                modalCampos : {...action.payload.campos},
                showModal : true,
                nom : action.payload.nom
            }
        case types.modalClose : 
            return {
                ...state,
                showModal : false,
                modalFocus : initialState.modalFocus
            }
        default:
            return state;
    }

}
