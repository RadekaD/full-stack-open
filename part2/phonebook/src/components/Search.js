import App from '../App';


const Search = (props) => {
    
    
    return (
        <>
            <h2>Filter:</h2>
            <input onChange={props.filter} className={"search"} />
        </>
    )
}


export default Search;