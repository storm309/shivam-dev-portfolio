// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const Skills = () => {
  const [ref, isVisible] = useScrollTrigger();
  const scrollingStyles = `
    @keyframes scrollSkills {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .skills-carousel {
      animation: ${isVisible ? 'scrollSkills' : 'none'} 45s linear infinite;
    }
    .skills-carousel:hover {
      animation-play-state: paused;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .skill-item {
      animation: ${isVisible ? 'fadeInUp' : 'none'} 0.6s ease-out forwards;
    }
  `;

  return (
    <section
      id="skills"
      ref={ref}
      data-reveal
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <style>{scrollingStyles}</style>
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Horizontal Scrolling Skill Categories */}
      <div className="relative overflow-hidden rounded-lg mt-10 mb-4">
        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex gap-6 skills-carousel" style={{ width: 'fit-content' }}>
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02] flex-shrink-0 w-80"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:border-purple-500/60 transition-colors duration-200"
                  >
                    {skill.isText ? (
                      <span className="text-xs sm:text-sm text-yellow-400 font-bold px-2">
                        {skill.name}
                      </span>
                    ) : skill.logo ? (
                      <>
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span className="text-xs sm:text-sm text-gray-300">
                          {skill.name}
                        </span>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Duplicate for seamless loop */}
          {SkillsInfo.map((category) => (
            <div
              key={`duplicate-${category.title}`}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.02] flex-shrink-0 w-80"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>

              {/* Skill Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:border-purple-500/60 transition-colors duration-200"
                  >
                    {skill.isText ? (
                      <span className="text-xs sm:text-sm text-yellow-400 font-bold px-2">
                        {skill.name}
                      </span>
                    ) : skill.logo ? (
                      <>
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span className="text-xs sm:text-sm text-gray-300">
                          {skill.name}
                        </span>
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
