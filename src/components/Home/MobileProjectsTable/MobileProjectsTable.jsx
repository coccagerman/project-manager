import MobileProjectRegister from './MobileProjectRegister/MobileProjectRegister'
import Context from '../../../Context'
import { useContext } from 'react'

export default function MobileProjectsTable ({searchParams}) {
    
    const context = useContext(Context)
    
    const filteredProjects = context.projects.filter(project => (project.projectName.toLowerCase().includes(searchParams)))

    const showProjects = () => context.projects.map(project => <MobileProjectRegister key={project.projectId} project={project}/>)
    const showFilteredProjects = () => filteredProjects.map(project => <MobileProjectRegister key={project.projectId} project={project}/>)

    return (
        <>
            {searchParams ? showFilteredProjects() : showProjects()}
        </>
    )
}