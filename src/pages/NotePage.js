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
        let newData = {
            text:e,
            id:counter+1
        }
        arr.push(newData)
        setCounter(counter+1);
        setNote(arr);
    };

    const handleRemove = (id) => {
       arr = notes;
       let newArr = arr.filter(element => element.id !=id )
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
