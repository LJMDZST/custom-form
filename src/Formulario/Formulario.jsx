import React from 'react'
import { ContextFormulario } from '../contexts/ContextFormulario';
import { useForm } from '../hooks/useForm';

export const Formulario = ({children, _titulo = '', _estadoInicial = {}}) => {

  const [campos,handleCampoChange,reset] = useForm( _estadoInicial ); 
  
  const handleSubmitForm = (e)=>{
    e.preventDefault();
    console.log(Object.keys(campos).reduce( (salida,nomCampo) => ({ ...salida, [nomCampo] : campos[nomCampo].value}),{}))
  }

  return (
    <ContextFormulario.Provider value={{
      campos,
      handleCampoChange,
      reset
    }}>
       <form onSubmit={ (e)=> handleSubmitForm(e)} noValidate={true}>
        <h3>{_titulo}</h3>
          {/* Tiene uno o mas <Campo />  */
            children
          }
        <button type={'submit'}>Registrar </button>
      </form>
    </ContextFormulario.Provider>
  )
}
