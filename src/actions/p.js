import { types } from "../types/types";


export const startEditarFormProyecto = (campos = {})=>{
    return async( dispatch)=>{   
      dispatch( editarFormProyecto(campos));
    }
}

export const startMostrarFormProyecto = ()=>{
    return async(dispatch)=>{
       const resp = await fetch('http://localhost:4000/api/gestor/p/22-3-PEIS-FCM-PJ')
    
       const data = await resp.json()
        
        if(data.ok){
            dispatch(setFormProyecto(data.data));
        }else{
            alert(data.error);
        }
    }
}

const setFormProyecto = ( data = {})=>({
    type : types.pGetData,
    payload : data
})

const editarFormProyecto = (campos ={})=>({
    type : types.pEditar,
    payload : campos
})