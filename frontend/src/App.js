import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes'; 
import { useAuth } from './context/authContext/authContext';
import NewsletterModal from './Newslettermodal';
const App = () => {
  const { userLoggedIn } = useAuth();

  return (
    <>
    <NewsletterModal/>
    <Router>
      <div className="flex">
        {userLoggedIn && <Sidebar />} {/* Show Sidebar if authenticated */}
        <div className="flex-grow p-4"> {/* Space for sidebar on desktop */}
          <AppRoutes /> {/* Render routes from AppRoutes */}
        </div>
      </div>
    </Router>
    
    </>
  );
};

export default App;
