import React from 'react';
import './App.css';

import SignIn from './centerddiv/signIn.js/signIn'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Homepage from './Homepage';
import DashboardRoute from './Dasboard/dashboardroute';
const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/dashboardroute/*' element={<DashboardRoute/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
