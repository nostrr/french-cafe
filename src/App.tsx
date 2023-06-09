import React from 'react';
import './App.css';
import {MainPage} from "./main/MainPage";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route, RouterProvider
} from "react-router-dom";
import {BooksPage} from "./books/BooksPage";


// function ErrorPage() {
//     const error: any = useRouteError();
//     console.error(error);
//
//     return (
//         <div id="error-page">
//             <h1>Oops!</h1>
//             <p>Sorry, an unexpected error has occurred.</p>
//             <p>
//                 <i>{error.statusText || error.message}</i>
//             </p>
//         </div>
//     );
// }
//
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element:
//             <div className="App">
//                 <Outlet/>
//             </div>,
//         children: [
//             {
//                 path:'/',
//                 Component:  MainPage
//             }
//             ,
//             {
//                 path: 'Books',
//                 Component: BooksPage
//             }
//         ],
//         errorElement: <ErrorPage />,
//     }
// ])

// const App = () => (<div className='App'>
//     <MainPage/>
// </div>)

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<MainPage/>}/>
            <Route path='books' element={<BooksPage/>}/>
        </Route>
    )
)

const App = () => <RouterProvider router={router}/>


export default App;
