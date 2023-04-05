import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { useState } from 'react';
import { Home } from './components/Home';
import { Jobs } from './components/Jobs';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { JOBS } from './utils/constants';

import "../src/styles/home.css"



function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogin = (username, password) => {

    fetch('http://localhost:8000/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      })
    }).then((response) => {
      if(response.ok) {
        alert("User is registered! Login Successful!")
        setIsLogIn(true)
      } else {
        alert("User not found!")
      }
    })
    
  }
  return (
    <Router>
      {isLogIn &&
      <nav className='navigator'>
          <Link to="/home" className='options'>Home</Link>
          <Link to="/about" className='options'>About</Link>
          <Link to="/contact" className='options'>Contact Us</Link>
          <Link to="/jobs" className='options'>Jobs</Link>
      </nav>
      }
      
      <Routes>
      {!isLogIn && <Route path='/' element={<Login handleChange= {handleLogin} />}></Route>}
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/jobs" element={<Jobs jobs={JOBS}/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
