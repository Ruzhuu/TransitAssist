import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Landing, Profile } from './pages';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import { Footer } from './components';

function App() {
  const { isAuthenticated } = useAuth0();

  const routes = [
    { path: '/', element: isAuthenticated ? <Home /> : <Landing /> },
    { path: '/profile', element: <Profile /> },
  ]
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {
            routes.map(route => (
              <Route
                path={route.path}
                element={route.element}
                exact
              />
            ))
          }
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
