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
import VoirRental from './Admin/rentals/Show';
import ModifyRental from './Admin/rentals/Modify';
import CreateRental from './Admin/rentals/Create';
import EditProfile from './Admin/editProfile';
import Welcome from './Users/Welcome';

const routesConfig = [
  // Auth Admin and users
  { path: '/', element: <LandingPage /> },
  { path: '/signIn', element: <SignIn /> },
  { path: '/logout', element: <LogOut /> },
  { path: '/signUp', element: <SignUp /> },
  { path: '/choose', element: <Choose /> },
  { path: '/dashboard', element: <Dashboard /> },

  // Users for admin
  { path: '/users', element: <AllUsers /> },
  { path: '/user/:id', element: <VoirUser /> },
  { path: '/user/create', element: <CreateUser /> },
  { path: '/user/edit/:id', element: <ModifyUser /> },

  // Rentals for admin
  { path: '/rentals', element: <AllRentals /> },
  { path: '/rental/:id', element: <VoirRental /> },
  { path: '/rental/create', element: <CreateRental /> },
  { path: '/rental/edit/:id', element: <ModifyRental /> },

  // Cars  for admin
  { path: '/admin/cars', element: <AllCars /> },
  { path: '/car/:id', element: <VoirCar /> },
  { path: '/car/:id/edit', element: <ModifyCar /> },
  { path: '/car/create', element: <CreateCar /> },
  
  // for both 
  { path: '/editProfile/:id', element: <EditProfile /> },
  // for users 
  { path: '/welcome', element: <Welcome /> },


];

export default routesConfig;
