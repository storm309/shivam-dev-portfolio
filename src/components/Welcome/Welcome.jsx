import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
      <div className="flex items-center gap-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-4 rounded-lg shadow-2xl border border-cyan-400/50 backdrop-blur-md">
        <div>
          <p className="text-sm sm:text-base font-semibold">Welcome to My Portfolio! 👋</p>
          <p className="text-xs sm:text-sm text-gray-100 mt-1">Explore my work, projects & achievements</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:bg-white/20 p-2 rounded-full transition-all"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
