import React, { useState } from 'react'

function Login(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); //Pass is for Password

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className='auth-form-container'>
            <h2> LOGIN </h2>
            <form className='login-form' onSubmit={handleSubmit}>
                <lable htmlFor="email">Email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                <lable htmlFor="password">password</lable>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"></input>

                <button>Log In</button>
            </form>
            <button className='link-btn' onClick={() => { props.onFormSwitch('Register') }}>If you don't have account, Register Here</button>
        </div>
    )
}

export default Login
