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
import ModifyCar from './Admin/editProfile';
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
          <Route path="welcome" element={<Welcome />} />

          <Route path="review/create" element={<CreateReview />} />

          {/* Admin */}
          <Route path="/admin" element={<Admin />}>
            <Route path="reviews" element={<ReviewsAdmin />} />
          <Route path="review/create" element={<CreateReviewAdmin />} />

            <Route path="users" element={<AllUsers />}>
              <Route path="create" element={<CreateUser />} />
              <Route path="edit/:id" element={<ModifyUser />} />
              <Route path="rentals" element={<UserRentals />} />
            </Route>

            <Route path="cars" element={<AllCars />}>
              <Route path="edit/:id" element={<ModifyCar />} />
              <Route path="create" element={<CreateCar />} />
              <Route path=":id/rent" element={<Rent />} />
              <Route path="answer" element={<Answer />} />
            </Route>

            <Route path="rentals" element={<AllRentals />}/>
           
            <Route path="rentals/create" element={<CreateRental />} />
            <Route path="rentals/edit/:id" element={<ModifyRental />} />
            <Route path="rentals/unprocessed" element={<NotProcessed />} />
            <Route path="rentals/processed" element={<Processed />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
