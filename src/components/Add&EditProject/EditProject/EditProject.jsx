import AddAndEditProjectHeader from '../Add&EditProjectHeader/Add&EditProjectHeader'
import AddAndEditProjectForm from '../Add&EditProjectForm/Add&EditProjectForm'

export default function EditProject () {

    return (
        <>
            <AddAndEditProjectHeader tittle={'Edit project'} />
            <AddAndEditProjectForm btnContent={'Save changes'} />
        </>
    )
}