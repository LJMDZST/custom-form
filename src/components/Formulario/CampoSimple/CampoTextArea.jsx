

export const CampoTextArea = (campoProps = {}) => {
    
    return <textarea className='form-control' {...campoProps} > {campoProps.value} </textarea>
}