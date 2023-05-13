import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HardSkills from './components/HardSkills';
import Home from './components/Home';
import SoftSkills from './components/SoftSkills';
import Works from './components/Works';
import NoPage from './components/NoPage';

const router = createBrowserRouter([
   {
    path: "/",
    element: <Home/>
   },
   {
    path: "/softskills",
    element: <SoftSkills/>
   },
   {
    path: "/hardskills",
    element: <HardSkills/>
   },
   {
    path: "/myworks",
    element: <Works/>
   },
   {
    path: "*",
    element: <NoPage/>
   }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);