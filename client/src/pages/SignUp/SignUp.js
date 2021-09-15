import React, { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser ,faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import './SignUp.css'

function SignUp() {

    const history = useHistory();

    const [signUpStatus, setSignUpStatus] = useState('');

    const [usernameReg, setUsernameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            if (response.data.message) {
                setSignUpStatus(response.data.message);
            }else {
                history.push("/login");
                console.log(response.data);
            }
        });
    };

    return (
        <div className="card">

            <div className="img"><img src="Khawa.png" alt="" /></div>

            <div className="container">

                <h1 className="title">Create a new account</h1>
                
                <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="icon"></FontAwesomeIcon>
                    <input 
                        type="text" placeholder="Username"
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}

                    />
                </div>

                <div className="input-field">
                    <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                    <input 
                        type="text" placeholder="Email"
                        onChange={(e) => {
                            setEmailReg(e.target.value);
                        }}
                    />
                </div>

                <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="icon"></FontAwesomeIcon>
                    <input 
                        type="password" placeholder="Password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                    />
                </div>
                
                <h3 className="alert">{signUpStatus}</h3>
                <button className="btn" onClick={register}>SIGN UP</button>
                <h3 className="line">Already have an account? <b><a href = "http://localhost:3000/login"> Sign in!</a></b></h3>
            </div>
        </div>
    )
}

export default SignUp
