import React from 'react'
import Header from '../reusables/Header'

function Home(props) {
  return (
        <h1>
          Welcome to Sally's Bottom Barrell!!! {props.user.email}
        </h1>
  )
}

export default Home