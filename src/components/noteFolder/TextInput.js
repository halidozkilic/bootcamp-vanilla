import React, {useState, useRef} from 'react';
import { ul } from 'reactstrap';

function TextInput(prop){
    const entredText = useRef()
    const handleSubmit = (event) => {
        event.preventDefault();
        prop.handleAddItem(entredText.current.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={entredText}/>
            <button onClick={handleSubmit}>add to the list</button>
        </form>
    )
}
export default TextInput