import React, { useState } from 'react';
import NoteList from "../components/noteFolder/NoteList";
import TextInput from "../components/noteFolder/TextInput"
import notes from "../mockData/notes";

const NotePage = ({notes,handleRemove,handleAddItem}) => {
    return (
        <div>
            <NoteList notes={notes} handleRemove={handleRemove}/>
            <TextInput handleAddItem={handleAddItem} />
        </div>
    );
}

export default NotePage;
