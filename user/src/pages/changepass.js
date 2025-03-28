import React, { useState, useContext } from 'react';
import logo from "../logos/gist.jpeg";
import nptellogo from "../logos/nptellogo.png";
import book from "../logos/e-books.png";
import journal from "../logos/jounals.png";
import logoutlogo from "../logos/logout.png";
import passwordlogo from "../logos/password.png";
import { Link } from "react-router-dom";
import "./changepass.css";
import axios from "axios";
import { store } from "../App";
import qplogo from "../logos/qplogo.png";
import nbalogo from "../logos/nbalogo.png"
import naaclogo from "../logos/naaclogo.png"

function Changepass() {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [token] = useContext(store);
    const storedToken = localStorage.getItem('token');

    const Submit = async (e) => {
        e.preventDefault();

        if (newpass !== confirmpass) {
            alert("New password and confirm password do not match");
            return;
        }
        if (!oldpass || !newpass) {
            alert("Both old and new passwords are required");
            return;
        }

        const Data = { oldpass, newpass };

        try {
            const SendData = await axios.post("http://localhost:5000/changepass", Data, {
                headers: {
                    "x-token": token || storedToken
                }
            });
            console.log(SendData);
            alert(SendData.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="changepass-main">
            <div className="navbar">
              <div className="gist-logo-container">
                                      <Link to="/UserDashboard"> <img className="nav-img" src={logo} alt="logo" /></Link> 
                                      <div className="estd">Estd:2008</div>
              
                                      </div>
                <div className="navbar-name">
                    <h1>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
                    <h2>(AUTONOMOUS INSTITUTION)</h2>
                    <h6 className="add-nav">3<sup>rd</sup> Mile, Nellore-Bombay Highway, Gangavaram(V), Kovur(Md), SPSR Nellore Dt. Andhra Pradesh, India-524137</h6>
                </div>
                <div className="logos"> 
                                                              <img className='nba-logo' src={nbalogo} alt="nba"></img>
                                                              <img className='naac-logo' src={naaclogo} alt="naac"></img>
                                       
                                                              </div>
            </div>
            <div className="sidebar-nav">
                <div className="sidebar-menu-nav">
                    <div className="menu-1-nav">
                        <div className="logo-container-nav">
                            <Link to="/Nptel">
                                <img src={nptellogo} alt="NPTEL" className="nptel-logo" />
                            </Link>
                            <span className="tooltip-text-nav">NPTEL Videos</span>
                        </div>
                        <div className="logo-container-nav">
                            <Link to="/E-books">
                                <img src={book} alt="Books" className="book-logo" />
                            </Link>
                            <span className="tooltip-text-nav">e-Books</span>
                        </div>
                        <div className="logo-container-nav">
                            <Link to="/E-journals">
                                <img src={journal} alt="Journals" className="journal-logo" />
                            </Link>
                            <span className="tooltip-text-nav">e-Journals</span>
                        </div>
                        <div className="logo-container-nav">
                            <p className="qp">Q&P</p>
                            <Link to="/quepapers">
                                <img src={qplogo} alt="Question Papers" className="qp-logo-nav" />
                            </Link>
                            <span className="tooltip-text-nav">Question Papers</span>
                        </div>
                    </div>
                    <div className="menu-2-nav">
                        <div className="logo-container-nav">
                            <Link to="/changepass">
                                <img src={passwordlogo} alt="Change Password" className="password-logo-nav" />
                            </Link>
                            <span className="tooltip-text-nav">Change Password</span>
                        </div>
                        <div className="logo-container-nav">
                            <Link to="/">
                                <img src={logoutlogo} alt="Logout" className="logout-logo-nav" />
                            </Link>
                            <span className="tooltip-text-nav">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="changepass-content">
                <form className="changepass-form" onSubmit={Submit}>
                    <h1>Change Password</h1>
                    <span><b style={{ color: "red", fontSize: "0.9rem" }}>Note:</b> Your new password and old password must be unique</span>
                    <div className="changepass-input">
                        <label className="oldpass">Old Password</label>
                        <input
                            placeholder="Enter your old password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setOldpass(e.target.value)}
                        />
                    </div>
                    <div className="changepass-input">
                        <label className="newpass">New Password</label>
                        <input
                            placeholder="Enter your new password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setNewpass(e.target.value)}
                        />
                    </div>
                    <div className="changepass-input">
                        <label className="confirmpass">Confirm Password</label>
                        <input
                            placeholder="Re-type new password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setConfirmpass(e.target.value)}
                        />
                    </div>
                    <div className="show-pass-container">
                        <div><input
                         className="show-pass-check"
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        /></div>
                         <div className="show-pass">Show Password</div>
                       
                    </div>
                    <div className="changepass-button-back">
                        <button className="changepass-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Changepass;