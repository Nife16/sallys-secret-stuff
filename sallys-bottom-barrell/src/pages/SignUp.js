import React from 'react'
import Header from '../reusables/Header'
import "../css/sign-up.css"
import SignUpBox from '../reusables/SignUpBox'

function SignUp(props) {

    return (
        <SignUpBox user={props.user} setUser={props.setUser} />
    )
}

export default SignUp