import { types } from "../types/types"

export const startCargarModalCampoLista = ( _nom ,_estadoInicialModal)=>{
    return async(dispatch)=>{
        dispatch( cargarModalCampoLista(_estadoInicialModal,_nom) );
    }
}


const cargarModalCampoLista = (campos = {},nom)=>({
    type : types.modalLoading,
    payload : {
        campos,
        nom
    }
})

export const cerrarModalCampoLista = ()=>({
    type : types.modalClose
})