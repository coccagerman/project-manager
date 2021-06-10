import Cocca from '../../../assets/foto-cocca.jpg'
import Basilio from '../../../assets/foto-lamponne.jpeg'
import Dupont from '../../../assets/foto-medina.jpeg'
import Milazzo from '../../../assets/foto-milazzo.jpeg'
import Molero from '../../../assets/foto-molero.jpeg'
import Cozzetti from '../../../assets/foto-ravenna.jpeg'
import Stofenmacher from '../../../assets/foto-santos.jpeg'
import Velazco from '../../../assets/foto-velazco.png'
import Ignacio from '../../../assets/foto-ignacio.png'
import { useContext } from 'react'
import Context from '../../../Context'

export default function UsersIcons ({user}) {
    
    const context = useContext(Context)

    const users = [...context.projectManagers, ...context.developers]
    
    const showIcon = (user) => {
        switch (user) {
            case 'Máximo Cozzetti': return Cozzetti
            case 'León Stofenmacher': return Stofenmacher
            case 'Jacques Dupont': return Dupont
            case 'Basilio Dos Reyes': return Basilio
            case 'Ignacio Truffa': return Ignacio
            case 'Germán Cocca': return Cocca
            case 'Franco Milazzo': return Milazzo
            case 'Marcos Molero': return Molero
            case 'Pedro Velazco': return Velazco
            default: return user.match(/\b(\w)/g).join('')
        }
    }

    return (
        <>
            {(users.indexOf(user) !== -1 && user !== 'Walt Cosani') ? 
                <img src={showIcon(user)} alt='user' className='usersIcons'></img> : 
                <span className='usersIcons initials'>{showIcon(user)}</span>}
        </>
    )
}