import React from 'react'
import { useSelector } from 'react-redux'
import { CampoLista } from '../Formulario/CampoLista/CampoLista';
import { Campo } from '../Formulario/CampoSimple/Campo';
import { Formulario } from '../Formulario/Formulario'
import { ListaPalabras } from './ListaPalabras';

export const FormProyectoSec1 = () => {

  const {pFocus} = useSelector( state => state.pReducer );

  const { 
    bianual,
    lPalabrasClave,
    lProgramaExtension,
    lLineaTematica,
    tipoProyecto_Id,
    unidadAcademica_id 
  } = pFocus ? pFocus : {};

  return (
   <>
      {
        pFocus&&
        
        <Formulario 
          _estadoInicial={{
            bianual,
            lPalabrasClave,
            lProgramaExtension,
            lLineaTematica,
            tipoProyecto_Id,
            unidadAcademica_id,
          }}
          _titulo = 'Form Proyecto Seccion Datos Generales' 
        >
          <Campo etiqueta='Modalidad del proyecto' name='tipoProyecto_Id' type='select' opciones={[{id:'',nom:'seleccione'}]} />
          <Campo etiqueta='Linea/s Temática/s' name='lLineaTematica' type='select' multiple={true} opciones={[{id:'',nom:'seleccione'}]} />
          <Campo etiqueta='Programas de Extension' name='lProgramaExtension' type='select' opciones={[{id:'',nom:'seleccione'}]} />
          <Campo etiqueta='Unidad Académica' name = 'unidadAcademica_id' type='select' opciones={[{id:'',nom:'seleccione'}]} />
          <Campo etiqueta='Duracion'  name='bianual' nomopc1='bianual' nomopc2='anual'  type='booleano' />
          <CampoLista _estadoInicialModal={{ palabra : ''}} compListaRegistros = {<ListaPalabras />} _leyenda='Palabras Clave' _nom='lPalabrasClave'  _labelAgregarRegistro = 'Agregar Palabra' />
        </Formulario>
      }
   </>
  )
}
