import { createBrowserRouter } from 'react-router-dom';
import Home from './screens/home/Home';
import Serials from './screens/serials/Serials';
import NotFoundPage from './screens/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/serials',
            element: <Serials />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ],
    { basename: '/movie_manager_front_new' }
);
