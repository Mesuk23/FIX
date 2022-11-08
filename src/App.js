import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import SeeAllServices from './Pages/Home/Services/SeeAllServices';
import Login from './Pages/Login/Login';
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
        path: '/services/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
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
