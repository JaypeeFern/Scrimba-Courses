import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"

export default function App() {
  /** 
   * 1st Challenge:
   * 1. Every time the `notes` array changes, save it 
   *    in localStorage. You'll need to use JSON.stringify()
   *    to turn the array into a string to save in localStorage.
   * 2. When the app first loads, initialize the notes state
   *    with the notes saved in localStorage. You'll need to
   *    use JSON.parse() to turn the stringified array back
   *    into a real JS array.
   */

  /**
 * 2nd Challenge:
 * Lazily initialize our `notes` state so it doesn't
 * reach into localStorage on every single re-render
 * of the App component
 */

  // Create a variable called `setStorage` that GETS the notes from localStorage
  const setStorage = () => JSON.parse(localStorage.getItem('notes'))

  const [notes, setNotes] = React.useState(setStorage || [])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

  // Create a useEffect that SETS the notes in localStorage
  // localStorage.removeItem('notes')
  localStorage.setItem('notes', JSON.stringify(notes))
  React.useEffect(() => {
    const getNotes = JSON.parse(localStorage.getItem('notes'))
    setNotes(getNotes)
  }, [currentNoteId])


  // Create a function called `createNewNote` that creates a new note
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  // Create a function called `updateNote` that updates the current note
  function updateNote(text) {

    // New Function
    setNotes(oldNotes => { // Get the old array
      const newArray = [] // Create a new array
      for (let i = 0; i < oldNotes.length; i++) { // Loop through the old array
        const oldNote = oldNotes[i] // Get the old note
        if (oldNote.id === currentNoteId) { // If the note id matches the current note id
          newArray.unshift({ ...oldNote, body: text }) // Add the new note to the beginning of the new array
        } else {
          newArray.push(oldNote) // Add the old note to the end of the new array
        }
      }
      return newArray
    })

    // ChatGPT Code: Declarative Version (For reference)
    // setNotes(oldNotes => {
    //   const updatedNoteIndex = oldNotes.findIndex(note => note.id === currentNoteId);
    //   const updatedNote = { ...oldNotes[updatedNoteIndex], body: text };
    //   const remainingNotes = oldNotes.filter(note => note.id !== currentNoteId);
    //   return [updatedNote, ...remainingNotes];
    // });

    // Old Function
    // setNotes(oldNotes => oldNotes.map(oldNote => {
    //     return oldNote.id === currentNoteId ? { ...oldNote, body: text } : oldNote
    // }))
  }

  // Create a function called `findCurrentNote` that finds the current note
  function findCurrentNote() {
    return notes.find(
      note => {
        return note.id === currentNoteId
      }) || notes[0]
  }

  /**
  * 4th Challenge: complete and implement the deleteNote function
  * 
  * Hints: 
  * 1. What array method can be used to return a new
  *    array that has filtered out an item based 
  *    on a condition?
  * 2. Notice the parameters being based to the function
  *    and think about how both of those parameters
  *    can be passed in during the onClick event handler
  */

  function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(oldNote => oldNote.id !== noteId))
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
