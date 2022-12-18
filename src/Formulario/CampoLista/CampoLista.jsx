import React, { useState } from 'react'
import { ContextLineaForm } from '../../contexts/ContextListaForm';
import { useContextForm } from '../../hooks/useContextForm';
import { useContextLineaForm } from '../../hooks/useContextLineaForm'


/**
 * 
 * @param {*} param0 
 * @returns JSX fieldset con leyenda y lista de CampoSimple mas boton agregar
 */
export const CampoLista = ({children , _leyenda , _nom, _labelAgregarRegistro = 'Agregar' }) => {

  const {
    campos : camposLinea,
    handleCampoChange : handleListaChange 
  } = useContextLineaForm();

  const  {campos,handleCampoChange,reset} = useContextForm();

  const [listaRegistros, setListaRegistros] = useState(camposLinea[_nom] || [])
    
  const handleAddRegistro = (e)=>{
    e.preventDefault();

    setListaRegistros([...listaRegistros,{...campos}])
    
    handleCampoChange({
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
              {_labelAgregarRegistro}
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
