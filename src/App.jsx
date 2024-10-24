//pages and css
import AppRouter from './AppRouter';
import './pages/booking/booking.css';
import './pages/calendar/calendar.css';
import './pages/confirmation/confirmation.css';
import './pages/dashboard/dashboard.css';
import './pages/error/error.css';
import './pages/login/login.css';
import './pages/logout/logout.css';
import './pages/nav/nav.css';
import './pages/profile/profile.css';
import './pages/administration/Administration.css';
//other imports
 'react-router-dom';



//const


const App = () => {
  return (
    <>
    <AppRouter />
    </>
  );
}

export default App;