import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './views/About.jsx'
import Contact from './views/Contact.jsx'
import Playground from './views/Playground.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './output.css'


const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/playground",
    element: <Playground /> 
}
    ,
  { 
    path: "/about",
    element: <About /> 
  },
  { 
    path: "/contact",
    element: <Contact /> 
  },
  {
    path: "/",
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
