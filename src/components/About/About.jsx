import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../assets/profile2.png';

const About = () => {
  const quickStats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Skills Mastered', value: '15+' },
    { label: 'Hackathons & Events', value: '4+' },
    { label: 'Certifications', value: '10+' },
  ];

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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center" data-reveal>
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
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
            I am a Computer Science student who builds full stack and Android projects,
            solves DSA problems regularly, and enjoys turning ideas into practical,
            user-friendly products.
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
              href="https://drive.google.com/file/d/1eSyR36aMtjwDqsbVN-hUhKMqNX44INNn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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
              className="hover:text-[#8245ec] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pandey--shivam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8245ec] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:shivampandeyofficial01@gmail.com"
              className="hover:text-[#8245ec] transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
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
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4" data-reveal>
        {quickStats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-[#110a26] p-4 text-center shadow-[0_0_20px_rgba(130,69,236,0.15)]"
          >
            <p className="text-2xl sm:text-3xl font-bold text-white">{item.value}</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
