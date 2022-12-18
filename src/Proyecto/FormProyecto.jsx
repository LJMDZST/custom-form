import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavFormProyecto } from './NavFormProyecto';
import { FormProyectoSec2 } from './Secciones/FormProyectoSec2';
import { FormProyectoSec1 } from './Secciones/FormProyectoSec1';
import { FormProyectoSec3 } from './Secciones/FormProyectoSec3';
import { FormProyectoSec4PEIS } from './Secciones/FormProyectoSec4PEIS';
import { FormProyectoSec5 } from './Secciones/FormProyectoSec5';
import { FormProyectoSec4AET } from './Secciones/FormProyectoSec4AET';
import { Spiner } from '../Bases/Ui/Spiner';

export const FormProyecto = () => { 

    const secciones = ['Datos Generales','Equipo Extension','Problematica y Metodologia','Ver que poner'];

    const {cargandoForm} = useSelector(state => state.uiReducer);
    const {pFocus} = useSelector(state => state.pReducer);
    
    const [seccionElegida, setSeccionElegida] = useState('seccion1');

    const tipo = pFocus ? pFocus.oTipoProy.nom : '';


  return (
    <section className='p-2 bg-light d-flex justify-content-center'>
        {
            cargandoForm
             ? <Spiner />
             : <div className='row row-cols-1'>
                <div className='col'>
                    <NavFormProyecto _seccionElegida={seccionElegida} _setSeccionElegida={setSeccionElegida} _secciones={secciones} />
                </div>
                <div className='col'>
                  { (!cargandoForm )&& seccionElegida === 'Datos Generales' && <FormProyectoSec1 _tipo={tipo}  _setSeccionElegida={setSeccionElegida}/> }
                  { (!cargandoForm )&& seccionElegida === 'Equipo Extension' && <FormProyectoSec2 _tipo={tipo}  _setSeccionElegida={setSeccionElegida}/> }
                  {/* { (!cargandoForm )&& seccionElegida === 'seccion3' && <FormProyectoSec3 _tipo={tipo}  _setSeccionElegida={setSeccionElegida}/> } */}
                  { (!cargandoForm )&& seccionElegida === 'Problematica y Metodologia' &&  tipo === 'PEIS' && <FormProyectoSec4PEIS  _setSeccionElegida={setSeccionElegida}/> }
                  { (!cargandoForm )&& seccionElegida === 'Problematica y Metodologia' &&  tipo === 'AET' && <FormProyectoSec4AET  _setSeccionElegida={setSeccionElegida}/> }
                  { (!cargandoForm )&& seccionElegida === 'Ver que poner' && <FormProyectoSec5 _tipo={tipo} _setSeccionElegida={setSeccionElegida} /> }
                </div>
              </div>
             
        }


    </section>
  )
}
