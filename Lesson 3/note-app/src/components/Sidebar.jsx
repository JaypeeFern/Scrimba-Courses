import React from "react"

/**
 * 3rd Challenge: Try to figure out a way to display only the 
 * first line of note.body as the note summary in the
 * sidebar.
 * 
 * Hint 1: note.body has "invisible" newline characters
 * in the text every time there's a new line shown. E.g.
 * the text in Note 1 is:
 * "# Note summary\n\nBeginning of the note"
 * 
 * Hint 2: See if you can split the string into an array
 * using the "\n" newline character as the divider
 */

export default function Sidebar(props) {
    
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div 
            className={`title ${note.id === props.currentNote.id ? "selected-note" : ""}`} 
            onClick={() => props.setCurrentNoteId(note.id)}
            >
            {/* Access the first line of note.body and display it as the note summary */}
            <h4 className="text-snippet">{note.body === '' ? `Note ${index + 1}`:`${note.body.split("\n")[0]}`}</h4>
            <button className="delete-btn" onClick={(event) => props.deleteNote(event, note.id)}>
                <i className="gg-trash trash-icon"></i>
            </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
