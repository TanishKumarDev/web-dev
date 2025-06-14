import React from 'react';
import './App.css';
import TextToggler from './components/TextToggler/TextToggler';
import ThemeChangerProject from './components/ThemeChangerProject/ThemeChangerProject';

function App() {
  return (
    <div className="App">
      <div>
      <TextToggler />
      <ThemeChangerProject />
      </div>
    </div>
  );
}

export default App;
