// routesConfig.js

import LandingPage from './LandingPage/LandingPage';
import SignIn from './Auth/login';
import LogOut from './Auth/logout';
import SignUp from './Auth/SignUp';
import Choose from './Auth/Choose';
import Dashboard from './Admin/dashboard';
import AllUsers from './Admin/users/Index';
import VoirUser from './Admin/users/Show';
import CreateUser from './Admin/users/Create';
import AllRentals from './Admin/rentals/Index';
import AllCars from './Admin/cars/Index';
import VoirCar from './Admin/cars/Show';
import ModifyCar from './Admin/cars/Modify';
import CreateCar from './Admin/cars/Create';
import ModifyUser from './Admin/users/Modify';

const routesConfig = [
  // Auth
  { path: '/', element: <LandingPage /> },
  { path: '/signIn', element: <SignIn /> },
  { path: '/logout', element: <LogOut /> },
  { path: '/signUp', element: <SignUp /> },
  { path: '/choose', element: <Choose /> },
  { path: '/dashboard', element: <Dashboard /> },

  // Users
  { path: '/users', element: <AllUsers /> },
  { path: '/user/:id', element: <VoirUser /> },
  { path: '/user/create', element: <CreateUser /> },
  { path: '/user/edit/:id', element: <ModifyUser /> },

  // Rentals
  { path: '/rentals', element: <AllRentals /> },

  // Cars 
  { path: '/admin/cars', element: <AllCars /> },
  { path: '/car/:id', element: <VoirCar /> },
  { path: '/car/:id/edit', element: <ModifyCar /> },
  { path: '/car/create', element: <CreateCar /> },
];

export default routesConfig;
