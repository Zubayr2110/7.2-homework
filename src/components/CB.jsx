import { createBrowserRouter } from "react-router-dom";
import { About, Buy, Contact, Home, Login, Addproducts } from '../pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/buy',
        element: <Buy/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/addproducts',
        element: <Addproducts/>
    }
])

export default router