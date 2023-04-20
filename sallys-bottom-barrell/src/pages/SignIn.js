import React from 'react'
import Header from '../reusables/Header'
import SignUpBox from '../reusables/SignUpBox'
import SignInBox from '../reusables/SignInBox'

function SignIn(props) {
    return (
        <SignInBox user={props.user} setUser={props.setUser} />

    )
}

export default SignIn