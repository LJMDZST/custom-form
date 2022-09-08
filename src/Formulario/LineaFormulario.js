import React, { useEffect } from 'react'
import { ContextLineaForm } from '../contexts/ContextLineaForm'
import { getDefaultCampos } from '../helpers/getDefaultCampos';
import { useContextForm } from '../hooks/useContextForm';
import { useLineaForm } from '../hooks/useLineaForm'

/**
 * 
 * @returns fieldset con uno o mas campos (inputs), o , uno o mas LineasFormulario
 */
export const LineaFormulario = ({children ,_id, _leyenda}) => {

  const [campos,lineaValida,handleCampoChange] = useLineaForm(getDefaultCampos(children));

  const {handleLineaChange}= useContextForm();
  
  useEffect(() => {
    handleLineaChange({
      idLinea :_id, 
      esValida : lineaValida(), 
      camposLinea : campos
  })}, [campos])
  


  return (
    <ContextLineaForm.Provider value={{
      campos,
      handleCampoChange
    }}>
       <fieldset>
          <legend>{_leyenda}</legend>
          {/* uno o mas campos, o uno o mas LineasFormulario */
              children
          }
        
        </fieldset>
    </ContextLineaForm.Provider>
  )
}
