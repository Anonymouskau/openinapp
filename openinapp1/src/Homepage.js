import React from 'react'
import './App.css';
import SignIn from './centerddiv/signIn.js/signIn'
export default function Homepage() {
  return (
    
    <div className="container">
      <div style={{fontFamily:"sans-serif",fontStyle:"bold",alignItems:"center",fontSize:"45px",textAlign:"center",}} className="left-section">
        
       <h4> Board.</h4>
      </div>
      <div className="right-section">
          
          <SignIn/>
        
      
      </div>
    </div>
  )
}
