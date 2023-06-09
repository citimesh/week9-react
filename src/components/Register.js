import React from 'react'
import { useState } from 'react'
import { registerUser } from "../utils"

const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        await registerUser(username, email, password)
    }     

    return (
        <>
            <h2>Register New Account</h2>
            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(e) => setUsername(e.target.value) } required />
                </label>
                <br/>
                <label>Email:
                    <input onChange={(e) => setEmail(e.target.value) } required />
                </label>
                <br/>
                <label>Password:
                    <input type="password" onChange={(e) => setPassword(e.target.value) } required />
                </label>
                <br/>
                <button type='submit'>Click here to create an account</button>
            </form>
        </>
    )

}
export default Register