import React from 'react';
import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { FormProyecto } from './components/Proyecto/FormProyecto';
import { ModalPalabrasClave } from './components/Proyecto/ModalPalabrasClave';
import { store } from './store/store';


export const App = ()=> {
  
  // const campos = ['asunto','archivo'];

  // const [archivosCargados, setArchivosCargados] = useState([]);

 
  
  return (

     <Provider store={store}>
      <header className='mb-2 border '> Formulario </header>
        <Main />
      <footer className='mt-2 border '> Formulario </footer>
      </Provider>
   
  );
}