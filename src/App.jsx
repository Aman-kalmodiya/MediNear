import React from 'react'
import Ui from './Ui'
import Navbar from './Navbar'
import bgImage from './assets/image.png';
import Login from './pages/Login/Login';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';

function App() {
  const mainContainerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', 
    minHeight: '100vh', 
     width: '100%'
  }; 
  return (
    <div style={mainContainerStyle}>      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* <Login/>
      
      <Ui/> */}
    </div>
  )
}

export default App
