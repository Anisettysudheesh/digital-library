import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { store } from "../App";
import axios from "axios";
import logo from "../logos/gist.jpeg";
import "./login.css";
import userlogo from "../logos/account_circle_28dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
import dlogo from "../logos/DLlogo.jpg";
import {jwtDecode} from 'jwt-decode';

function UserLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [token, setToken] = useContext(store);

    const Submit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!username || !password) {
            setError("All fields are mandatory");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            setLoading(false);
            return;
        }

        const Data = {
            username: username,
            password: password
        };

        try {
            const sendData= await axios.post("http://localhost:5000/UserLogin", Data);
            const receivedToken = sendData.data.token;
            setToken(receivedToken);
            const decodedToken = jwtDecode(receivedToken)
            localStorage.setItem('token', receivedToken);
          
            if(token){
                navigate("/UserDashboard");

            }
           
        } catch (error) {
            setError("Invalid email or password");
            alert(error.response.data)
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <header>
                <img src={logo} alt="logo" />
                <div className="header-name">
                    <h1>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
                    <h2>(AUTONOMOUS INSTITUTION)</h2>
                    <h6 className="add"> 3<sup>rd</sup>Mile, Nellore-Bombay Highway,Gangavaram(V),Kovur(Md),SPSR Nellore Dt.Andhra Pradesh,India-524137</h6>
                </div>
            </header>
            <h5>LIBRARY AND INFORMATION CENTER</h5>
            <img className="dl-logo" src={dlogo} alt="Digital Library Logo" />
            <span className="digilib">DIGITAL LIBRARY</span>
            <center>

                {loading ? ( <div className="spinner"></div>):(
                    <form onSubmit={Submit}>
                    <div className='userback'>
                        <img src={userlogo} className="userlogo" alt="user logo" />
                        <h3>User Login</h3>
                    </div>
                    <p><b style={{ color: "red" }}>Note:</b> Username and password is your University roll number like (eg:222U1A3301)</p>
                    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                    <label>
                        <span className='username'>Username</span>
                        <input className="input1" type="text" name="username" placeholder='Enter your username' autoComplete='true' required onChange={(e) => { setUsername(e.target.value) }} />
                    </label>
                    <label>
                        <span className='password'>Password</span>
                        <input className="input2" type={showPassword ? "text" : "password"} name="password" placeholder='Enter your password' required onChange={(e) => { setPassword(e.target.value) }} />
                    </label>
                    <input type="checkbox" name="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    <span>Show Password</span>
                    <h6 className="change-pass">You can change your password in profile settings</h6>
                    <button type="submit" className='submit' disabled={loading}>
                        Login
                    </button>
                </form>
                )}
                
            </center>
        </div>
    );
}

export default UserLogin;