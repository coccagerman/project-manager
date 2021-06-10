import moment from 'moment'
import UserIcons from '../../UsersIcons/UsersIcons'
import ActionIcon from '../../ActionIcon/ActionIcon'

export default function MobileProjectRegister ({project}) {
    return (
        <article className='mobileProjectRegister'>
            <ActionIcon project={project} />
            <h2>{project.projectName}</h2>
            <p className='creationDate'>Creation date: {moment(project.creationDate).format('DD/MM/YYYY HH:mm a')}</p>
            <div className='assignedTo-container'>
                <UserIcons user={project.assignedTo}/>
                <p className='developer'>{project.assignedTo}</p>
            </div>
        </article>

    )
}