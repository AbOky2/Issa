import React from "react";
import { getCurrentUser } from '../../services/authService'
import { getData } from '../../services/adminService'
import { studentGetData } from '../../services/studentService'
import { setToken, getToken } from '../../utils/storage'

class Login extends React.Component {
    componentWillMount() {
        const { search } = window.location;
        let token = null

        if (search.includes('?token=') && (token = search.slice(7))) {
            setToken(token);
            console.log(getToken())
        }
    }
    render() {
        return (
            <div>
                <a href='http://localhost:3001/auth/google'>
                    <div className="google-btn" >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        </div>
                        <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </a>
                <p onClick={() => getCurrentUser(user => {

                    console.log(user)
                })}>Current user Test</p>
                <p onClick={() => studentGetData(user => {

                    console.log(user)
                })}>Student Test</p>
                <p onClick={() => getData(data => {

                    console.log(data)
                })}>Admin Test</p>
            </div>
        )
    }
}
export default Login