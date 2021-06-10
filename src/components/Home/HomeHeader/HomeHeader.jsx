import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default function HomeHeader () {
    return (
        <header className='homeHeader'>
            <h1>My projects</h1>
            <Link to='/add'><Button className="btn-primary">+ Add project</Button>{' '}</Link>
        </header>
    )
}