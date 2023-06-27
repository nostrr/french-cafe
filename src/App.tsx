import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './Books/BooksPage';
import { NavBar } from './NavBar/NavBar';
import { AboutUs } from './PageComponents/Main/AboutUsPage/AboutUs';
import { Footer } from './Footer/Footer';
import { MainPage } from './PageComponents/Main/MainPage';
import { OurCoursesPage } from './PageComponents/OurCorses/OurCoursesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='globalContainer'>
      <header className='App-header'>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>,
    children: [
      {
        path: '/',
        element: <>
          <MainPage/>
        </>,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
      {
        path: 'OurCoursesPage',
        element: <OurCoursesPage/>
      },
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

