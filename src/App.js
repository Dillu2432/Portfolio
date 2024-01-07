import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Navbar from './components/Navbar';

const App = () => {
  const router = createBrowserRouter([
    {path:'/',
    element:<Navbar/>,
    children:[
      {path:"",element:<Home/>},
      {path:"/about", element:<About/>},
      {path:"/contact", element:<Contact/>},
      {path:"/project", element:<Project/>}
    ],
  },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;
