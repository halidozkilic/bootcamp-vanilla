import React from 'react';
import { useLocation } from 'react-router-dom';

const NoteDetail = ({notes}) => {
    const location = useLocation();
   // const noteDetail = note.filter(noteDetail)
    let loc = location.pathname.split('/');
    console.log(loc[2])
    console.log(notes);
    let noteDetail = notes.filter(o => o.id == loc[2]);
    console.log(noteDetail);
    let show;
    noteDetail[0] && noteDetail[0].text ? show = noteDetail[0].text : show ='Bu id ye id bir kayıt yoktur'
    console.log(show);
    return (
        <div>
            {show}
        </div>
    );
};

export default NoteDetail;