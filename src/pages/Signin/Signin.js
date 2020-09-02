import React from 'react';
import {Link} from 'react-router-dom';
import './Signin.css';

export default function Signin() {
    return (
        <div className="signin container">
            <Link className="signin__link" to='/browse'>Sign in</Link>
        </div>
    )
}
