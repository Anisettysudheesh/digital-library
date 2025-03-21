import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


import Nptel from "./pages/nptel"
import UserLogin from "./forms/userLogin";

import UserDashboard from './pages/userdashboard';

import {jwtDecode} from "jwt-decode";
import Ebooks from './pages/ebooks';
import Ejournals from './pages/ejournals';
import Changepass from './pages/changepass';
import Quepapers from './pages/quepapers';

export const store = createContext();

function App() {
  return (
    <store.Provider value={useToken()}>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </store.Provider>
  );
}

function useToken() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
     else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return [token, setToken];
}

function MainContent() {
  const navigate = useNavigate();
  
  const [token, setToken] = useToken();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        // Token is expired
        setToken(null);
        localStorage.removeItem('token');
        navigate('/');
      }
    }
    
  }, [token, navigate, setToken])


  return (
 
  <div className="app-grid">

  <div className="main-content">
    <Routes>
     
      <Route path="/" element={<UserLogin />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
      <Route path="/Nptel" element={<Nptel />} />
      <Route path="/e-books" element={<Ebooks/>}/>
      <Route path="/e-journals" element={<Ejournals/>}/>
      <Route path="/Changepass" element={<Changepass/>}/>
      <Route path="/quepapers" element={<Quepapers/>}   />
    
    </Routes>
  </div>
</div>
  );
}

export default App; 

