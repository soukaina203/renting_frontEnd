import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routesConfig from './paths';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {routesConfig.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
