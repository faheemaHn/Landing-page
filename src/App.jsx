import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import ProjectManagement from './components/ProjectManagement';
import WorkTogether from './components/WorkTogether';
import UseExtension from './components/UseExtension';
import CustomizeSection from './components/CustomizeSection';
import ChoosePlanSection from './components/ChoosePlanSection';
import WorkAnywhereSection from './components/WorkAnywhereSection';
import YourDataSection from './components/YourDataSection';
import SponsorsSection from './components/SponsorsSection';
import AppSection from './components/AppSection';
import ClientSection from './components/ClientSection';
import FooterSection from './components/FooterSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectManagement />
      <WorkTogether />
      <UseExtension />
      <CustomizeSection />
      <ChoosePlanSection />
      <WorkAnywhereSection />
      <YourDataSection />
      <SponsorsSection />
      <AppSection />
      <ClientSection />
      <FooterSection />
    </div>
  );
}

export default App;
