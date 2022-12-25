import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startCargarModalCampoLista } from '../../../actions/lista';
import { useContextForm } from '../../../hooks/useContextForm';


/**
 * Campo que genera un modal con el formulario de carga de los 
 * campos de cada registro de la lista.
 * Muestra los registros con el componente argumento 
 * 
 * @param {*} _estadoInicialModal campos del modal con valores iniciales para el useForm
 * @param {*} compListaRegistros componente para visualizar los registros cargados 
 * @param {*} _leyenda Titulo del CampoLista
 * @param {*} _nom  Nombre del campo lista
 * @param {*} _labelAgregarRegistro Etiqueta del boton Agregar
 * 
 * @returns JSX fieldset con leyenda y lista de CampoSimple mas boton agregar
 */
export const CampoLista = ({ _estadoInicialModal={} ,compListaRegistros, _leyenda , _nom, _labelAgregarRegistro = 'Agregar' }) => {

  const dispatch = useDispatch();

  const {campos,handleCampoChange} = useContextForm();

  const {modalCampos} = useSelector(state => state.modalReducer);

  const [listaRegistros, setListaRegistros] = useState(campos[_nom] || [])
  
  useEffect(()=>{setListaRegistros([...[listaRegistros],{...modalCampos}])},[modalCampos])

  useEffect(() => { 
    handleCampoChange({
      name : _nom,
      value : listaRegistros,
      validity : {
        valid : listaRegistros.length > 0
      } 
    })
  }, [listaRegistros])
  
  const handleAddRegistro = (e)=>{
    e.preventDefault();
    dispatch(startCargarModalCampoLista( _nom ,_estadoInicialModal ))
  }
    
  return (
    <section className='container'>
      <div className='row'>
        <div className='col'>
            {_leyenda}
        </div>
        <div className='col d-flex justify-content-end'>
        
            <button className='btn btn-primary' onClick={handleAddRegistro} >{_labelAgregarRegistro}</button>
        
        </div>
       
      </div>
      <div className='row'>
          <div className='col'>
            
            {
              compListaRegistros
            }
          </div>
      </div>
    </section>
  )
}
