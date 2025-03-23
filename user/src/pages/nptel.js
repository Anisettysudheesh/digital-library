import React from 'react';
import logo from "../logos/gist.jpeg";
import nptellogo from "../logos/nptellogo.png";
import book from "../logos/e-books.png";
import journal from "../logos/jounals.png";
import logoutlogo from "../logos/logout.png";
import passwordlogo from "../logos/password.png";
import {Link} from "react-router-dom"
import "./nptel.css";
import nptelpagelogo from "../logos/nptel-page-logo.png"
import qplogo from "../logos/qplogo.png"
import nbalogo from "../logos/nbalogo.png"
import naaclogo from "../logos/naaclogo.png"
import nptellinklogo from "../logos/nptel-link-logo.png"
import swayamlinklogo from "../logos/swaym-link-logo.png"


function Nptel() {
    return (
        <div className="nptel-main">
            
           <div className="navbar">
                        <div className="gist-logo-container">
                        <Link to="/UserDashboard"> <img className="nav-img" src={logo} alt="logo" /></Link> 
                        <div className="estd">Estd:2008</div>

                        </div>
                    
                       <div className="navbar-name">
                           <h1>GEETHANJALI INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
                           <h2>(AUTONOMOUS INSTITUTION)</h2>
                           <h6 className="add-nav"> 3<sup>rd</sup>Mile, Nellore-Bombay Highway,Gangavaram(V),Kovur(Md),SPSR Nellore Dt.Andhra Pradesh,India-524137</h6>
           
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
                                        <Link to="/Nptel"> <img src={nptellogo} alt="NPTEL" className="nptel-logo-nav" /></Link>
                                            <span className="tooltip-text-nav">NPTEL Videos</span>
                                        </div>
                                        <div className="logo-container-nav">
                                        <Link to="/E-books"><img src={book} alt="Books" className="book-logo-nav" /></Link> 
                                            <span className="tooltip-text-nav">e-Books</span>
                                        </div>
                                        <div className="logo-container-nav">
                                        <Link to="/E-journals"><img src={journal} alt="Journals" className="journal-logo-nav" /></Link>  
                                            <span className="tooltip-text-nav">e-Journals</span>
                                        </div>
                                        <div className="logo-container-nav">
                                        <p className="qp">Q&P</p>
                                         <Link to="/quepapers"><img src={qplogo} alt="Logout" className="qp-logo-nav" /></Link>  
                                         
                                            <span className="tooltip-text-nav">Question Papers</span>
                                        </div>
                                    </div>
                                    <div className="menu-2-nav">
                                        <div className="logo-container-nav">
                                           <Link to="/changepass"><img src={passwordlogo} alt="Change Password" className="password-logo-nav" /></Link> 
                                            <span className="tooltip-text-nav">Change Password</span>
                                        </div>
                                        <div className="logo-container-nav">
                                         <Link to="/"><img src={logoutlogo} alt="Logout" className="logout-logo-nav" /></Link>  
                                            <span className="tooltip-text-nav">Logout</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                       
                
            <div className="nptel-page-content">
                <div>
                <h1><img src={nptelpagelogo} width="80px" height="50px"  alt=""></img>NPTEL</h1>

                </div>
                <div className="nptel-matter">
                We are providing NPTEL Videos with 4 TB HARD DISC in our institution Through LAN. NPTEL
is an acronym for National Programme on Technology Enhanced Learning which is an initiative by
seven Indian Institutes of Technology (IIT Bombay, Delhi, Guwahati, Kanpur, Kharagpur, Madras
and Roorkee). 
                </div>
                 
                   <div className="btech-branches">
                        <div className='btech-name'>
                      B.Tech:


                        </div>
                         <div className="branches">
                                        <div className="SH-back">
                                                <div className="span">SH</div>
                                    </div> 
                                 <div className="CSE-back">
                                                <div className="span" >CSE</div>
                                     </div>
                                <div className="ECE-back">
                                                    <div className="span" >ECE</div>
                                </div>
                                    <div className="EEE-back">
                                            <div className="span">EEE</div>
                                    </div>
                                    <div className="CIVIL-back">
                                            <div className="span" > CIVIL</div>
                                    </div>
                                    <div className="SH-back">
                                                <div className="span">MECH</div>
                                    </div> 
                                   
                     </div>   
                    
                 
                     </div>
            <div className="btech-branches">
                <div className="btech-name" >
               Diploma:

                </div>
          
                    <div className="branches">
                    <div className="dce-back">
                        <div   className="span" >DCE</div>
                    </div>
                    <div className="dme-back">
                        <div  className="span"  >DME</div>
                    </div>
                    <div className="deee-back">
                        <div  className="span"  > DEEE</div>
                    </div>
                    <div className="dece-back">
                        <div   className="span" >DECE</div>
                    </div>
                    <div className="dcme-back">
                        <div  className="span"  >DCME</div>
                    </div>
                    </div>
            </div>
            <div className="nptel-links-container">
                        <div className='explore-courses'>
                            <div className='explore-matter'>You can explore more cources here </div>
                            <div className='line'> 
                                
                            </div>
                            <div className='arrow-1'></div>
                            <div className='arrow-2'></div>
                        </div>
                        <div className="nptel-link">
                            <a href="https://nptel.ac.in/" target="_blank" rel="noreferrer"><img  src={nptellinklogo}  alt="nptel-logo"></img></a>

                        </div>
                        <div className="swayam-link">
                            <a href="https://swayam.gov.in/" target="_blank" rel="noreferrer"><img src={swayamlinklogo} alt=""></img></a>

                        </div>

            </div>
            
                
               
            </div>
        </div>
    );
}

export default Nptel;