import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Context from '../../../../Context'
import { useContext } from 'react'

export default function DeleteModal ({showModal, setShowModal, project}) {

  const context = useContext(Context)

  const deleteProject = (projectToDelete) => context.setProjects(context.projects.filter(project => (project !== projectToDelete)))

    return (
      <Modal show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Querés eliminar este proyecto?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cuando elimines el proyecto ya no podrás recuperar la información.</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShowModal(false)}>Cancelar</Button>
            <Button variant="primary" onClick={()=>{setShowModal(false); deleteProject(project)}}>Eliminar</Button>
        </Modal.Footer>
    </Modal>
    )
}