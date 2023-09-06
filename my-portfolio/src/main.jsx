import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import BlogDetails from './Pages/Blog/BlogDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
      {
        path : '/',
        element: <About></About>
      },
      {
        path:'resume',
        element : <Resume></Resume>
      },
      {
        path:'portfolio',
        element : <Portfolio></Portfolio>
      },
      {
        path :'blog',
        element :<Blog></Blog>
      },
      {
        path :'blogDetails/:name',
        element :<BlogDetails></BlogDetails>
      },
      {
        path :'contact',
        element : <Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
