import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { pageData } from './data/pageData';

function App() {
  return (
    <div className="App">
     <Header pageData={pageData} />
    </div>
  );
}

export default App;
