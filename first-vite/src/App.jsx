import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Project from './components/Project';
import Header from './components/Header';

function App() {

  return (
    <div className='App'>
      <Header />
      <Project />
    </div>
  );
}

export default App;
