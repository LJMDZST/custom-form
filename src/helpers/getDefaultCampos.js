

export const getDefaultCampos = ( campos )=>{

    return campos instanceof Array 
        ? campos.reduce ( 
            (defaultCampos , campo )=>({
                ...defaultCampos,
                [campo.props.name] : {
                    valor : campo.props.defaultValue,
                    valido : campo.props.defaultValue ? true : false
                }
            }),{} )
        : {
            [campos.props.name] : {
                valor : campos.props.defaultValue,
                valido : campos.props.defaultValue ? true : false
            }
        }
}