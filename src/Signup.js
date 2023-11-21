import React from 'react'
import { Link } from 'react-router-dom'



export default function Signup() {

    return (
        <div className="container">
            <h2>Sign up </h2>
        <form action="/home">
            <p>
                <label>Username</label><br/>
                <input type="text" name="first_name" required />
            </p>
            <p>
            <label>Email address</label><br/>
            <input type="email" name="email" required />
            </p>
            <p>
            <label>Password</label><br/>
            <input type="password" name="password" requiredc />
            </p>
            <p>
                <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
            </p>
            <p>
                <button id="sub_btn" type="submit">Signup</button>
            </p>
            <p><Link to="/">Back to Homepage</Link>.</p>
        </form>
    </div>
    )

}