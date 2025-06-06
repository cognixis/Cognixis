import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './pages/Home'; // Example page components
import Footer from './components/Footer';
import Vision from './pages/Vision';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import InternshipsPage from './pages/InternshipsPage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
// import other page components

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />  
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
