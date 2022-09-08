

export const getDefaultLineas = ( lineas = [] )=>{

    return lineas.reduce ( 
        (defaultLineas , linea )=>({
            ...defaultLineas,
            [linea.props._id] : {
                esValida : false
            }
        }),{} );
}