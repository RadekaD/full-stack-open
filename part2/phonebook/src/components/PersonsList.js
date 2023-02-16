import App from '../App';

const Person = ({ person }) => {

    return (
        <p>{person.name} {person.number}</p>
    )
}

const PersonsList = ({ persons }) => {
    
    return (
        <>
        {persons.map((person) => {
            return <Person person={person}/>
        })}
        </>
    )
       
    
}


export default PersonsList;