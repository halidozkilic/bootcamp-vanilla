import React from 'react';
import { useHistory } from "react-router-dom";

const Note = ({note,handleRemove}) => {
    const history = useHistory();
    const getDetail = (id) => {
        history.push('/notes/'+id);
    }
    return (
        <div>
            <div onClick={() => getDetail(note.id)}>
                {note.text}
            </div>
            <button onClick={() => handleRemove(note.id)} style={{'margin':8}}>delete</button>
        </div>
    );
};

export default Note;