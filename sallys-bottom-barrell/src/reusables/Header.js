import React from 'react'

function Header(props) {

  const renderHeader = () => {

    if (props.user.id !== undefined) {
      return (
        <div className='flex-row header'>
          <div className='third-width'>
            <a href="/"><img className='logo' src="https://s3-media0.fl.yelpcdn.com/bphoto/326l7xWyai89TebCyG0oyA/348s.jpg" /></a>
          </div>
          <div className='third-width justify-center'>
            <a className='header-link' href="/">Home</a>
          </div>
          <div className='third-width justify-right'>
            <a className='header-link' href="/specials">Specials!</a>
          </div>
        </div>
      )
    } else {
      <div className='flex-row header'>
        <div className='third-width'>
          <a href="/"><img className='logo' src="https://s3-media0.fl.yelpcdn.com/bphoto/326l7xWyai89TebCyG0oyA/348s.jpg" /></a>
        </div>
        <div className='third-width justify-center'>
          <a className='header-link' href="/sign-up">Sign Up</a>
          <a className='header-link' href="/">Home</a>
          <a className='header-link' href="/sign-in">Sign In</a>
        </div>
        <div className='third-width justify-right'>
          <a className='header-link' href="/specials">Specials!</a>
        </div>
      </div>
    }

  }

  return (
    renderHeader()
  )
}

export default Header