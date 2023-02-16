import App from '../App';


const Search = ({ filter }) => {
    
    
    return (
        <>
            <h2>Filter:</h2>
            <input onChange={filter} className={"search"} />
        </>
    )
}


export default Search;