import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search'
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filteredList, setFilteredList ] = useState(persons)

  const hook = () => {
    axios
    .get("http://localhost:3001/persons")
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    axios
      .post("http://localhost:3001/persons", newPerson)
      .then(response => {
        console.log(response)
      })
     
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

        <PersonForm submit={handleSubmit} name={newName} number={newNumber} nameHandle={handleNameInput} numberHandle={handleNumberInput}/>

        

      <h2>Contacts</h2>
 
        <PersonsList persons={persons}/>
      
    </div>
    
  );

}

export default App;
