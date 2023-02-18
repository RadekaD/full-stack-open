import App from '../App';

const Person = ({ person, handleDelete }) => {
    
    return (
        <div style={{border: "1px solid black", padding: "10px", width: "20%", marginBottom: "5px"}}>
            <p key={person.id}>{person.name} {person.number}</p>
            <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
        </div>
        
        
        
    )
}

const PersonsList = ({ persons, handleDelete }) => {
    
    return (
        <>
        {persons.map((person) => {
            return <Person key={person.id} person={person} handleDelete={handleDelete}/>
        })}
        </>
    )
       
    
}


export default PersonsList;