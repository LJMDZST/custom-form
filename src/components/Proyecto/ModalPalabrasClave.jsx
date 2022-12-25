import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'
import { cerrarModalCampoLista } from '../../actions/lista';
import { startEditarFormProyecto } from '../../actions/p';
import { Campo } from '../Formulario/CampoSimple/Campo';
import { Formulario } from '../Formulario/Formulario';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

export const ModalPalabrasClave = ({_titulo = ''}) => {
  const dispatch =  useDispatch();
    const {modalCampos,nom ,showModal} = useSelector(state => state.modalReducer);

    const handleSubmitModalCampoLista = (e,campos)=>{
      e.preventDefault();
      dispatch(startEditarFormProyecto(campos))
    }

    const handleCloseModal = ()=>{
      dispatch(cerrarModalCampoLista())
    }

  return (
        <Modal
          isOpen={showModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='modal'>
            <div className='modal-dialog'>
              <div className='modal-header '>
                  <button className='btn btn-outline-danger float-end' onClick={handleCloseModal}>x</button>
              </div>

            </div>
          </div>
            {
              modalCampos &&
              <Formulario 
                  _titulo={_titulo} 
                  _estadoInicial={modalCampos} 
                  _handleSubmitForm ={handleSubmitModalCampoLista}
              >
                <Campo name='palabra' type='text'  etiqueta='Palabra' maxLength={255} minLength={1} />
              </Formulario>
            }
        </Modal>
     
   
  )
}
