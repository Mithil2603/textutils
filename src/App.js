import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the text to analyse below" />
      {/* <About></About> */}
    </>
  );
}

export default App;