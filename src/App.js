import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header'
import Catalog from './pages/catalog';
import LoginRegister from './pages/loginregister';
import LandingPage from './pages/landingpage';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/loginregister" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
