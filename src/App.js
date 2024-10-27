import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes'; 
import { useAuth } from './context/authContext/authContext';

const App = () => {
  const { userLoggedIn } = useAuth();

  return (
    <Router>
      <div className="flex">
        {userLoggedIn && <Sidebar />} {/* Show Sidebar if authenticated */}
        <div className="flex-grow p-4"> {/* Space for sidebar on desktop */}
          <AppRoutes /> {/* Render routes from AppRoutes */}
        </div>
      </div>
    </Router>
  );
};

export default App;
