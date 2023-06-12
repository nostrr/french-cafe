import React from 'react';
import './App.css';
import {MainPage} from "./main/MainPage";
import {
  createBrowserRouter, Outlet, RouterProvider,
} from 'react-router-dom';
import {BooksPage} from "./books/BooksPage";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <div className="App">
                <Outlet/>
            </div>,
        children: [
            {
                path:'/',
                Component:  MainPage
            }
            ,
            {
                path: 'Books',
                Component: BooksPage
            }
        ],
    }
], {
  basename: process.env.PUBLIC_URL,
});

const App = () => <RouterProvider router={router}/>


export default App;
