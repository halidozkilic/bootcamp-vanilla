import React from 'react';

const Note = ({note,handleRemove}) => {
    return (
        <div>
            {note.text}
            <button onClick={() => handleRemove(note.id)} style={{'margin':8}}>delete</button>
        </div>
    );
};

export default Note;