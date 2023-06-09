import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider, useLocation} from "react-router-dom";
import {MainPage} from "./main/MainPage";
import {BooksPage} from "./books/BooksPage";

const NotFound = () => {
    const location = useLocation();

    React.useEffect(() => {
        window.location.href = '/'; // Перенаправление на index.html
    }, []);

    return null; // Можно вернуть любой другой контент или null
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
