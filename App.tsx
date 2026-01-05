import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ClubInfo from './components/ClubInfo';
import Program from './components/Program';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-brand-dark bg-brand-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Gallery />
        <Location />
        <FAQ />
        <ClubInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;