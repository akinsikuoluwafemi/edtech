import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import Home from './home';
import signup from './signup';
import login from './login';
import Tab from '../Tab';
import Selection from './naturalselection';

// import jwtDecode from 'jwt-decode';

// let authenticated;

// const token = localStorage.FBIdToken;
// if(token) {
//     const decodedToken = jwtDecode(token)
//     if(decodedToken.exp * 1000 < Date.now()){
//         window.location.href = '/login'
//         authenticated = false;
//     } else {
//         authenticated = true;
//     }
// }




 class Navbar extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={signup} />
                    <Route exact path="/login" component={login} />

                    <Route exact path="/Tab" component={Tab} />
                    <Route exact path="/naturalselection" component={Selection} />


                </Switch>       
            </Router>
        )
    }
}

export default Navbar;