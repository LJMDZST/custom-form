import React, { useState } from 'react'
import { ContextLineaForm } from '../../contexts/ContextLineaForm';
import { getDefaultCampos } from '../../helpers/getDefaultCampos';
import { useContextLineaForm } from '../../hooks/useContextLineaForm'
import { useLineaForm } from '../../hooks/useLineaForm';

/**
 * 
 * @param {*} param0 
 * @returns JSX fieldset con leyenda y lista de CampoSimple mas boton agregar
 */
export const CampoLista = ({children , _leyenda , _nom }) => {

  const {
    campos : camposLinea,
    handleCampoChange : handleListaChange 
  } = useContextLineaForm();

  const [campos,lineaValida,handleCampoChange, reset] = useLineaForm( getDefaultCampos(children) );

  const [listaRegistros, setListaRegistros] = useState(camposLinea[_nom] || [])
    
  const handleAddRegistro = (e)=>{
    e.preventDefault();

    setListaRegistros([...listaRegistros,{...campos}])
    
    handleListaChange({
        name : _nom,
        value : listaRegistros ,
        validity : {
            valid : lineaValida()
        }
    });

    reset();
  
 }
    
  return (
    <ContextLineaForm.Provider value={{
        campos,
        handleCampoChange
    }}>
        <fieldset >
            <legend>{_leyenda}</legend>
            {
                /**lista de camposSimple */
                children
            }
            <button onClick={handleAddRegistro} > 
                + 
            </button>
            <ul>
                {
                    listaRegistros &&
                    listaRegistros.map( ({dir,cp},i) => 
                            <li key={`reg-${i}`}>{`${dir.value},${cp.value}`}</li>
                        )
                }
            </ul>
      </fieldset>
    </ContextLineaForm.Provider>
  )
}
