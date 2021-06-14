import { useHistory, useParams } from "react-router-dom"
import Context from '../../../Context'
import { useContext, useState } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

export default function AddAndEditProjectForm ({btnContent}) {
    
    const context = useContext(Context)
    const history = useHistory()

    const { projectId } = useParams()
    const project = context.projects.filter(project => (project.projectId === parseInt(projectId)))[0]

    const showSelectedProjectManager = () => context.projectManagers.filter(pm => (pm === project.projectManager)).map((pm, i) => <option key={i} value={pm} selected>{pm}</option>)
    const showOtherProjectManagers = () => context.projectManagers.filter(pm => (pm !== project.projectManager)).map((pm, i) => <option key={i} value={pm}>{pm}</option>)
    const showProjectManagers = () => context.projectManagers.map((pm, i) => <option key={i} value={pm}>{pm}</option>)

    const showSelectedDeveloper = () => context.developers.filter(dev => (dev === project.assignedTo)).map((dev, i) => <option key={i} value={dev} selected>{dev}</option>)
    const showOtherDevelopers = () => context.developers.filter(dev => (dev !== project.assignedTo)).map((dev, i) => <option key={i} value={dev}>{dev}</option>)
    const showDevelopers = () => context.developers.map((dev, i) => <option key={i} value={dev}>{dev}</option>)

    const [projectName, setProjectName] = useState(projectId !== undefined ? project.projectName : null)
    const [projectDescription, setProjectDescription] = useState(projectId !== undefined ? project.projectDescription : null)
    const [projectManager, setProjectManager] = useState(projectId !== undefined ? project.projectManager : null)
    const [projectDeveloper, setProjectDeveloper] = useState(projectId !== undefined ? project.assignedTo : null)
    const [status, setStatus] = useState(projectId !== undefined ? project.status : 'Enabled')

    const addProject = (e) => {
        e.preventDefault()
        if (projectName && projectDescription && projectManager && projectDeveloper) {
            let newId = context.projects[context.projects.length-1].projectId+1
            context.setProjects([...context.projects, {projectId:newId , projectName:projectName, projectDescription:projectDescription, projectManager:projectManager, assignedTo:projectDeveloper, status:status, creationDate: Date(Date.now()) }])
            history.push('/')
        }
    }

    const saveChanges = (e) => {
        e.preventDefault()
        if (projectName && projectDescription && projectManager && projectDeveloper) {
            project.projectName = projectName
            project.projectDescription = projectDescription
            project.projectManager = projectManager
            project.assignedTo = projectDeveloper
            project.status = status
            history.push('/')
        }
    }

    const popover = (
        <Popover id="popover-basic" className='popover'>
          <Popover.Content><p className='popover-content'>Completá todos los campos del formulario.</p></Popover.Content>
        </Popover>
      )

    return (
        <form>
            <article className="formInput">
                <label for="name">Project name</label>
                <input id="name" type="text" placeholder={(projectId !== undefined && projectName !== '') ? project.projectName : null} onChange={e => setProjectName(e.target.value)} />
            </article>

            <article className="formInput">
                <label for="description">Description</label>
                <input id="description" type="text" placeholder={(projectId !== undefined && projectDescription !== '') ? project.projectDescription : null} onChange={e => setProjectDescription(e.target.value)}/>
            </article>

            <article className="formInput">
                <label for="projectManager">Project manager</label>
                <select id="projectManager" onChange={e => setProjectManager(e.target.value)}>
                    <option value="">Select a person</option>
                    {projectId !== undefined ? showSelectedProjectManager() : null}
                    {projectId !== undefined ? showOtherProjectManagers() : showProjectManagers()}
                </select>
            </article>

            <article className="formInput">
                <label for="developer">Assigned to</label>
                <select id="developer" onChange={e => setProjectDeveloper(e.target.value)}>
                    <option value="">Select a person</option>
                    {projectId !== undefined ? showSelectedDeveloper() : null}
                    {projectId !== undefined ? showOtherDevelopers() : showDevelopers()}
                </select>
            </article>

            <article className="formInput">
                <label for="status">Status</label>
                <select id="status" onChange={e => setStatus(e.target.value)}>
                    <option value="Enabled">Enabled</option>
                    <option value="Disabled">Disabled</option>
                </select>
            </article>

            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <button className='btn-primary' onClick={btnContent === 'Create project' ? (e)=>addProject(e) : (e)=>saveChanges(e)}>{btnContent}</button>
            </OverlayTrigger>
        </form>
    )
}