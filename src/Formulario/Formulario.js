import React from 'react'
import { ContextFormulario } from '../contexts/ContextFormulario';
import { getDefaultLineas } from '../helpers/getDefaultLineas';
import { useForm } from '../hooks/useForm';

export const Formulario = ({children, _titulo}) => {

  const [
    lineas,
    handleLineaChange,
    formValido,
    reset
  ] = useForm(
    getDefaultLineas( children )
  ) 
  
  const handleSubmitForm = (e)=>{
    e.preventDefault();
    console.log(Object.values(lineas).reduce((values,linea)=>({...values,...linea}),{}))
  }

  return (
    <ContextFormulario.Provider value={{
        lineas,
        handleLineaChange,
        formValido,
        reset
    }}>
       <form onSubmit={handleSubmitForm} noValidate={true}>
        <h3>{_titulo}</h3>
          {/* Tiene uno o mas LineaFormulario  */
            children
          }
        <button type={'submit'}>Registrar </button>
      </form>
    </ContextFormulario.Provider>
  )
}
