import React from 'react'
import Header from '../reusables/Header'

function Home(props) {
  return (
    <div className='flex-col container'>
      <Header />
      <div className='flex-row main-content'><h1>Welcome to Sally's Bottom Barrell!!! {props.user.email}</h1></div>
    </div>
  )
}

export default Home