import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startMostrarFormProyecto } from './actions/p';
import { Campo } from './Formulario/CampoSimple/Campo';
import { Formulario } from './Formulario/Formulario';

export const App = ()=> {
  
  // const campos = ['asunto','archivo'];

  // const [archivosCargados, setArchivosCargados] = useState([]);

  const {pFocus} = useSelector(state => state.pReducer);

  const dispatch = useDispatch()

  useEffect(() => { dispatch(startMostrarFormProyecto()) }, [])
  
  return (

    <>
      <header > 

        Formulario 
      </header>
      
      {
        pFocus && 
          
          <Formulario _estadoInicial={ pFocus ? pFocus : {} } >
            <Campo id='problemaAbordar' name='problemaAbordar' type='textarea' etiqueta='Problema a Abordar' />
          </Formulario>
          
      }
      <footer> Formulario </footer>
    </>
  );
}