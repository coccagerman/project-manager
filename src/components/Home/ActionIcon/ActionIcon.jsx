import { useState } from 'react'
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown'
import DeleteModal from './DeleteModal/DeleteModal'

export default function ActionIcon ({project}) {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle className='actionToggle actionIcon' id="dropdown-basic">
                    <span className="iconify actionIcon" data-icon="bx:bx-dots-vertical-rounded" data-inline="false"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="right" className='drowpdownMenu'>
                    <Link to={`/edit/${project.projectId}`}>
                        <Dropdown.Item href="#/action-1" className='editAction'><span class="iconify" data-icon="la-edit-solid" data-inline="false"></span> Edit</Dropdown.Item>
                    </Link>
                    <Dropdown.Item onClick={()=>setShowModal(true)} href="#/action-2" className='deleteAction'><span class="iconify" data-icon="ant-design:delete-outlined" data-inline="false"></span> Delete</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <DeleteModal showModal={showModal} setShowModal={setShowModal} project={project}/>
        </>
    )
}