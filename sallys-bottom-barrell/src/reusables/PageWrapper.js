import React from 'react'
import Header from './Header'

function PageWrapper(props) {
  return (
    <div className='flex-col container'>
      <Header user={props.user} setUser={props.setUser} />
      <div className='flex-row main-content'>
        {props.children}
      </div>
    </div>
  )
}

export default PageWrapper