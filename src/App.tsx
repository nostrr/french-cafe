import React from 'react';
import './App.css';
import { MainPage } from './Main/MainPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BooksPage } from './Books/BooksPage';
import { NavBar } from './NavBar/NavBar';
import { AboutUs } from './AboutUs/AboutUs';
import { WeProud } from './WeProud/WeProud';
import { WeAreTrusted } from './WeAreTrusted/WeAreTrusted';
import { MyInstagram } from './MyInstagram/MyInstagram';
import { YourQuestions } from './YourQuestions/YourQuestions';
import { WriteToUs } from './WriteToUs/WriteToUs';
import { Footer } from './Footer/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <header className='App-header'>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    ,
    children: [
      {
        path: '/',
        element: <>
          <MainPage />
          <AboutUs />
          <WeProud />
          <WeAreTrusted />
          <MyInstagram />
          <YourQuestions />
          <WriteToUs />
        </>,
      },
      {
        path: 'books',
        element: <BooksPage />,
      },
    ],
  },
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router} />;


export default App;

