import React from 'react'
import './sidebar.css'
import  {FiPieChart} from 'react-icons/fi'
import{BsBookmarkDash} from 'react-icons/bs'
import{TbCalendarTime} from 'react-icons/tb'
import {BiUserCircle} from  'react-icons/bi'
import{IoMdSettings} from 'react-icons/io'
import { useNavigate } from 'react-router'
export default function Sidebar() {
    const navigate=useNavigate()
  return (
    <div className='sidebar'><h1 style={{textAlign:"center"}}>Board.</h1>
    <br></br>
    <ul >
     <li onClick={()=>{
        navigate("/dashboardroute/dashboard")
     }}><FiPieChart color='white'/> &nbsp;&nbsp;Dashboard</li><br/>
     <li onClick={()=>{
        navigate("/dashboardroute/transaction")
     }}><BsBookmarkDash color='white'/>&nbsp;&nbsp; Transaction</li><br/>
     <li><TbCalendarTime color='white'/>&nbsp;&nbsp;&nbsp;&nbsp;Schedules</li><br/>
     <li onClick={()=>{
      navigate("/dashboardroute/user")
     }}><BiUserCircle color='white'/>&nbsp;&nbsp;&nbsp;&nbsp;Users&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li><br/>
     <li><IoMdSettings color='white'/>&nbsp;&nbsp;&nbsp;Settings &nbsp;&nbsp;&nbsp;&nbsp;</li><br/>

    </ul>
    <div className="sidebar-bottom">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}
