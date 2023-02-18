import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';
import Notification from './components/Notification';
import noteService from './services/notes';


const Footer = () => {
  const footerStyle = {
    color: "green",
    fontStyle: "italic",
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Danilo Radeka 2023</em>
    </div>
  )
}


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)


  const hook = () => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])


  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote("")
      })

  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note "${note.content}" was already removed from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)


  return (
    
    <div>
      <Notification message={errorMessage} />
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>

      <form onSubmit={addNote}>
        <input 
        value={newNote} 
        onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>

      <Footer />
    </div>
  );
}

export default App;
