import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main/Main'
import Home from './Components/Home/Home/Home'
import Courses from './Components/Courses/Courses'
import CoursesDetails from './Components/CoursesDetails/CoursesDetails'
import Instructors from './Components/Instructors/Instructors'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'coursedetails/:id',
        element: <CoursesDetails />,
      },
      {
        path: 'instructors',
        element: <Instructors />
      },
      {
        path: 'registration',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
