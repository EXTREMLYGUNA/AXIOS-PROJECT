// /* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import Topbar from '../common/Topbar'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

function Students() {

  let [data,setData] = useState([])
const getData = async()=>{
  try {
    let res = await axios.get('https://67b1f16dbc0165def8cc4d4c.mockapi.io/student')
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

  return <>
  <Topbar/>
    <div>
      <h1>Students</h1>
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e)=>{
           return <tr key={e.id}>
            <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.email}</td>
            <td>
                            <Button variant='white' onClick={()=>toast.error("Contact Admin")} ><img src='./src/assets/Edit.png' style={{backgroundColor:"none",width:"40px",height:"40px"}} /></Button>
                            &nbsp;&nbsp;
                            <Button variant='white' onClick={()=>toast.error("Not allowed")}><img src='./src/assets/Delete.png' style={{backgroundColor:"none",width:"40px",height:"40px"}} /></Button>
                        </td>
        </tr>
          })
        }
      </tbody>
    </Table>

    </div>

  </>
}

export default Students
