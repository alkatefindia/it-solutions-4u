import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Blog1 from './blogs/blog1';
import Websoln from './pages/web_soln';
import Digimrkt from './pages/Digi_mrkt';
import Leasing from './pages/Leasing';
import Terms from './pages/TermsCondition';
import Privacy from './pages/PrivacyPolicy';
import Printers from './products/Printer';
import Offer from './pages/Offer';
import ProductDetail from './products/ProductDetail';
import { products } from './products/productData';
import Consumables from './products/Consumables';
import ConsumableDetail from './products/ConsumableDetail';
import { consumables } from './products/ConsumableData';
import SearchEngine from './pages/SearchEngine';
import SocialMedia from './pages/SocialMedia';
import Ppc from './pages/Ppc';
import Contentmrkt from './pages/Content_mrkt';
import Portfolio from './pages/Portfolio';
import DigiMrktAgency from './pages/Digi_mrkt_agency';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/website-solution" element={<Websoln />} />
        <Route path="/digital-marketing" element={<Digimrkt />} />
        <Route path="/digital-marketing-agency" element={<DigiMrktAgency />} />
        <Route path="/digital-marketing/search-engine" element={<SearchEngine />} />
        <Route path="/digital-marketing/social-media" element={<SocialMedia />} />
        <Route path="/digital-marketing/ppc" element={<Ppc />} />
        <Route path="/digital-marketing/content-marketing" element={<Contentmrkt />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-and-policy" element={<Privacy />} />
        <Route path="/printer" element={<Printers />} />
        <Route path="/rental" element={<Printers />} />
        <Route path="/product/printer" element={<Printers />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/consumables" element={<Consumables />}/>
        <Route path="/maximizing-your-social-media-presence-tips-from-a-top-uae-agency" element={<Blog1 />} />
        <Route path="/product/:model" element={<ProductDetail products={products} />} />
        <Route path="/consumables/:consumableName" element={<ConsumableDetail consumables={consumables} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;