import React, {useState} from 'react';
import Note from './Note';


const NoteList = ({notes}) => {

    return (
        <div>
            {notes.map(list => {
                return (
                    <Note note={list} />
                )
            })}
        </div>
    );
};

export default NoteList;