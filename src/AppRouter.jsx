// src/AppRouter.jsx
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navigation from "./pages/nav/Navigation";
const Booking = lazy(() => import('./pages/booking/Booking'));
const Calendar = lazy(() => import('./pages/calendar/Calendar'));
const Confirmation = lazy(() => import('./pages/confirmation/Confirmation'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const ErrorPage = lazy(() => import('./pages/error/Error'));
const Login = lazy(() => import('././component/login/Login')); // Importer Login-siden
const Logout = lazy(() => import('./pages/logout/Logout'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Administration = lazy(() => import('./pages/administration/Administration'));
const Home = lazy(() => import('./pages/home/Home'));

const AppRouter = () => {
  return (
    <>
      {/* <Navigation /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/login" element={<Login />} /> {/* Legg til Login-ruten */}
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
