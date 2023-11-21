import React from "react";
import './dash.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Dashboard(){
    return(
        <div>
            <div>
            <header >
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div>
                <Link to="/">
                    <button className="logout-btn">log out</button>
                </Link>
                </div>
                 
            </header>

    <nav>
        <a href="#">Home</a>
        <a href="#">Dashboard</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
    </nav>

    <main>
        <h2>Main Content</h2>
        <p>This is the main content of your dashboard.</p>
    </main>
            </div>
        </div>
    )

}