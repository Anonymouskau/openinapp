import React from "react";
import "./dashboard.css";
import Sidebar from "./sidebar";

import { PiUsers } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import {GrCurrency}from 'react-icons/gr'
import { BsBookmarkDash } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import CenteredDiv from "./React_googlechart";
import {Piechart} from './piechart'
export default function Dashboard() {
  return (
    <>
      <Sidebar/>
      <div className="cont1">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
        <h2 style={{alignItems:"start",fontFamily:"sans-serif","fontWeight":"bold"}}>Dasboard</h2>
        <div style={{ justifyContent: "center" }}>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
           <input
            style={{
              borderRadius: "10px",
              border: "None",
              width: "175px",
              height: "25px",
            }}
            placeholder={" Search...                        🔍"}
          ></input>
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          
          &nbsp;&nbsp;
        <FaRegBell style={{alignItems:"center",justifyContent:"center"}} size={"20px"}/>
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        &nbsp;&nbsp;
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&usqp=CAU" alt="Avatar" class="avatar"/> 
        </div>
      </div>
      <div className="grid-container">
        <div style={{ backgroundColor: "#c1fad0" }} className="grid-item">
         
         <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <GrCurrency style={{justifyContent:"center"}} size={'35px'}>
          </GrCurrency><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Total Revenues
          <h3 style={{textAlign:"center",fontSize:"20px"}}>$2,129,430</h3> 

            
          
        </div>
        <div style={{ backgroundColor: "#fdf1cb" }} className="grid-item">

        <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <BsBookmarkDash style={{justifyContent:"center"}} size={'35px'}>
          </BsBookmarkDash><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Total Transactions
          <h3 style={{textAlign:"center",fontSize:"20px"}}>1,520</h3> 

         


        </div>
        
        <div style={{ backgroundColor: "#FFD0CF" }} className="grid-item">
        <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <FiThumbsUp style={{justifyContent:"center"}} size={'35px'}>
          </FiThumbsUp><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Total Likes
          <h3 style={{textAlign:"center",fontSize:"20px"}}>9,721</h3> 

         
        </div>
        <div style={{ backgroundColor: "#CCCCFF" }} className="grid-item">
        <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
          <PiUsers style={{justifyContent:"center"}} size={'35px'}>
          </PiUsers><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Total Users
          <h3 style={{textAlign:"center",fontSize:"20px"}}>892</h3> 

         
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <CenteredDiv/>
      <br/>
      <br/><br/>
      <div  style={{alignContent:"end"}}> <Piechart />
      

      </div>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <div className="rightbottomdiv">
        
        <div className="centered-div" style={{width:"28%" ,height:"250px",marginTop:"-265px",justifyContent:"left"}}>
        <span><h3 style={{fontFamily:"sans-serif" ,textAlign:"left",alignItems:"left",}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today's schedule</h3>
           <div style={{borderLeftStyle:"solid",borderLeftColor:"lightgreen",color:"grey",marginLeft:"30px" ,width:"150%" ,height:"35%"}}>
              
              <h3 >Metting with suppliers from Kuta Bali</h3>
               <h6 style={{fontWeight:"lighter"}}>14:00-15:00<br/>at sunset Road,Kuta, Bali</h6>

           </div>
           
           <div style={{borderLeftStyle:"solid",borderLeftColor:"lightblue",color:"grey",marginLeft:"30px" ,width:"150%" ,height:"35%"}}>
              <h3 >Check operation at Giga Factory 1</h3>
               <h6 style={{fontWeight:"lighter"}}>18:00-20:00<br/>at Central Jakarta</h6>

           </div>
           </span>
        </div>
              
      </div>
      
    </>
  );
}
