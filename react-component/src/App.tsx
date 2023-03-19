import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/*" element={<Page404 />}></Route>
    </Routes>
  );
}

export default App;
