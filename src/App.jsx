import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Tours from './Components/Tours'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
