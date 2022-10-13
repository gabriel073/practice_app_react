import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import Work from './components/Works/Work';

function App() {
  return (
    <div className="App">
     <Header title={"Esta es mi App en react"}/>
     <Counter />
     <Work/>
    </div>
  );
}

export default App;
