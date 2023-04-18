import React from 'react'

function Header() {
  return (
    <div className='flex-row header'>
        <div className='third-width'>
          <a href="/"><img className='logo' src="https://s3-media0.fl.yelpcdn.com/bphoto/326l7xWyai89TebCyG0oyA/348s.jpg" /></a>
        </div>
        <div className='third-width justify-center'>
          <a className='header-link' href="/sign-up">Sign Up</a>
          <a className='header-link' href="/sign-in">Sign In</a>
        </div>
        <div className='third-width justify-right'>
          <a className='header-link' href="/specials">Specials!</a>
        </div>
      </div>
  )
}

export default Header