import React from 'react';
import './App.css';
import { MainPage } from './main/MainPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './books/BooksPage';
import { NavBar } from './NavBar/NavBar';
import { AboutUs } from './aboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <header className='App-header'>
        <NavBar />
      </header>
      <main>
        {/*<MainPage />*/}
        {/*<AboutUs/>*/}
        <Outlet/>
      </main>
      <footer>

      </footer>
    </div>,
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
        element: <AboutUs/>
      },
      {
        path:'OurCourses',
        element:<div></div>
      },
      {
        path:"OurProducs",
        element:<div></div>
      },
      {
        path:"team",
        element:<div></div>
      }
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

