import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/home';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/home" className="item">Equal Learning</Link>
            <Link to="/" className="item">Streamer</Link>

            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header;