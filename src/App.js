// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <h1 className="bg-slate-700">Meu app</h1>
      <Routes>
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;