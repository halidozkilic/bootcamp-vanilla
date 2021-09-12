import React,{useContext} from 'react';
import { useHistory } from "react-router-dom";
import {buttonColorContext} from "../../App"
const Note = ({note,handleRemove}) => {
    const history = useHistory();
    const getDetail = (id) => {
        history.push('/notes/'+id);
    }
    const value = useContext(buttonColorContext)
    console.log(value);
    return (
        <div>
            <div onClick={() => getDetail(note.id)}>
                {note.text}
            </div>
            <button onClick={() => handleRemove(note.id)} style={{'margin':8,'backgroundColor':value}}>delete</button>
        </div>
    );
};

export default Note;