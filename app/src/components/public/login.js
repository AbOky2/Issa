import React from "react";
import './login.css'
import { socialAuth } from '../../services/authService'
import { getData } from '../../services/adminService'

const Login = () => (
    <div>
        <a href='http://localhost:3001/auth/google'>
            <div className="google-btn" >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </a>
        <p onClick={getData}>Test</p>
        <p onClick={() => socialAuth('google')}>toto</p>
    </div>
)
export default Login