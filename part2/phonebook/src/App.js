import { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: "Danilo Radeka", id: "danilo"}
  ])


  const [ newName, setNewName ] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      id: newName.split(" ")[0].toLowerCase()
    }

    console.log(newPerson.id)
    setPersons(persons.concat(newPerson))
    setNewName("")
  }


  const handleInput = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((person) => <p key={person.id}>{person.name}</p>)}</div>
    </div>
  );

}

export default App;
