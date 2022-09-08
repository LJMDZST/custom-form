import React, { useEffect, useState } from 'react'
import { useContextLineaForm } from '../../hooks/useContextLineaForm'


/**
 * 
 * @param {*} children lista de <option></option> , si _tipo = 'select'  
 * @param {*} _tipo tipo de campo (basado en tipos de HTML inputs )  
 * @param {*} _props resto de los atributos que reciba el campo
 * @returns JSX Label , con el input o select o textarea segun corresponda
 */
export const Campo = ({
    children,
    _tipo,
    _etiqueta,
    _defaultValue,
    ..._props
}) => {

  const {campos,handleCampoChange} = useContextLineaForm();

  const [estado, setEstado] = useState(campos[_props.name]);


  useEffect(() => {setEstado(campos[_props.name])}, [campos[_props.name]])
  

  return(
    <label >
      { _etiqueta }
              
      { _tipo === 'textarea' && 
        <textarea  
          value = {estado ? estado.valor :  _defaultValue} 
          onChange={(e)=> handleCampoChange(e.target)}
          {..._props}
        /> 
      }
      { _tipo === 'select' && 
        <select 
          value = {estado ? estado.valor :  _defaultValue}
          onChange={(e)=> handleCampoChange(e.target)}
          children={children} 
          {..._props} 
        />
      }
      { _tipo !== 'textarea' && _tipo !== 'select' && 
        <input 
          type={_tipo}
          value = {estado ? estado.valor : _defaultValue} 
          onChange={(e)=> handleCampoChange(e.target)}
          {..._props} 
        /> 
      }
    </label>
  )
}

