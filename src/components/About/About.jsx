import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/shivam_img.jpeg';
import { useScrollTrigger, useScrollCounter } from '../../hooks/useScrollTrigger';

const About = () => {
  const [ref, isVisible] = useScrollTrigger();
  
  // Counters that animate when scrolled into view
  const projects = useScrollCounter(10, isVisible, 2000);
  const skills = useScrollCounter(15, isVisible, 2000);
  const hackathons = useScrollCounter(4, isVisible, 2000);
  const certs = useScrollCounter(5, isVisible, 2000);

  const premiumAnimations = `
    @keyframes glitch {
      0%, 100% { text-shadow: 0 0 10px #8245ec, -2px 0 #ff006e, 2px 0 #00f5ff; }
      20% { text-shadow: 2px 0 #8245ec, -2px 0 #ff006e, 0 0 #00f5ff; }
      40% { text-shadow: -2px 0 #8245ec, 2px 0 #ff006e, -2px 0 #00f5ff; }
      60% { text-shadow: 0 0 20px #8245ec, -2px 0 #3a9fff, 2px 0 #ff006e; }
      80% { text-shadow: 2px 0 #ff006e, -2px 0 #00f5ff, 0 0 #8245ec; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes neon-glow {
      0%, 100% { box-shadow: 0 0 5px #8245ec, 0 0 10px #8245ec; }
      50% { box-shadow: 0 0 20px #8245ec, 0 0 30px #00f5ff; }
    }
    @keyframes popIn {
      0% { opacity: 0; transform: scale(0) rotate(-180deg); }
      100% { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    .glitch-text { animation: glitch 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite; }
    .float-icon { animation: float 3s ease-in-out infinite; }
    .neon-btn { animation: neon-glow 2s ease-in-out infinite; }
    .stat-card { animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards; }
    .stat-number { color: #00f5ff; font-weight: 900; text-shadow: 0 0 10px #00f5ff, 0 0 20px #8245ec; }
  `;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      data-reveal
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <style>{premiumAnimations}</style>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center" data-reveal>
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="glitch-text text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
            Shivam Pandey
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am </span>
            <ReactTypingEffect
              text={[
                'a Fullstack Developer',
                'an Android Developer',
                'a Swing Trader',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Full Stack & Android Developer building scalable solutions with React, Node.js, and Kotlin. 
            B.Tech CS student at LPU with strong DSA fundamentals and hands-on development experience. 
            Passionate about end-to-end solutions, trading markets, and innovative tech.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => scrollToSection('work')}
              className="text-white py-3 px-7 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-fuchsia-500"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white py-3 px-7 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105 border border-purple-500/70 bg-[#140d2e]"
            >
              Get in Touch
            </button>
            <a
              href="/Shivam_CV.pdf"
              download="Shivam_CV.pdf"
              className="text-white py-3 px-7 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105 border border-white/20"
            >
              Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5 justify-center md:justify-start text-gray-300">
            <a
              href="https://github.com/storm309"
              target="_blank"
              rel="noopener noreferrer"
              className="float-icon hover:text-[#8245ec] transition-colors duration-300 text-2xl"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/pandey--shivam/"
              target="_blank"
              rel="noopener noreferrer"
              className="float-icon hover:text-[#8245ec] transition-colors duration-300 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:shivampandeyofficial01@gmail.com"
              className="float-icon hover:text-[#8245ec] transition-colors duration-300 text-2xl"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full neon-btn"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shivam Pandey"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] hover:drop-shadow-[0_0_40px_rgba(0,245,255,0.6)] transition-all duration-300"
            />
          </Tilt>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4" ref={ref} data-reveal>
        {[
          { label: 'Projects Completed', value: projects },
          { label: 'Skills Mastered', value: skills },
          { label: 'Hackathons & Events', value: hackathons },
          { label: 'Certifications', value: certs },
        ].map((item, i) => (
          <div
            key={item.label}
            className="stat-card rounded-xl border border-white/10 bg-[#110a26] p-4 text-center shadow-[0_0_20px_rgba(130,69,236,0.15)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all duration-300 transform hover:scale-110"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <p className="stat-number text-2xl sm:text-3xl font-black">{item.value}+</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
