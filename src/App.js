import ExchangeTable from "./components/ExchangeTable";
import React, { useState } from 'react';
import Header from "./components/noteFolder/header"
import NoteList from "./components/noteFolder/NoteList";
const App = () => {

  return (
    <div className="App">
     {/*<ExchangeTable></ExchangeTable>*/}
        <Header />
        <NoteList/>
    </div>
  );
}

export default App;
