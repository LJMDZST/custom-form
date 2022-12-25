import React from 'react'
import { useContextForm } from '../../../hooks/useContextForm';
import { CampoBooleano } from './CampoBooleano';
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
      <div className='row'>
         <div className='col'>
            <label className='form-label'> { _props.etiqueta }</label>
         </div>
         <div className='col'>
          { _props.type === 'booleano' && <CampoBooleano  {..._props}value = {campos ? campos[_props.name].value : ''} onChange={handleChange}  />}        
          { _props.type === 'textarea' &&  <CampoTextArea  {..._props}value = {campos ? campos[_props.name].value : ''} onChange={handleChange}  />}
          { _props.type === 'select' && <CampoSelect {..._props} value = {campos ? campos[_props.name].value : ''} onChange={handleChange}  />}
          { _props.type !== 'textarea' && _props.type !== 'select' && _props.type !== 'booleano' &&
          
            <input className='form-control'
              type={_props.type}
              value = {campos ? campos[_props.name].value : ''} 
              onChange={handleChange}
              {..._props} 
              
            /> 
          }
         </div>
      </div>
    }
    </>
  )
}

