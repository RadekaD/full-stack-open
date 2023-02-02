import { useState } from 'react';
import Note from './components/Note'

const App = ( { notes } ) => {
  const [note, setNote] = useState(notes)
  const [newNote, setNewNote] = useState("a new note..")
  const [showAll, setShowAll] = useState(true)


  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: note.length + 1,
    }

    setNote(note.concat(noteObject))
    setNewNote("")
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

  const notesToShow = showAll
  ? note
  : note.filter(note => note.important)


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}/>
        )}
      </ul>

      <form onSubmit={addNote}>
        <input 
        value={newNote} 
        onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
