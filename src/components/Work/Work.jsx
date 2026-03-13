import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const topProject = projects[0];
  const otherProjects = projects.slice(1);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject]);

  return (
    <section
      id="work"
      data-reveal
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">FEATURED PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A curated showcase of projects that represent my strongest practical work.
        </p>
      </div>

      {/* Top Featured Project */}
      <div className="grid gap-8 grid-cols-1 mb-10">
        {topProject && (
          <div
            key={topProject.id}
            onClick={() => handleOpenModal(topProject)}
            className="border border-white/20 bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 transition-transform duration-300 max-w-4xl mx-auto"
          >
            <div className="w-full h-20 sm:h-24 bg-gradient-to-r from-purple-900/70 via-[#1a0d3a] to-fuchsia-900/40 flex items-center px-6 border-b border-purple-500/20">
              <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Featured Project</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-2">{topProject.date}</p>
              <h3 className="text-2xl font-bold text-white mb-2">
                {topProject.title}
              </h3>
              <p className="text-gray-300 mb-4 pt-2 line-clamp-3">
                {topProject.description}
              </p>
              <div className="mb-4">
                {topProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <a
                  href={topProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 rounded-lg bg-[#20163f] text-gray-200 text-sm font-semibold hover:bg-[#2b1c57]"
                >
                  GitHub
                </a>
                {topProject.webapp && topProject.webapp !== "#" && (
                  <a
                    href={topProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other Projects – always visible in a grid */}
      {otherProjects.length > 0 && (
        <>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">More Projects</h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="border border-white/15 bg-[#120c27] rounded-2xl p-6 cursor-pointer hover:border-purple-500/50 hover:-translate-y-1 transition duration-300"
              >
                <p className="text-xs text-gray-400 mb-2">{project.date}</p>
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 line-clamp-3">{project.description}</p>
                <div className="mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal – click backdrop or press Escape to close */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                {/* Role / Challenges / Impact */}
                {selectedProject.role && (
                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-1">My Role</h4>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">{selectedProject.role}</p>
                  </div>
                )}
                {selectedProject.challenges && (
                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-1">Key Challenges</h4>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">{selectedProject.challenges}</p>
                  </div>
                )}
                {selectedProject.impact && (
                  <div className="mb-5">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-1">Impact</h4>
                    <p className="text-gray-300 lg:text-sm text-xs leading-relaxed">{selectedProject.impact}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  {selectedProject.webapp && selectedProject.webapp !== "#" ? (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-1/2 bg-purple-900/50 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center cursor-not-allowed"
                    >
                      Live Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
