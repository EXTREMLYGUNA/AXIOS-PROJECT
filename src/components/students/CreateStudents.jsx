/* eslint-disable no-unused-vars */
import React from 'react'
import Topbar from '../common/Topbar'
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function CreateStudents() {
  
const studentSchema = Yup.object().shape({
  name:Yup.string().required('Required'),
  email:Yup.string().email('Invalid email').required('Required'),
});

let navigate = useNavigate()

const create = async(values)=>{
try {
  let res = await axios.post('https://67b1f16dbc0165def8cc4d4c.mockapi.io/student',values)
  if(res.status===201)
    {
      
    toast.success("Data Created !") 
    navigate('/students')
    }
} catch (error) {
  toast.error(error.response.data)
}
}


let formik = useFormik(
  {
    initialValues:{
      name:'',
      email:''
    },
    validationSchema:studentSchema,
    onSubmit:values =>{
      create(values)
    }
  }
)

  return<>
  <Topbar/>
    <div>
      <h1>Create Students</h1>
    </div>
    <div>
    <Form onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}} >{formik.errors.name}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}} >{formik.errors.email}</div>) : null}
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </div>

  </>
}

export default CreateStudents
