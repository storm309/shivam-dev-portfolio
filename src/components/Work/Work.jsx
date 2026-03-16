import { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Manually find SportNova and Risklens to feature them
  const featuredProjects = projects.filter(p => p.title.includes("SportNova") || p.title.includes("Risklens"));
  const otherProjects = projects.filter(p => !p.title.includes("SportNova") && !p.title.includes("Risklens"));

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
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener("keydown", handleKey);
    }
  }, [selectedProject]);

  return (
    <section
      id="work"
      data-reveal
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Featured Projects</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Here are some of the projects I&apos;m most proud of.
        </p>
      </div>

      {/* Top Featured Projects */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-10">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#111827] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/20 transition-shadow duration-300 group"
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-800 text-xs font-semibold text-cyan-400 rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 items-center mt-4 text-sm font-medium text-gray-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-cyan-400 transition-colors"
                >
                  GitHub &rarr;
                </a>
                {project.webapp && project.webapp !== "#" && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Live Demo &rarr;
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "More Projects" Button */}
      {!showMore && otherProjects.length > 0 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-2 rounded-md bg-gray-800 text-gray-300 text-base font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            View All Projects
          </button>
        </div>
      )}

      {/* Other Projects – shown on click */}
      {showMore && otherProjects.length > 0 && (
        <div className="mt-16">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="bg-[#111827] rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-purple-500/20 transition-shadow duration-300 group"
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300">{project.title}</h4>
                  <p className="text-gray-400 line-clamp-3 mb-4">{project.description}</p>
                  <div className="mt-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-800 text-xs font-semibold text-cyan-400 rounded-full px-3 py-1 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                   <div className="flex gap-6 items-center mt-4 text-sm font-medium text-gray-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      GitHub &rarr;
                    </a>
                    {project.webapp && project.webapp !== "#" && (
                      <a
                        href={project.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal – click backdrop or press Escape to close */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#100a22] border border-purple-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <div className="flex justify-between items-start gap-3 p-4 border-b border-purple-800/30 flex-shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 flex-1">
                {selectedProject.title}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 text-2xl font-bold hover:text-cyan-300 transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Content - Scrollable */}
            <div className="overflow-y-auto flex-1 p-4 sm:p-5">
              <p className="text-gray-300 mb-4 text-xs sm:text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Role / Challenges / Impact */}
              {selectedProject.role && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">My Role</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{selectedProject.role}</p>
                </div>
              )}
              {selectedProject.challenges && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Key Challenges</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{selectedProject.challenges}</p>
                </div>
              )}
              {selectedProject.impact && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Impact</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{selectedProject.impact}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs font-semibold text-cyan-400 rounded-full px-2 sm:px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-purple-800/20">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-purple-700 text-gray-300 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors mt-2"
                >
                  View Code
                </a>
                {selectedProject.webapp && selectedProject.webapp !== "#" ? (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors mt-2"
                  >
                    View Live
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 text-center bg-gray-700 text-gray-400 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold cursor-not-allowed mt-2"
                  >
                    Live Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
