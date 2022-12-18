

import React from 'react'

export const CampoSelect = ({opciones , defaultValue ,value , handleCampoChange = ()=>{},...campoProps}) => {
    
    const handleResetSelect = (e)=>{ 
        e.preventDefault();

        handleCampoChange(
            campoProps.name,
            defaultValue,
            e.target.validity
        );
    
    }
    
    return (
    <>
        <select className='form-select' 
            value = { value } 
            onChange={handleCampoChange} 
            {...campoProps} 
        >
        {
            opciones.map( opc => <option>{opc}</option>)
        }
        </select>
        {
            campoProps.multiple &&
            <>
                <p>Seleccionado:</p>
                <div>
                    <ul> 
                        {value.map((opc,i) => 
                            <li key={`opc-selected-${i}`}>{opc.nom}</li>)
                        }
                    </ul>
                </div>
            
                <button className='btn btn-link'
                    onClick={(e)=>{handleResetSelect(e)}}                    
                > 
                    Vaciar Seleccion 
                
                </button>
            </>
        }
    </>
  )
}
