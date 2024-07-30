import React from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp></SignUp>} />
      <Route path='/login' element={<Login></Login>} />
    </Routes>
  );
}

export default App;
