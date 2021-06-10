import moment from 'moment'
import UserIcons from '../../UsersIcons/UsersIcons'
import ActionIcon from '../../ActionIcon/ActionIcon'

export default function DesktopProjectRegister ({project}) {

    return (
        <>
            <tr className='dsktopProjectRegister'>
                <td>
                    <div className='projectInfo'>
                        {project.projectName}
                        <p className='creationDate'>Creation date: {moment(project.creationDate).format('DD/MM/YYYY HH:mm a')}</p>
                    </div>
                </td>
                <td>
                    <div className='projectManager-container'>
                        <UserIcons user={project.projectManager}/>
                        {project.projectManager}
                    </div>
                </td>
                <td>
                    <div className='assignedTo-container'>
                        <UserIcons user={project.assignedTo}/>
                        {project.assignedTo}
                    </div>
                </td>
                <td className='status'><p>{project.status}</p></td>
                <td>
                    <ActionIcon project={project} />
                </td>
            </tr>

        </>
    )
}