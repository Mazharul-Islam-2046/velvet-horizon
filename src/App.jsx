
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shared Components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
