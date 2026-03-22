import React from "react";
import { experiences } from "../../constants";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const Experience = () => {
  const [ref, isVisible] = useScrollTrigger();
  const animationsStyle = `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .experience-card {
      animation: ${isVisible ? 'fadeInScale' : 'none'} 0.6s ease-out forwards;
    }
    .experience-card-even {
      animation: ${isVisible ? 'slideInRight' : 'none'} 0.6s ease-out forwards;
    }
    .experience-card-odd {
      animation: ${isVisible ? 'slideInLeft' : 'none'} 0.6s ease-out forwards;
    }
  `;

  return (
    <section
      id="experience"
      ref={ref}
      data-reveal
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <style>{animationsStyle}</style>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACTIVITIES & INVOLVEMENT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A dedicated and creative problem-solver with a keen interest in full-stack and mobile application development.
          My focus is on leveraging modern technologies to build user-centric products.
          I am a quick learner, thrive in collaborative settings, and am ready to make a tangible
          contribution to a development team.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-10 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_1px_rgba(130,69,236,0.5)] experience-card ${index % 2 === 0 ? "experience-card-even" : "experience-card-odd"}`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-gradient-to-r from-[#8245ec] to-purple-600 text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-purple-400 hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
