import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';
import './logo.svg';

export default function Login() {
    return (
        <div className="container">
            <h2>Sign in </h2>
        <form action="/home">
            <p>
                <label>Username or email address</label><br/>
                <input type="text" name="first_name" required />
            </p>
            <p>
                <label>Password</label>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <br/>
                <input type="password" name="password" required />
            </p>
            <p>
                <button id="sub_btn" type="submit">Login</button>
            </p>
            <p>First time? <Link to="/signup">Create an account</Link>.</p>
            <p><Link to="/">Back to Homepage</Link></p>
        </form>
    </div>
    )
}
