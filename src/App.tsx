import React from 'react';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './Books/BooksPage';
import { NavBar } from './NavBar/NavBar';
import { Footer } from './Footer/Footer';
import { MainPage } from './PageComponents/Main/MainPage';
import { OurCoursesPage } from './PageComponents/OurCorses/OurCoursesPage';
import { OurProductsPage } from './PageComponents/OurProducts/OurProductsPage';
import { TeamPage } from './PageComponents/Team/TeamPage';

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
        path: 'OurCourses',
        element: <OurCoursesPage/>
      },
      {
        path: 'OurProducts',
        element: <OurProductsPage/>
      },
      {
        path:'Team',
        element:<TeamPage/>
      }
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

