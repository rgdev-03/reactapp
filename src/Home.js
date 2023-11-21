import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'



export default function Home() {
    return (
        <div className="container1">
           <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
        <p>
        <Link to="/login">
            <button className="goto-btn">log in</button>
                </Link>
        <Link to="/signup">
            <button className="goto-btn1" id="reg_btn"><span>register </span></button>
        </Link>
        </p>
        <p>
      
        </p>
</div>
    )
}
