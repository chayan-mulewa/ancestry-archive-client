import { lazy } from 'react';

// import { Home } from '../pages/index';

const Home = lazy(() => import('../pages/index').then(module => ({ default: module.Home })));
const Dashboard = lazy(() => import('../pages/index').then(module => ({ default: module.Dashboard })));
const Login = lazy(() => import('../pages/index').then(module => ({ default: module.Login })));
const Signup = lazy(() => import('../pages/index').then(module => ({ default: module.Signup })));

const appRoute = [
    {
        path: '/',
        element: <Home />,
        exact: true
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/app',
        element: <Dashboard />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '*',
        element: <div className='text-black'>No Page Found</div>
    }
];

export default appRoute;
