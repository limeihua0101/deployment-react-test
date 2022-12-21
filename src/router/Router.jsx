import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../page/Home';
import { Login } from '../page/Login';

export const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'home1',
                element: <h1>home1 !!!!!!!!!!!</h1>,
            },
        ],
        errorElement: <div> Not Found Page </div>,
    },
]);
