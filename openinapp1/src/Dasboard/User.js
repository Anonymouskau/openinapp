import axios from 'axios'
import React, { useEffect } from 'react'
import Sidebar from './sidebar'

export default function () {
    var data=[]
    const api=()=>{
        axios.get("https://reqres.in/api/users/").then((res)=>{
         console.log(res.data);   
        data.push(res.data)
        }).catch((err)=>{
           
            console.log(err);


        })
    }
    useEffect(()=>{

        api()
    })
  return (
    <>
    <Sidebar></Sidebar>
    <table border={1} style={{justifyContent:"center",marginLeft:"auto",marginRight:"auto",marginTop:"100px"}}>
    <tr>
                <th>Email</th>
                <th>Id</th>
                <th>FirstName</th>
                <th>Images</th>
                
            </tr>
            <tr>
    {data.map((user)=>{
        return(
               <tbody>
                <th>{user.email}</th>
                <th>{user.id}</th>
                <th>{user.first_name}</th>
                <th></th>
            </tbody>
            
        
    )})}
    </tr>
    </table>
    </>
  )
}
