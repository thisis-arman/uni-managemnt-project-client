import React from 'react';
import MainLayout from "./components/layouts/MainLayout.jsx"
import ProtectedRoute from './components/layouts/ProtectedRoute.js';

const App = () => {
  return <ProtectedRoute>
    <MainLayout />
  </ProtectedRoute>
};

export default App;