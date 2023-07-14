import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Sidebar from './sidebar'
import Dashboard from './dashboard'
import User from './User'
export default function DashboardRoute() {
  return (
    
    
    <Routes>
        <Route path='/dashboard' element={<Dashboard/>} >
        </Route>
        <Route path='/user' element={<User/>} />
          
    </Routes>
    
  )
}
