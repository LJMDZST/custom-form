

export const desarmarEstructuraDataForm = (campos )=>Object.keys(campos).reduce(
    (data,nomCampo)=>({
        ...data,
        [nomCampo] : campos[nomCampo].value
    }),
    {}
);