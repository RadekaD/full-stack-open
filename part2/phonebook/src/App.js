import { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: "Danilo Radeka", id: "danilo-radeka", number: "063 289 7162"}
  ])
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      id: newName.split(" ").join("-").toLowerCase(),
      number: newNumber
    } 
     

      let keys = persons.map(person => person.id)

      if (keys.includes(newPerson.id)) {
        alert(`${newName} was already added to the phonebook`)
      } else {
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
      }
      

    }


  const handleNameInput = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value ={newNumber} onChange={handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <p key={person.id}>{person.name} {person.number}</p>)}
      </div>
    </div>
  );

}

export default App;
