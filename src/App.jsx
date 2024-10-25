// src/App.jsx
import AppRouter from './AppRouter';
import ErrorBoundary from './component/error/ErrorBoundary';
import Navigation from "./pages/nav/Navigation";
import "./css/main.css";

const App = () => {
  return (
    <ErrorBoundary> {/* Pakker App-komponentene med ErrorBoundary */}
      <div>
        
        <Navigation /> {/* Navigasjonsbaren som håndterer innlogging */}
        
        {/* Rendre hovedrouting-komponenten */}
        <AppRouter />
      </div>
    </ErrorBoundary>
  );
};

export default App;






