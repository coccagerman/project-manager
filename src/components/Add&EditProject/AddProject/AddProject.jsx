import AddAndEditProjectHeader from '../Add&EditProjectHeader/Add&EditProjectHeader'
import AddAndEditProjectForm from '../Add&EditProjectForm/Add&EditProjectForm'

export default function AddProject () {
    return (
        <>
            <AddAndEditProjectHeader tittle={'Add project'}/>
            <AddAndEditProjectForm name={null} description={null} manager={null} developer={null} stat={'Enabled'} date={new Date(Date.now())} btnContent={'Create project'}/>
        </>
    )
}