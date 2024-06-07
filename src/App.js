import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import AllUsers from './Admin/users/Index';
import AllRentals from './Admin/rentals/Index';
import Dashboard from './Admin/dashboard';
import AllCars from './Admin/cars/Index';
import SignUp from './Auth/SignUp';
import LogOut from './Auth/logout';
import SignIn from './Auth/login';
import Choose from './Auth/Choose';
import LandingPage from './LandingPage/LandingPage';
import CreateUser from './Admin/users/Create';
import ModifyUser from './Admin/users/Modify';
import CreateCar from './Admin/cars/Create';
import CreateRental from './Admin/rentals/Create';
import ModifyRental from './Admin/rentals/Modify';
import Welcome from './Users/Welcome';
import Rent from './Users/Rent';
import Answer from './Users/Answer';
import UserRentals from './Users/UserRentals';
import CreateReview from './Users/CreateReview';
import ReviewsAdmin from './Admin/ReviewsAdmin';
import NotProcessed from './Admin/rentals/NotProcessed';
import Processed from './Admin/rentals/Processed';
import CreateReviewAdmin from './Admin/CreateReviewAdmin';
import ModifyCar from './Admin/cars/Modify';
import EditProfile from './Admin/editProfile';
import UserInterface from './Users/UserInterface';
import VoirCar from './Admin/cars/Show';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth */}
          <Route path="signIn" element={<SignIn />} />
          <Route path="logout" element={<LogOut />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="choose" element={<Choose />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* <Route path="review/create" element={<CreateReview />} /> */}
          

          <Route path="/user" element={<UserInterface />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="rentals" element={<UserRentals />} />
          <Route path="editProfile/:id" element={<EditProfile />} />
          <Route path="car/:id/rent" element={<Rent />} />
          <Route path="car/:id" element={<VoirCar />} />
          <Route path="review/create" element={<CreateReviewAdmin />} />
          <Route path="answer" element={<Answer />} />


          </Route>
          {/* Admin */}
          <Route path="/admin" element={<Admin />}>
            <Route path="editProfile/:id" element={<EditProfile />} />
            
            <Route path="reviews" element={<ReviewsAdmin />} />
            {/* <Route path="review/create" element={<CreateReviewAdmin />} /> */}

            <Route path="users" element={<AllUsers />} />
            <Route path="users/create" element={<CreateUser />} />
            <Route path="user/edit/:id" element={<ModifyUser />} />
            {/* <Route path="rentals" element={<UserRentals />} /> */}

            <Route path="cars" element={<AllCars />} />
            <Route path="car/edit/:id" element={<ModifyCar />} />
            <Route path="cars/create" element={<CreateCar />} />
            <Route path="answer" element={<Answer />} />

            <Route path="rentals" element={<AllRentals />} />

            <Route path="rentals/create" element={<CreateRental />} />
            <Route path="rental/edit/:id" element={<ModifyRental />} />
            <Route path="rentals/unprocessed" element={<NotProcessed />} />
            <Route path="rentals/processed" element={<Processed />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
