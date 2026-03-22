import { useEffect } from "react";
import Splash from "./components/Splash/Splash";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[#050414]">
      <Splash />

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <BlurBlob position={{ top: '65%', right: '10%' }} size={{ width: '25%', height: '35%' }} />
      <BlurBlob position={{ top: '85%', left: '15%' }} size={{ width: '20%', height: '30%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Achievements />
        <Certificates />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
