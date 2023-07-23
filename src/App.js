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
function App() {
  return (
    <div className="">
    <Router>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/choose' element={<Choose/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/cars' element={<AllCars/>}/>
        <Route path='/Rentals' element={<AllRentals/>}/>
        <Route path='/Users' element={<AllUsers/>}/>
        <Route path='/car/:id' element={<VoirCar/>}/>
        
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
