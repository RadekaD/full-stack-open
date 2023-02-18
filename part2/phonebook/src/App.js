import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search'
import PersonForm from './components/PersonForm';
import PersonsList from './components/PersonsList';
import Notification from './components/Notification';
import personService from './services/backend';


const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filteredList, setFilteredList ] = useState(persons)
  const [ message, setMessage ] = useState(null)

  const hook = () => {
    personService
      .getAll()
      .then(initialPersonList => {
        setPersons(initialPersonList)
      })
  }

  useEffect(hook, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const currentName = persons.filter(
      (person) => person.name === newPerson.name
    )

    if (currentName.length === 0) {
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        setMessage(`Added ${newPerson.name}`)

        setTimeout(() => {
          setMessage(null)
        }, 5000)

    } else {  

       /// Update number
      if (window.confirm(`${newPerson.name} is already added to the phonebook, replace old number with new one?`)) {
        console.log(currentName);
        personService
          .update(currentName[0].id, newPerson)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) => 
              person.id !== returnedPerson.id ? person : returnedPerson
            );
            setPersons(updatedPersons);
            
          })

          setMessage(`Updated ${currentName[0].name}'s phone number`)

          setTimeout(() => {
            setMessage(null)
          }, 5000)
        }

     }
     setNewName("")
     setNewNumber("")
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

/// Delete entry from contacts
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(response => {
        const updatedPersons = persons.filter((person) => person.id !== id)
        setPersons(updatedPersons)
      })
    } 
  }


  

  return (
    <div>

        <Notification message={message} />

      <h1>Phonebook</h1>
        
        <Search filter={filterBySearch}/>


      <h2>Add new</h2>

        <PersonForm submit={handleSubmit} name={newName} number={newNumber} nameHandle={handleNameInput} numberHandle={handleNumberInput}/>

        

      <h2>Contacts</h2>
 
        <PersonsList persons={persons} handleDelete={handleDelete}/>
      
    </div>
    
  );

}

export default App;
