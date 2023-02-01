import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import  Boxes  from './components/boxes/Boxes'
import { BoxForm } from './components/boxes/BoxForm'

import './index.css'



function App() {
  return (
    <div className="app">
       <Navbar/>
       <Routes>
        <Route path="/" element={<Boxes/>}/>
        <Route path="/add" element={<BoxForm/>}/>
      </Routes> 
      
    </div>
  )
}

export default App

