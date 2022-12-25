import React from 'react'

export const NavFormProyecto = ({ _seccionElegida = 'seccion1' , _setSeccionElegida = ()=>{}, _secciones = [] }) => {
  return (
    <nav className='row w-50 float-end'>
       {
        _secciones.map( (seccion,i) => 
            <button key={`nav-${i}`}  className={`col btn ${ _seccionElegida === seccion ? 'btn-secondary' : 'btn-outline-secondary' }`}
              onClick = { ()=> _setSeccionElegida(seccion) }
            >  { seccion } </button>
          )
       }
      
    </nav>
  )
}
