// src/Router.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './pages/booking/Booking';
import Calendar from './pages/calendar/Calendar';
import Confirmation from './pages/confirmation/Confirmation';
import Dashboard from './pages/dashboard/Dashboard';
import ErrorPage from './pages/error/Error';
import Login from './pages/login/Login';
import Logout from './pages/logout/Logout';
import Nav from './pages/nav/Nav';
import Profile from './pages/profile/Profile';
import Administration from './pages/administration/Administration';

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;