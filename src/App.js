import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
// import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type)=>{

      setAlert({
        message: msg,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("LightMode has been enabled", "success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      showAlert("DarkMode has been enabled", "success");
    }
  }

  const toggleBlueMood = () =>{
    setMode('primary');
      document.body.style.backgroundColor = 'blue';
      document.body.style.color = 'white';
      showAlert("BlueMood has been enabled", "success");
    

  }
  const toggleGreenMood = () =>{
    setMode('success');
      document.body.style.backgroundColor = 'green';
      document.body.style.color = 'white';
      showAlert("GreenMood has been enabled", "success");
    

  }
  return (
    <>
      {/* <Router> */}
          <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} toggleBlueMood={toggleBlueMood} toggleGreenMood={toggleGreenMood}/>
          <Alert alert={alert}/>
          <div className="container">
          <TextForm heading="Enter the text to analyze..." mode={mode} showAlert={showAlert}/>

            {/* <Routes> */}

              {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze..." mode={mode} showAlert={showAlert}/>} /> */}
              {/* <Route exact path="/about" element={<About />} /> */}
                
            {/* </Routes> */}
              
          </div>
      {/* </Router> */}

    </>
  );
}

export default App;
