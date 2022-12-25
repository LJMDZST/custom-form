import React from 'react'
import { ContextFormulario } from '../../contexts/ContextFormulario';
import { desarmarEstructuraDataForm } from '../../helpers/desarmarEstructuraDataForm';
import { useForm } from '../../hooks/useForm';

export const Formulario = ({children, _titulo = '', _estadoInicial = {}, _handleSubmitForm = ()=>{}}) => {

  const [campos,handleCampoChange,reset] = useForm( _estadoInicial ); 
  
  const handleSubmit = (e)=>{
    e.preventDefaul();
    _handleSubmitForm(desarmarEstructuraDataForm(campos));
  }

  return (
    <ContextFormulario.Provider value={{
      campos,
      handleCampoChange,
      reset
    }}>
       <form onSubmit={handleSubmit } noValidate={true}>
        <h3>{_titulo}</h3>
          {/* Tiene uno o mas <Campo />  */
            children
          }
        <button type={'submit'}>Registrar </button>
      </form>
    </ContextFormulario.Provider>
  )
}
