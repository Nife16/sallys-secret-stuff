import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './reusables/Header'
import PageWrapper from './reusables/PageWrapper'
import Specials from './pages/Specials'
import Cart from './pages/Cart'

function App() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [updateUser, setUpdateUser] = useState({})



  useEffect(() => {
    
    const email = localStorage.getItem("emailCookie")

    axios.get(`http://localhost:8080/user/findUserByEmail/${email}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((e) => {
        console.log(e)
      })

  }, [updateUser])

  return (
    <PageWrapper 
      user={user}
      setUser={setUser}
    >
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/sign-up" element={<SignUp user={user} setUser={setUser} />} />
        <Route path="/specials" element={<Specials user={user} setUser={setUser} setUpdateUser={setUpdateUser} />} />
        <Route path="/cart" element={<Cart user={user} setUser={setUser} setUpdateUser={setUpdateUser} />} />
      </Routes>
    </PageWrapper>
  )
}

export default App