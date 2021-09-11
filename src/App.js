import ExchangeTable from "./components/ExchangeTable";
import React, { useState } from 'react';
import Header from "./components/noteFolder/header"
import NoteList from "./components/noteFolder/NoteList";
import NotePage from "./pages/NotePage";
const App = () => {

  return (
    <div className="App">
     {/*<ExchangeTable></ExchangeTable>*/}
        <Header />
        <NotePage/>
    </div>
  );
}

export default App;
