import React, { useEffect, useState } from 'react'
import { useContextForm } from '../../hooks/useContextForm';
import { CampoSelect } from './CampoSelect';
import { CampoTextArea } from './CampoTextArea';


/**
 * 
 * @param {*} _props resto de los atributos que reciba el campo
 * @returns JSX Label , con el input o select o textarea segun corresponda
 */
export const Campo = (_props = {}) => {

  const {campos,handleCampoChange} = useContextForm();

  const handleChange = (e)=> handleCampoChange({
    name : _props.name,
    value : e.target.value,
    validity : e.target.validity
  })

  return(
    <>
    {
      campos &&
      <label className='form-label'>
      { _props.etiqueta }
              
      { _props.type === 'textarea' &&  <CampoTextArea value = {campos ? campos[_props.name].value : ''} onChange={handleChange} {..._props} />}
      { _props.type === 'select' && <CampoSelect value = {campos ? campos[_props.name].value : ''} onChange={handleChange} {..._props} />}
      { _props.type !== 'textarea' && _props.type !== 'select' && 
        <input className='form-control'
          type={_props.type}
          value = {campos ? campos[_props.name].value : ''} 
          onChange={handleChange}
          {..._props} 
        /> 
      }
    </label>
    }
    </>
  )
}

