import { useState } from 'react';
import Search from './components/Search'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: "Danilo Radeka", id: "danilo-radeka", number: "063 289 7162"}
  ])
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filteredList, setFilteredList ] = useState(persons)


  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      id: newName.split(" ").join("-").toLowerCase(),
      number: newNumber
    } 
     
/// Blocks ability to add already existing names by comparing id
      let keys = persons.map(person => person.id)
      if (keys.includes(newPerson.id)) {
        alert(`${newName} was already added to the phonebook`)
      } else {
        setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
      }
    }

    
/// Search function
    const filterBySearch = (e) => {
      const query = e.target.value;
      
      if (query !== "") {
        let updatedList = [...persons];
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
       })
        setFilteredList(updatedList)
      
      } else {
        setFilteredList(persons)
      }
     
   }

   
   

   function output(mainList, filteredList) {
	let inputValue = document.querySelector(".search")
	if (inputValue === null) {
		return mainList
	} else {
		return filteredList
	}
   }

   let outputList = output(persons, filteredList)


   

/// Handles state of all input buttons
  const handleNameInput = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
        
        <Search filter={filterBySearch}/>


        <h2>Add new</h2>
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
        {filteredList.map((person) => <p key={person.id}>{person.name} {person.number} </p>)}
      </div>

      
    </div>
    
  );

}

export default App;
