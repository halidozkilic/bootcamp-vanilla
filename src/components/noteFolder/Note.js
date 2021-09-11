import React from 'react';

const Note = ({note}) => {
    return (
        <div>
            {note.text}
            <button style={{'margin':8}}>delete</button>
        </div>
    );
};

export default Note;