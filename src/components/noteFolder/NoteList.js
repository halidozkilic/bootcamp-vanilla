import React, {useState} from 'react';
import Note from './Note';
import notes from "../../mockData/notes";

const NoteList = () => {
    const [notes,setNotes] = useState(notes);
    return (
        <div>
            {notes.map(list => {
                return (
                    <Note note={notes} />
                )
            })}
        </div>
    );
};

export default NoteList;