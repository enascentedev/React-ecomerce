// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import "./assets/index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;