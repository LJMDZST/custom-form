<form 
encType='multipart/form-data'
onSubmit={ (e)=> {
  e.preventDefault();

  const formData = new FormData();
  
  campos.forEach( nomCampo => 
      formData.append(
        nomCampo,
        e.target[nomCampo].type ==='file' 
          ? e.target[nomCampo].files[0]
          : e.target[nomCampo].value
      )
    )


  fetch('http://localhost:4000/upload',{
    method : 'POST',
    body : formData
  })
  .then(resp => resp.json())
  .then(data => setArchivosCargados(data.data.archivosCargados))

}} >
<fieldset>
  <legend>Carga de Archivos</legend>
  <label> 
    <span>Asunto : </span> 
    <input id='asunto'
        nom='asunto'
        type={'tex'}
        defaultValue = {''} 
          />
  </label>
  <label> 
    <span>Seleccione : </span> 
    <input id='archivo'
        nom='archivo'
        type={'file'}
        defaultValue = {''} 

      /> 
  </label>
</fieldset>
<fieldset>
  <input type={'submit'}  value='Upload' /> 
</fieldset>
</form>
<ul>
  {
    archivosCargados.map( nomArchivo => 
        <li>
          <i className="fa-sharp fa-solid fa-file-pdf"></i>
           - {nomArchivo}
           <button onClick={
              (e)=> {
                e.preventDefault();
                fetch(`http://localhost:4000/${nomArchivo}`,{method:'DELETE'})
                  .then(resp => resp.json())
                  .then(data => setArchivosCargados(data.data.archivosCargados))
              } 
              
            
            } > x </button>
        </li>
      )
  }
</ul>