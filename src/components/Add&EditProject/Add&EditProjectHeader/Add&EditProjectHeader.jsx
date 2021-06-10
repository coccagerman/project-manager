import { Link } from "react-router-dom";

export default function AddAndEditProjectHeader ({tittle}) {
    return (
        <header className='AddAndEditProjectHeader'>
            <Link to='/'>
                <div className='goBack'>
                    <span className="iconify" data-icon="akar-icons:arrow-left" data-inline="false"></span>
                    <p>Back</p>
                </div>
            </Link>
            <h1>{tittle}</h1>
        </header>
    )
}