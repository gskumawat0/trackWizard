
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './assets/Login';
import { initializeApp } from "firebase/app";

import Header from './assets/Header';
import Register from './assets/Register';
import Layout from './assets/Pages/Layout';
import Home from './assets/Pages/Home';
import Dashboard from './assets/Pages/Dashboard';
import Activity from './assets/Pages/Activity';
import Activity_logs from './assets/Pages/Activity_logs';
import Interval from './assets/Pages/Interval';



const firebaseConfig = {
  apiKey: "AIzaSyB460dkuA4hHvat8IImc8CihfOK0aP2rl0",
  authDomain: "details-2e608.firebaseapp.com",
  projectId: "details-2e608",
  storageBucket: "details-2e608.firebasestorage.app",
  messagingSenderId: "60560790576",
  appId: "1:60560790576:web:f8efa9c129fb24da5389f5",
  measurementId: "G-DRXT3DHRV1"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);



function App() {
  
const routers = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/home',
          element:<Home/>
        },
         {
      path:'/login',
      element:<Login/>
    },{
      path:'/header',
      element:<Header/>
    },{
      path:'/',
      element:<Dashboard/>
    },{
      path:'/activity',
      element:<Activity/>
    },{
      path:"/activity_logs",
      element:<Activity_logs/>
    },{
      path:"/interval",
      element:<Interval/>
    }
      ]
    }
   ,{
      path:'/register',
      element:<Register/>
    }
  ]
);

  return (
   <RouterProvider router={routers}/>
  )
}

export default App
