import React, { useState } from 'react';
import NoteList from "../components/noteFolder/NoteList";
import TextInput from "../components/noteFolder/TextInput"
import notes from "../mockData/notes";



const NotePage = () => {
    const [note,setNote] = useState(notes);
    let addData;

    const handleAddItem = (e) => {
        console.log(e);
    };


    return (
        <div>
            <NoteList notes={note}/>
            <TextInput handleAddItem={handleAddItem} />
        </div>
    );
}

export default NotePage;
