import './App.css';
import {BrowserRouter as Router ,Link ,Route,Routes} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
function App() {
  return (
    <div className="">
    <Router>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        
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
