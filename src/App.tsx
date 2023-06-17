import React from 'react';
import './App.css';
import { MainPage } from './Main/MainPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './Books/BooksPage';
import { NavBar } from './NavBar/NavBar';
import { AboutUs } from './AboutUs/AboutUs';
import { WeProud } from './WeProud/WeProud';

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
        path:"OurProducts",
        element:<div></div>
      },
      {
        path:"Team",
        element:<div></div>
      },
      {
        path:"WeProud",
        element: <WeProud/>
      }
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

