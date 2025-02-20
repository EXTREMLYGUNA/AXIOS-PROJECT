// /* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import Topbar from '../common/Topbar'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';


function Book() {
  let [data,setData] = useState([])
  let navigate = useNavigate()
const getData = async()=>{
  try {
    let res = await axios.get('https://67b1f16dbc0165def8cc4d4c.mockapi.io/users')
    if(res.status===200)
      {
      setData(res.data)
      toast.success("Data fetched") 
      }
  } catch (error) {
    toast.error(error.response.data)
  }
}

useEffect(()=>{
  getData()
},[])

const handledelete = async(id)=>{
  try {
    let res = await axios.delete(`https://67b1f16dbc0165def8cc4d4c.mockapi.io/users/${id}`)
    if(res.status===200)
      {
      toast.success(`${id}th  Data Deleted`)
      getData()
      }
  } catch (error) {
    toast.error(error.response.data)
  }
}


  return <>

  <Topbar/>
    <div>
      <h1>Dashboard</h1>
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>NAME</th>
          <th>USERNAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          <th>PHONE</th>
          <th>WEBSITE</th>
          <th>COMPANY</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e)=>{
           return <tr key={e.id}>
            <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.username}</td>
          <td>{e.email}</td>
          <td>{e.address
            }</td>
          <td>{e.phone}</td>
          <td>{e.website}</td>
          <td>{
            e.company}</td>
            <td>
                            <Button variant='white' onClick={()=>navigate(`/books/edit/${e.id}`)} ><img src='./src/assets/Edit.png' style={{backgroundColor:"none",width:"40px",height:"40px"}} /></Button>
                            &nbsp;&nbsp;
                            <Button variant='white' onClick={()=>handledelete(e.id)}><img src='./src/assets/Delete.png' style={{backgroundColor:"none",width:"40px",height:"40px"}} /></Button>
                        </td>
        </tr>
          })
        }
      </tbody>
    </Table>

    </div>
  </>
}

export default Book
