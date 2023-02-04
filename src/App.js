import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { pageData, navData } from './data/pageData';

function App() {
  return (
    <div className="App">
     <Header pageData={pageData} navData={navData} />
    </div>
  );
}

export default App;
