import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard  from './components/dashboard'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Home} />
                    <Route path="/login" component={ Login } />
                    <Route path="/signup" component={ Signup } />
                    <Route path="/Home" component={ Dashboard } />
                </Switch>
            </div>
        </Router>
    )
}

