import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './assets/Login';
import { initializeApp } from 'firebase/app';

import Header from './assets/Header';
import Register from './assets/Register';
import Layout from './assets/Pages/Layout';
import Home from './assets/Pages/Home';
import Dashboard from './assets/Pages/Dashboard';
import Activity from './assets/Pages/Activity';
import Activity_logs from './assets/Pages/Activity_logs';
import Interval from './assets/Pages/Interval';

const firebaseConfig = {
  apiKey: 'AIzaSyCl97RQIp8jZm0xvbChPOoM25Og-1puhUU',
  authDomain: 'track-11125.firebaseapp.com',
  projectId: 'track-11125',
  storageBucket: 'track-11125.firebasestorage.app',
  messagingSenderId: '693464443516',
  appId: '1:693464443516:web:618627de3194f2e8dd37f9',
  measurementId: 'G-PKY5NWW0RC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/header',
          element: <Header />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/activity',
          element: <Activity />,
        },
        {
          path: '/activity_logs',
          element: <Activity_logs />,
        },
        {
          path: '/interval',
          element: <Interval />,
        },
      ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
