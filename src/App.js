import React from 'react';
import { CampoLista } from './Formulario/CampoLista/CampoLista';
import { CampoSimple } from './Formulario/CampoSimple/CampoSimple';
import { Formulario } from './Formulario/Formulario';
import { LineaFormulario } from './Formulario/LineaFormulario';

export const App = ()=> {
  return (
    <>
      <header > 
        Formulario 
      </header>
      
      <main>
          <Formulario _titulo={'Formulario'}>
            <LineaFormulario _id={1} _leyenda={'Datos Personales'} >
              <CampoSimple 
                _etiqueta='Nombre'
                defaultValue={''}
                name='nom'
                type='text'
              />
              <CampoSimple 
                defaultValue={''}
                _etiqueta='Apellido'
                name='ape'
                type='text'
              />
            </LineaFormulario>
            <LineaFormulario _id={2} _leyenda={'Otros Datos'}>
              <CampoSimple 
                _etiqueta='Tel'
                defaultValue={''}
                name='tel'
                type='text'
              />
              <CampoLista _leyenda={'Direcciones'} _nom={'direcciones'}>
                <CampoSimple 
                  _etiqueta ='Direccion'
                  defaultValue={''}
                  name='dir'
                  type='text'
                />
                <CampoSimple 
                  _etiqueta ='C.P.'
                  defaultValue={''}
                  name='cp'
                  type='text'
                />
              </CampoLista>
            </LineaFormulario>
          </Formulario>
      </main>
      
      <footer> Formulario </footer>
    </>
  );
}