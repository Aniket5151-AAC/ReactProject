import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {

  const [stu,setStudent]=useState([])
  const[input,setInput]=useState('')
  async function getData () {
    const response=await axios.get('http://localhost:8000/student')
    console.log(response)

    const result=response.data
    console.log(result)
    setStudent(result)
  }

  useEffect (()=>{
    getData()
  },[])

  const searchName=stu.filter((x)=>{
    return x.fname.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <div>
   <table className='table'>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Namr</th>
        <th>Last Name</th>
        <th>Mother Name</th>
        <th>Father Name</th>
        <th>Address</th>
        <th>Gender</th>
        <th>State</th>
        <th>City</th>
        <th>Dob</th>
        <th>Email</th>
        <th>Pincode</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody>
      {
        stu.map((s,index)=>{
          return(
            <tr key={index}>
              <td>{index +1}</td>
              <td>{s.fname}</td>
              <td>{s.lname}</td>
              <td>{s.mothername}</td>
              <td>{s.fathername}</td>
              <td>{s.address}</td>
              <td>{s.gender}</td>
              <td>{s.state}</td>
              <td>{s.city}</td>
              <td>{s.dob}</td>
              <td>{s.email}</td>
              <td>{s.pincode}</td>
              <td>{s.courses}</td>

              <td>
                {/* in to props we always backtick*/}
                <NavLink to={`/update/student/${s.id}`}><button className='btn btn-warning me-2'>Edit</button></NavLink>
                <NavLink to={`/delete/student/${s.id}`}><button className='btn btn-danger'>Delete</button></NavLink> 
             
              </td>
                  
            </tr>
          )
        })
      }
    </tbody>

   </table>
    </div>
  )
}


export default Show