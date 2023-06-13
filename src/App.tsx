import React from 'react';
import './App.css';
import { MainPage } from './main/MainPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './books/BooksPage';
import { NavBar } from './NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <header className='App-header'>
        <NavBar />
        <Outlet />
      </header>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'Books',
        element: <BooksPage />,
      },
      {
        path: 'AboutUs',
        element: <div>About Us</div>
      },
      {
        path:'OurCourses',
        element:<div>Our courses</div>
      },
      {
        path:"OurProducs",
        element:<div>Our producs</div>
      },
      {
        path:"team",
        element:<div>Our team</div>
      }
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

