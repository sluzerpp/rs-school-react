import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import { NavigationWithRouter } from './components/Navigation/Navigation';

function App() {
  return (
    <div className="app">
      <NavigationWithRouter></NavigationWithRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
