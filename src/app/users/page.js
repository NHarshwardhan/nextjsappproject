"use client"
import React, { useEffect, useState } from 'react'

export default function Users() {

 const [users , setUsers] = useState()

 const fetchUsers = async ()=>{
    try{
        const response = await fetch(
            'http://localhost:3000/users/api',
             { 
                method:'GET',
             }
            
            )
       const usersData =  await response.json()  
       setUsers(usersData.data)  
        
    } 
    catch(e){

    }   
 }
 useEffect(()=>{
     fetchUsers()

 },[])
  return (
    <div>
      <h1> List Of Users</h1>
      <ul>
          {
             users && users.map((u)=>(
                 <li key={u.id}>{u.name}</li>
             ))
           

          }
      </ul>
    </div>
  )
}
