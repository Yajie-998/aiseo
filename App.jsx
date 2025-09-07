import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import SampleReport from './pages/SampleReport';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.less';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/sample-report" element={<SampleReport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
