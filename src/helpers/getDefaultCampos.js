

export const getDefaultCampos = ( campos )=>{

    return campos instanceof Array 
        ? campos.reduce ( 
            (defaultCampos , campo )=>({
                ...defaultCampos,
                [campo.props.name] : {
                    value : campo.props.defaultValue,
                    valido : campo.props.defaultValue ? true : false
                }
            }),{} )
        : {
            [campos.props.name] : {
                value : campos.props.defaultValue,
                valido : campos.props.defaultValue ? true : false
            }
        }
}