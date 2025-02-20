import Book from '../students/Book'
import Create from '../books/Create'
import AssignReturnBooks from '../books/AssignReturnBooks'
import CreateStudents from '../students/CreateStudents'
import Students from '../students/Students'
import {Navigate} from 'react-router-dom'

export default [
    {
        path:'/book',
        element:<Book/>
    },
    {
        path:'/books/create',
        element:<Create/>
    },
    {
        path:'/books/edit:id',
        element:<Create/>
    },
    {
        path:'/books/assign-return',
        element:<AssignReturnBooks/>
    },
    {
        path:'/student/create',
        element:<CreateStudents/>
    },
    {
        path:'/students',
        element:<Students/>
    },
    {
        path:'*',
        element:<Navigate to='/book' />
    }

]