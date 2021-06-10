
export default function SearchBar ({setSearchParams}) {
    return (
        <article className="searchBar">
            <label>Buscar Proyectos</label>
            <div className="barContainer">
                <span className="iconify" data-icon="bx:bx-search" data-inline="false"></span>
                <input type="text" className="textBox" onChange={e => setSearchParams(e.target.value.toLowerCase())}/>
            </div>
        </article>
    )
}