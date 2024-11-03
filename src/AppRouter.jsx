// src/AppRouter.jsx
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

const Booking = lazy(() => import('./pages/booking/Booking'));
const Calendar = lazy(() => import('./pages/calendar/Calendar'));
const Confirmation = lazy(() => import('./pages/confirmation/Confirmation'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const ErrorPage = lazy(() => import('./pages/error/Error'));
const Login = lazy(() => import('./component/login/Login'));
const Logout = lazy(() => import('./pages/logout/Logout'));
const Profile = lazy(() => import('./component/profile/Profile'));
const Administration = lazy(() => import('./pages/administration/Administration'));
const Home = lazy(() => import('./pages/home/Home'));
const SignUp = lazy(() => import('./pages/signup/SignUp'));
const DeleteAccount = lazy(() => import('./component/deleteAccount/DeleteAccount'));
const ProfileEdit = lazy(() => import('./component/profile/ProfileEdit'));





const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
    
        
        {/* Protected Administration route */}
        <Route
          path="/administration"
          element={
            <ProtectedRoute>
              {console.log("Attempting to access /administration")}
              <Administration />
            </ProtectedRoute>
          }
        />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/deleteAccount" element={<DeleteAccount />} />
        
        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

