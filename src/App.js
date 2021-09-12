import ExchangeTable from "./components/ExchangeTable";
import React, { useState } from 'react';
import Header from "./components/noteFolder/header"
import NoteList from "./components/noteFolder/NoteList";
import NotePage from "./pages/NotePage";
import NoteDetail from "./pages/NoteDetail";
import notes from "./mockData/notes";
import ReactDOM from 'react-dom'
import { Route, Switch,BrowserRouter as ReactRouter,useHistory } from "react-router-dom";

export const buttonColorContext = React.createContext("blue");

const App = () => {

    const [note,setNote] = useState(notes);
    const [counter,setCounter]= useState(notes[notes.length-1].id);
    let arr;
    let detailedNote;

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
    <div className="App">
     {/*<ExchangeTable></ExchangeTable>*/}
        <Header />
        <ReactRouter>
            <Switch>
                <Route exact path ="/">
                    <buttonColorContext.Provider value="blue">
                        <NotePage notes={note} handleRemove={handleRemove} handleAddItem={handleAddItem} />
                    </buttonColorContext.Provider>

                </Route>
                <Route path ="/notes/:id">
                    <NoteDetail notes={note}/>
                </Route>
            </Switch>
        </ReactRouter>


    </div>
  );
}

export default App;
