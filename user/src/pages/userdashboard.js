import React,{useState, useContext,useEffect} from 'react';
import logo from "../logos/gist.jpeg";
import nptellogo from "../logos/nptellogo.png";
import book from "../logos/e-books.png";
import journal from "../logos/jounals.png";
import "./dashboard.css";
import logoutlogo from "../logos/logout.png";
import passwordlogo from "../logos/password.png";
import nptelmiddlelogo from "../logos/nptel-middle-logo.png";
import bookmiddlelogo from "../logos/ebooks-middle-logo.png";
import journalmiddlelogo from "../logos/journal-middle-logo.png";
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import {store} from "../App"
import qplogo from "../logos/qplogo.png"
import nbalogo from "../logos/nbalogo.png"
import naaclogo from "../logos/naaclogo.png"   
import qpmiddlelogo from "../logos/qp-middle-logo.png" 

function UserDashboard() {
    const[token]=useContext(store)
    const storedToken = localStorage.getItem('token');
    const navigate = useNavigate();
   


    useEffect(()=>{
        if (!token) {
            alert("please login again")
            navigate('/ ');
        }
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/UserDashboard",{
                headers:{
                    "x-token":token || storedToken
                }
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData()
},[storedToken,navigate]);






    return (
        <div className="dashboard">
            <header className="header">
                         <div className="gist-logo-container-user">
                                       <Link to="/UserDashboard"> <img  src={logo} alt="logo" /></Link> 
                                       <div className="estd-user">Estd:2008</div>
               
                                       </div>
                <div className="header-name-dashboard">
                    <h1>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
                    <h2>(AUTONOMOUS INSTITUTION)</h2>
                    <h6 className="add-dash"> 3<sup>rd</sup>Mile, Nellore-Bombay Highway,Gangavaram(V),Kovur(Md),SPSR Nellore Dt.Andhra Pradesh,India-524137</h6>
                </div>
                 <div className="logos-user"> 
                        <img className='nba-logo-user' style={{width:"40px",height:"40px",marginLeft:"5px"}} src={nbalogo} alt="nba"></img>
                         <img className='naac-logo-user' style={{width:"50px",height:"40px",marginBottom:"4.2px"}} src={naaclogo} alt="naac"></img>
                
                     </div>
                
            </header>
            <div className="sidebar">
                <div className="sidebar-menu">
                    <div className="menu-1">
                        <div className="logo-container">
                          <Link to="/Nptel"> <img src={nptellogo} alt="NPTEL" className="nptel-logo" /></Link> 
                            <span className="tooltip-text">NPTEL Videos</span>
                        </div>
                        <div className="logo-container">
                          <Link to="/E-books"><img src={book} alt="Books" className="book-logo" /></Link>  
                            <span className="tooltip-text">e-Books</span>
                        </div>
                        <div className="logo-container">
                          <Link to="/E-journals"><img src={journal} alt="Journals" className="journal-logo" /></Link>  
                            <span className="tooltip-text">e-Journals</span>
                        </div>
                        <div className="logo-container">
                                   <p className="qp">Q&P</p>
                         <Link to="/quepapers"><img src={qplogo} alt="Logout" className="qp-logo" /></Link>  
                                                                 
                             <span className="tooltip-text">Question Papers</span>
                                    </div>
                    </div>
                    <div className="menu-2">
                        <div className="logo-container">
                          <Link to="/changepass"><img src={passwordlogo} alt="Change Password" className="password-logo-nav" /></Link> 
                            <span className="tooltip-text">Change Password</span>
                        </div>
                        <div className="logo-container">
                            <Link to="/"><img src={logoutlogo} alt="Logout" className="logout-logo-nav" /></Link>  
                            <span className="tooltip-text">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-content-container">
                <div className="middle-content-1">
                    WELCOME TO DIGITAL LIBRARY

                </div>
                <div className="middle-content-2">
                <b style={{fontSize:"1.3rem"}}>Digital Library</b> is also provided for the continuous updating of recent techniques.
Internet facility is available for Staff & Students Online access to the e-resource of the Digital
Library like <b>J-Gate e-journals, DELNET, N-List</b> and <b>Knimbus e-journals.</b> These e-resources can be
access in remotely i.e anywhere in campus or off campus and also providing NPTEL subject wise
video lectures.

                </div>


                <div className="middle-content-3">
                    
                <div className="nptel-content">
                  <Link to="/nptel"><img src={nptelmiddlelogo} className="nptel-middle-logo" alt="NPTEL" /></Link>  
                </div>
                <div className="ebook-content">
                   <Link to="/e-books"><img src={bookmiddlelogo} className="ebook-middle-logo" alt="Books" /></Link> 
                </div>
                <div className="journal-content">
                   <Link to="/e-journals"><img src={journalmiddlelogo} className="journal-middle-logo" alt="Journals" /></Link> 
                </div>
                <div className="journal-content">
                   <Link to="/quepapers"><img src={qpmiddlelogo} className="journal-middle-logo" alt="question-papers" /></Link> 
                </div>

                </div>

            </div>
        </div>
    );
}

export default UserDashboard;