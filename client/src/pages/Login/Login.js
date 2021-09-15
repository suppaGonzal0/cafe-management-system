import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import './Login.css'

function Login() {
    const history = useHistory();

    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            }else {
                history.push("/");
                console.log(response.data);
            }
        });
    };

    return (
        <div className="card">

            <div className="img"><img src="login.png" alt="" /></div>

            <div className="container">

                <h1 className="title">SIGN IN</h1>

                <div className="input-field">
                    <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                    <input 
                        type="text" placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="icon"></FontAwesomeIcon>
                    <input 
                        type="password" placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                
                <h3 className="alert">{loginStatus}</h3>
                <button className="btn" onClick={login}>LOGIN</button>
                <h3 className="line">Don't have an account yet? <b><a href = "http://localhost:3000/register"> Sign up!</a></b></h3>
            </div>
        </div>
    )
}

export default Login
