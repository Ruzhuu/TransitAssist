import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Landing, Profile } from './pages';

function App() {
  const routes = [
    { path: '/', element: <Landing /> },
    { path: '/home', element: <Home /> },
    { path: '/profile', element: <Profile /> },
  ]
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
