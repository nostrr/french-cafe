import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {MainPage} from "./main/MainPage";
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
                path: '/',
                element: <MainPage/>
            },
            {
                path:'Books',
                element:<BooksPage/>
            }
        ]
    }
])

const App = () => <RouterProvider router={router}/>

export default App;
