import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';  
import UserDetail from './components/UserDetail';  
import './app.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UsersList />} />  
        <Route path='/user/:id' element={<UserDetail />} />  
      </Routes>
    </div>
  );
};

export default App;
