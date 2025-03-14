import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';
import Footer from './src/Footer';
import About from './src/About';
import Error from './src/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './src/Contact';
import RestaurantMenu from './src/RestaurantMenu';
// import Grocery from './src/Grocery'; 

// Lazy loading way of importing Grocery to prevent it getting bundled in the same js file
const Grocery = lazy(() => import('./src/Grocery'))

/**
 * Header Component
 * - Logo
 * - Nav Items
 * Body Component
 * - Search
 * - Restaurant Container
 *  - Restaurant Cardcontact
 * Footer Component
 * - Links
 * - Address
 * - Contact
 * - Copy Right
 */

const App = () => { 
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1 style={{color: "grey", fontSize: "150px"}}>Grocery Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <Error />
    },
    
], {
  future: {
    v7_relativeSplatPath: true,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider future={{ v7_startTransition: true,}} router={appRouter}/>);