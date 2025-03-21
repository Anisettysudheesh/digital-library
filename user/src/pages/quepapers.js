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


function Quepapers() {
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
            <h1>Question Papers</h1>
            <div className="btech-branches">
                <div className='btech-name'>
                               B.Tech:  

                </div>
                <div className="branches">
                              <div className="SH-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1ilIJ8mBelmaJ4l_1FHPkT4CvLCT2BmtL" ><div className='span'>S&H</div></a>
                                </div>
                            <div className="CSE-back">
                            <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1HrKsyLaoL_JrUyoazeFcBOenyypA9zU_" >
                            <div className='span'>CSE</div></a>
                                    
                                </div>
                                <div className="ECE-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1_vMs9uxcnJuOn0DN1CNymAWpkKwbo9wY" ><div className='span'>ECE</div></a>
                                </div>
                                <div className="EEE-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1WHq1ENV3TOBVD4bF8kdDFtWWIp929bu1" ><div className='span'>EEE</div></a>
                                </div>
                                <div className="CIVIL-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1FZEi9w35VBX_pyIgugWkwSHYp65LGFoL" ><div className='span'>CIVIL</div></a>
                                </div>
                                <div className="SH-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/15iWiT1VlosRtjzkebXX3FoMBDv1h2SpQ" ><div className='span'>MECH</div></a>
                                </div>
                    </div>

          
                        
            </div>
            <div className="btech-branches">
                <div className='btech-name'> 
                           Diplamo:

                </div>
                <div className="branches">
                    
                            <div className="dce-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1r9TvdVz0O8haPY4MsuLiG6LxeaiJQ_FG" ><div className='span'>DCE</div></a>
                                </div>
                                <div className="dme-back">
                                <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1DtgxGGSrKhqaDSItY_eFIYuvhZv_D2lx" ><div className='span'>DME</div></a>
                                </div>
                                <div className="deee-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1NW_xk5mokFpAJnH6r7aZghc4PYc5uWl_" ><div className='span'>DEEE</div></a>
                                </div>
                                <div className="dece-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1xCn_fSPLq4GMb7Hw9jbr0b5iioTbkRT1" ><div className='span'>DECE</div></a>
                                </div>
                                <div className="dcme-back">
                                    <a style={{ textDecoration:"none"}}href="https://drive.google.com/drive/folders/1ra7wTaOTLtDrdNYkyyI0poLypwxJGT2j" ><div className='span'>DCME</div></a>
                                </div>

                </div>

            
            </div>
                
                    
               
            </div>
        </div>
    );
}

export default Quepapers;