import React, { useState } from 'react'
import { data } from '../db'
import Table from './Table'
import "./dashboard.css"

function Dashboard() {
  const [query,setQuery]=useState("")
  const search =(data)=>{
    return data.filter((item)=>item.name.toLowerCase().includes(query)||item.email.toLowerCase().includes(query))
  }
  return (
   <>
   <h2 className='title'>Users</h2>
      <input type="text" className='search' placeholder='search... ' onChange={(e)=>setQuery(e.target.value)}></input>
    <Table data={search(data)}/>
   </>
  )
}

export default Dashboard