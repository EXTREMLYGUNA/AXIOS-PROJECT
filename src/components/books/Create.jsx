/* eslint-disable no-unused-vars */
import React from 'react'
import Topbar from '../common/Topbar'
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {toast} from 'react-hot-toast'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';

function Create() {
let navigate = useNavigate()
  
const studentSchema = Yup.object().shape({
  name:    Yup.string().required('Required'),
  username:Yup.string().required('Required'),
  email:   Yup.string().email('Invalid email').required('Required'),
  address: Yup.array().required('Required'),
  phone:   Yup.number().required('Required'),
  website: Yup.string().required('Required'),
  company: Yup.string().required('Required')

});


const handleSubmit = async(values)=>{
  try {
    let body = {...values}
    let res = await axios.post('https://67b1f16dbc0165def8cc4d4c.mockapi.io/users',body)
    if(res.status===201)
      {
      toast.success("Data Created !") 
      navigate('/book')
      }
  } catch (error) {
    toast.error(error.response.data)
  }
}
  
  let formik = useFormik(
    {
      initialValues:{
        name:'',
        username:'',
        email:'',
        address:[''],
        phone:Number(),  
        website:'',
        company:''
      },
      validationSchema:studentSchema,
      onSubmit: values => { 
        handleSubmit(values)
       }
    }
  )

  return<>
  <Topbar/>
    <div>
      <h1>Create</h1>
    </div>
    <div>
    <Form onSubmit={formik.handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? (<div style={{color:"red"}} >{formik.errors.name}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" id='username' name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.username && formik.errors.username ? (<div style={{color:"red"}} >{formik.errors.username}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  />
        {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}} >{formik.errors.email}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control  type="text" placeholder="Enter your village" id='Village' name='Village' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.address && formik.errors.address ? (<div style={{color:"red"}} >{formik.errors.address}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your number" id='number' name='number' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.phone && formik.errors.phone ? (<div style={{color:"red"}} >{formik.errors.phone}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Website</Form.Label>
        <Form.Control type="text" placeholder="Enter your website" id='website' name='website' onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.website && formik.errors.website ? (<div style={{color:"red"}} >{formik.errors.website}</div>) : null}
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Company</Form.Label>
          <Form.Control style={{width:"500px"}} type="text" placeholder="Enter your company name" id='company' name='company' onChange={formik.handleChange} onBlur={formik.handleBlur} />
         {formik.touched.company && formik.errors.company ? (<div style={{color:"red"}} >{formik.errors.company}</div>) : null}
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
    </div>

  </>
}

export default Create
