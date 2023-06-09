import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import {MainPage} from "./main/MainPage";
import {BooksPage} from "./books/BooksPage";

const NotFound = () => {
    React.useEffect(() => {
        window.location.href = '/';
    }, []);

    return null;
};

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
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ]
    }
])



const App = () => <RouterProvider router={router}/>

export default App;
