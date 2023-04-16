import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import Navigation from './components/Navigation/Navigation';
import Forms from './pages/Forms';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
