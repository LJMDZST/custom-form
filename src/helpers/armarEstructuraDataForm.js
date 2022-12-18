

export const armarEstructuraDataForm = ( campos )=> Object.keys(campos).reduce ( 
        (estructuraData , nomCampo )=>({
            ...estructuraData,
            [nomCampo] : {
                value : campos[nomCampo],
                valido : {
                    valido : true,
                    msgError : null
                }
            }
        })
    ,{} 
);
