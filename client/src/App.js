import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import DeviceForm from './components/DeviceForm';
import Register from './components/Register';
import AdminView from './views/AdminView';
import UserView from './views/UserView';
import UpdateForm from './components/UpdateForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { Routes,Route,BrowserRouter } from 'express';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/api/devices/:id" element={<UserView />} />
          <Route path="/add" element={<DeviceForm />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
