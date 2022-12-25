import React from 'react'
import { useSelector } from 'react-redux'
import { FormProyecto } from './Proyecto/FormProyecto'
import { ModalPalabrasClave } from './Proyecto/ModalPalabrasClave'

export const Main = () => {
    const {showModal} = useSelector(state=>state.modalReducer)
  return (
    <div className='container'>
         {showModal && <ModalPalabrasClave  _titulo='Agregar Palabra Clave'/>}
        <FormProyecto />
    </div>
  )
}
