import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Layout from '../Components/Common/Layout'
import Homepage from '../Pages/Homepage'
import Signin from '../Pages/Auth/Signin'
import Detailed from '../Pages/Detailed'
import Homescreen from '../Pages/Homepage'
import Products from '../Pages/Products'


export const Mainrouter =createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Homepage/>,
            },
            {
                index:true,
                element:<Detailed/>,
            },
            {
                index:true,
                element:<Products/>,
            }
        ]
    }
])
