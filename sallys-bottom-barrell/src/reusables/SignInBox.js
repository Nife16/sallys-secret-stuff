import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router';

function SignInBox(props) {

    const navigator = useNavigate()

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...props.user };
        tempUser[name] = value;
        props.setUser(tempUser)
    }

    const submitHandler = () => {
        axios.post("http://localhost:8080/user/signIn", props.user)
        .then((response) => {
            localStorage.setItem("emailCookie", response.data.email)
            props.setUser(response.data)
            navigator("/")
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className='sign-up-box flex-col'>
            <h1 className='h1'>Sign In to Sally's Bottom Barrell!!!</h1>
            <div className='flex-row'>
                <div className='form-input-container'>
                    <div>Email</div>
                    <input name="email" type="email" value={props.user.email} className='form-input' onChange={changeHandler} />
                </div>
                <div className='form-input-container'>
                    <div>Password</div>
                    <input name="password" type="password" value={props.user.password} className='form-input' onChange={changeHandler} />
                </div>
            </div>
            <button class="button-53" role="button" onClick={submitHandler} >Submit!!</button>
        </div>
    )
}

export default SignInBox