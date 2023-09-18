import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Register from './pages/Register'
import Home from './pages/Home'
import BetRequest from './pages/BetRequest'
import TribePage from './pages/TribePage'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function App() {


  const Layout = () => {
    return (
      
      <div className='app'>
      <Navbar/>
      <Outlet/>
      </div>
     
       
     )
  
  }



  const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Register/>,
            },
            {
              path:"/betrequest",
              element:<BetRequest/>,
          },
            {
              path:"/home",
              element:<Home/>,
          },
          {
            path:"/tribepage",
            element:<TribePage/>,
        },
          
        ]
    }
])


return <RouterProvider router={router}/>;

}

export default App
