import React, { useState } from 'react'

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState(''); //Pass is for Password

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div className='auth-form-container'>
            <h2>SIGN UP</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <lable htmlFor="name">Name</lable>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name" name="name"></input>

                <lable htmlFor="email">Email</lable>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>

                <lable htmlFor="password">password</lable>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"></input>

                <button>Register</button>
            </form>
            <button className= 'link-btn' onClick={() => {props.onFormSwitch('Login')}}>If you already have one account, Login Here</button>
        </div>
    )
}

export default Register
