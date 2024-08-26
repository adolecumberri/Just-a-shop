// src/routes/index.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginRegister from '../pages/LoginRegister';
// Puedes agregar más rutas aquí, como SignUp o Home

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRegister />} />
      {/* Otras rutas pueden ir aquí */}
    </Routes>
  );
};

export default AppRoutes;
