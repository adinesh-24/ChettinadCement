import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Blogs from './components/Blogs.jsx';
import GetInTouch from './components/GetInTouch.jsx';


import Resources from './components/Resources.jsx';
import Services from './components/Services.jsx';
import TechMobileVan from './components/TechMobileVan.jsx';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import VisionMission from './components/VisionMission.jsx';
import TamilNadu from './components/TamilNadu.jsx';
import AndhraPradesh from './components/AndhraPradesh.jsx';
import Karnataka from './components/Karnataka.jsx';
import Maharashtra from './components/Maharashtra.jsx';
import Telangana from './components/Telangana.jsx';

import MaxcretePremiumPPC from './components/MaxcretePremiumPPC.jsx';
import SuperGradePPC from './components/SuperGradePPC.jsx';
import HollowBlockCement from './components/HollowBlockCement.jsx';
import CompositeCement from './components/CompositeCement.jsx';
import OPC53Grade from './components/OPC53Grade.jsx';
import OPC43Grade from './components/OPC43Grade.jsx';
import ClassicSlagCement from './components/ClassicSlagCement.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';

import PageTitleUpdater from './components/PageTitleUpdater.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <PageTitleUpdater />
      <ScrollToTop />
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/plant/tamil-nadu" element={<TamilNadu />} />
        <Route path="/plant/andhra-pradesh" element={<AndhraPradesh />} />
        <Route path="/plant/karnataka" element={<Karnataka />} />
        <Route path="/plant/maharashtra" element={<Maharashtra />} />
        <Route path="/plant/telangana" element={<Telangana />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/getintouch" element={<GetInTouch />} />

        {/* Product Routes pointing to specific components */}
        <Route path="/products" element={<MaxcretePremiumPPC />} />
        {/* /products default to maxcrete for now or can be a landing page. Using Maxcrete as it was before effectively */}

        <Route path="/maxcrete-premium-ppc" element={<MaxcretePremiumPPC />} />
        <Route path="/super-grade-ppc" element={<SuperGradePPC />} />
        <Route path="/hollow-block-cement" element={<HollowBlockCement />} />
        <Route path="/composite-cement" element={<CompositeCement />} />
        <Route path="/opc-53-grade" element={<OPC53Grade />} />
        <Route path="/opc-43-grade" element={<OPC43Grade />} />
        <Route path="/classic-slag-cement" element={<ClassicSlagCement />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tech-mobile-van" element={<TechMobileVan />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
