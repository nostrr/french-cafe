import React from 'react';
import './App.css';
import {MainPage} from "./main/MainPage";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
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
                element:  <MainPage/>
            }
            ,
            {
                path: 'Books',
                element: <BooksPage/>
            }
        ]
    }
])

// const App = () => (<div className='App'>
//     <MainPage/>
// </div>)

const App = () => <RouterProvider router={router}/>

export default App;
