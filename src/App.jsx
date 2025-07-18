import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./assets/Login";
import { initializeApp } from "firebase/app";

import Header from "./assets/Header";
import Register from "./assets/Register";
import Layout from "./assets/Pages/Layout";
import Home from "./assets/Pages/Home";
import Dashboard from "./assets/Pages/Dashboard";
import Activity from "./assets/Pages/Activity";
import Activity_logs from "./assets/Pages/Activity_logs";
import Interval from "./assets/Pages/Interval";

// firebase-config.js
// import firebaseApp from "./firebase-config";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/header",
          element: <Header />,
        },
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/activity",
          element: <Activity />,
        },
        {
          path: "/activity_logs",
          element: <Activity_logs />,
        },
        {
          path: "/interval",
          element: <Interval />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
