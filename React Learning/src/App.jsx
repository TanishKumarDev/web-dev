import React from 'react';
import './App.css';
import TextToggler from './components/TextToggler/TextToggler';
import ThemeChangerProject from './components/ThemeChangerProject/ThemeChangerProject';
import CounterApp from './components/CounterApp/CounterApp';

function App() {
  return (
    <div className="App">
      <div>
      <TextToggler />
      <ThemeChangerProject />
      <CounterApp />
      </div>
    </div>
  );
}

export default App;
