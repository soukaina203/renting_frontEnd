import './App.css';
import {BrowserRouter as Router  ,Route,Routes} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/login';
import Choose from './Auth/Choose';
import AllCars from './Admin/cars';
import AllRentals from './Admin/rentals';
import AllUsers from './Admin/users';
import Dashboard from './Admin/dashboard';
import VoirCar from './Admin/cars/VoirCar';
import ModifyCar from './Admin/cars/ModifyCar';
import CreateCar from './Admin/cars/create';
function App() {
  return (
    <div className="">
    <Router>

      <Routes>
        {/* Auth */}
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
  
        {/* <Route path='AdminProfile' element={<AdminProfil/>}/> */}
        <Route path='/Rentals' element={<AllRentals/>}/>
        <Route path='/admin/cars' element={<AllCars/>}/>
        <Route path='/Users' element={<AllUsers/>}/>
        {/* Cars */}
        <Route path='/car/:id' element={<VoirCar/>}/>
        <Route path='/car/:id/edit' element={<ModifyCar/>}/>
        <Route path='/car/create' element={<CreateCar/>}/>
        
      </Routes>
    </Router>
    </div>
    // <div className="App">
      
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
    // </div>
  );
}

export default App;
