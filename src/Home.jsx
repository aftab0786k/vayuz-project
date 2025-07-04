import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import FlutterHeroSection from './components/FlutterHeroSection';
import History from './components/History';
import ServiceSection from './components/ServiceSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col lg:flex-row flex-1 w-full mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:min-w-[260px] lg:max-w-[300px] bg-[#181818] flex justify-center py-5 border-r border-white/20">
          <Sidebar />
        </aside>

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col gap-10 min-h-screen">
          <Header />
          <FlutterHeroSection />
          <History />
          <ServiceSection />
          <ContactSection className="m-1.5"/>
        </main>
      </div>
    </div>
  );
};

export default Home;