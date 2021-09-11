import React, { useState } from 'react';
import NoteList from "../components/noteFolder/NoteList";
import TextInput from "../components/noteFolder/TextInput"
import notes from "../mockData/notes";



const NotePage = () => {
    const [note,setNote] = useState(notes);
    const [counter,setCounter]= useState(notes[notes.length-1].id);
    let arr;

    const handleAddItem = (e) => {
        arr=note;
        setCounter(counter+1);
        let newData = {
            text:e,
            id:counter
        }
        arr.push(newData)
        setNote(arr);

        console.log(note);
    };

    const handleRemove = (id) => {
        console.log(id);
        arr = notes;
       let newArr =   arr.filter(element => element.id !=id )
       setNote(newArr);
    }


    return (
        <div>
            <NoteList notes={note} handleRemove={handleRemove}/>
            <TextInput handleAddItem={handleAddItem} />
        </div>
    );
}

export default NotePage;
