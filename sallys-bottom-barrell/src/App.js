import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp user={user} setUser={setUser} />} />
    </Routes>
  )
}

export default App