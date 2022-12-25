import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from 'react-redux';
import { startMostrarFormProyecto } from '../../actions/p';
import { FormProyectoSec1 } from './FormProyectoSec1';
import { ModalPalabrasClave } from './ModalPalabrasClave';




export const FormProyecto = () => {
    const dispatch = useDispatch()
    

   
    // const secciones = ['Datos Generales','Equipo Extension','Problematica y Metodologia','Ver que poner'];



    // const {pFocus} = useSelector(state => state.pReducer);

    // const [seccionElegida, setSeccionElegida] = useState('seccion1');

    // const tipo = pFocus ? pFocus.oTipoProy.nom : '';

    useEffect(() => { dispatch(startMostrarFormProyecto()) }, [])


  return (
    <div className='row row-cols-1 d-flex justify-content-center'>
        {/* <div className='col'>
            {/* <NavFormProyecto _seccionElegida={seccionElegida} _setSeccionElegida={setSeccionElegida} _secciones={secciones} />
        </div> */}
        <div className='col '>
          <div className='container'>
             {/* { (!cargandoForm )&& seccionElegida === 'Datos Generales' && <FormProyectoSec1 /> } */}
            {/* { (!cargandoForm )&& seccionElegida === 'Equipo Extension' && <FormProyectoSec2 /> }
            { (!cargandoForm )&& seccionElegida === 'Ver que poner' && <FormProyectoSec4  /> } */}
            <FormProyectoSec1 />
          </div>
         
        </div>
      </div>

  )
}
