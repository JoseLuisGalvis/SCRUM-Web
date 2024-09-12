// Ejecuta desde el archivo App.js con el Comando npm start

import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Lazy load components
const HomeSection = lazy(() => import("./components/HomeSection"));
const ArtefactosSection = lazy(() => import("./components/ArtefactosSection"));
const CeremoniasSection = lazy(() => import("./components/CeremoniasSection"));
const ContactGallerySection = lazy(() =>
  import("./components/ContactGallerySection")
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Cargando...</div>}>
        <HomeSection />
        <ArtefactosSection />
        <CeremoniasSection />
        <ContactGallerySection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
