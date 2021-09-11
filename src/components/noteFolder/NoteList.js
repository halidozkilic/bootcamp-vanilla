import React, {useState} from 'react';
import Note from './Note';


const NoteList = ({notes,handleRemove}) => {

    return (
        <div>
            {notes.map(list => {
                return (
                    <Note note={list} handleRemove={handleRemove} />
                )
            })}
        </div>
    );
};

export default NoteList;