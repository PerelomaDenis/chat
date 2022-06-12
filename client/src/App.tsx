import * as React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    filledMedium: true;
    filledLarge: true;
  }
}

const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: '#111823', height: '100vh' }}>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
