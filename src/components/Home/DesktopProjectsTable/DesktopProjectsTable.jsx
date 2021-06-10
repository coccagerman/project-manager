import Table from 'react-bootstrap/Table'
import DesktopProjectRegister from './DesktopProjectRegister/DesktopProjectRegister'
import Context from '../../../Context'
import { useContext } from 'react'

export default function DesktopProjectsTable ({searchParams}) {

    const context = useContext(Context)

    const filteredProjects = context.projects.filter(project => (project.projectName.toLowerCase().includes(searchParams)))

    const showProjects = () => context.projects.map(project => <DesktopProjectRegister key={project.projectId} project={project}/>)
    const showFilteredProjects = () => filteredProjects.map(project => <DesktopProjectRegister key={project.projectId} project={project}/>)
    
    return (
        <section className='projectsTableContainer'>

            <Table className='projectsTable'>
                <thead>
                    <tr>
                        <th>Project info</th>
                        <th>Project manager</th>
                        <th>Assigned to</th>
                        <th className='status'>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {searchParams ? showFilteredProjects() : showProjects()}
                </tbody>
            </Table>

        </section>
    )
}