import React from 'react'

export const CampoBooleano = ( {nomopc1, nomopc2 ,defaultValue ,value , handleCampoChange = ()=>{}, name}) => {

    const handleChange = (e)=>{
        e.preventDefault();

        handleCampoChange( 
            name,
            defaultValue,
            e.target.validity
        );

    }

  return (
    <div className='row'>
        <div className='col'>
            <label> {nomopc1.toLowerCase()} <input id='true' name='true' checked={value === true} type='radio'  onChange={handleChange}/></label>
        </div>
        <div className='col'>
            <label> {nomopc2.toLowerCase()} <input id='false' name='false' checked={value === false} type='radio' onChange={handleChange}/></label>
        </div>
    </div>
  )
}
