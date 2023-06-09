import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import SeeAllServices from './Pages/Home/Services/SeeAllServices';
import Login from './Pages/Login/Login';
import MyReviews from './Pages/MyReviews/MyReviews';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes';
import Signup from './Pages/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/services',
        element: <SeeAllServices></SeeAllServices>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/myreviews',
        element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
      },
      {
        path: '/addservice',
        element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
      },
      {
        path: '/services/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mesuk23.vercel.app/services/${params.id}`)
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mesuk23.vercel.app/services/${params.id}`)
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

function App() {
  return (
    <div className='lg:w-4/5 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
