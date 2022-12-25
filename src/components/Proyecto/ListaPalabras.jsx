import React from 'react'
import { useContextForm } from '../../hooks/useContextForm'

export const ListaPalabras = () => {

    const {campos} = useContextForm(); 

  return (<></>
    // <p>{ campos && campos['lPalabrasClave'] && campos['lPalabrasClave'].map( palabra => <span>{palabra}</span>).join('-') }</p>
  )
}
