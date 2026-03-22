import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const animationsStyle = `
    @keyframes slideDownFade {
      0% {
        opacity: 0;
        transform: translateY(-60px) scale(0.9);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes waveEmoji {
      0%, 100% {
        transform: rotate(0deg);
        animation-timing-function: ease-in-out;
      }
      50% {
        transform: rotate(20deg);
        transform-origin: 70% 70%;
      }
    }
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(130, 69, 236, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1);
      }
      50% {
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(130, 69, 236, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.2);
      }
    }
    @keyframes shimmerText {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }
    @keyframes floatUp {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes moveRight {
      0% {
        transform: translateX(-20px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .welcome-banner {
      animation: slideDownFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), pulse-glow 3s ease-in-out infinite 0.5s;
    }
    .emoji-wave {
      animation: waveEmoji 0.5s ease-in-out infinite 0.1s;
      display: inline-block;
    }
    .welcome-title {
      animation: moveRight 0.8s ease-out 0.2s forwards;
      opacity: 0;
      font-weight: 700;
      font-size: 1.1rem;
      background: linear-gradient(90deg, #fff, #00f5ff, #fff);
      background-size: 200% 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: moveRight 0.8s ease-out 0.2s forwards, shimmerText 3s ease-in-out infinite 0.5s;
    }
    .welcome-subtitle {
      animation: floatUp 0.8s ease-out 0.4s forwards;
      opacity: 0;
    }
    .close-btn {
      transition: all 0.3s ease;
    }
    .close-btn:hover {
      transform: rotate(90deg) scale(1.2);
      background-color: rgba(255, 59, 48, 0.3);
    }
  `;

  return (
    <>
      <style>{animationsStyle}</style>
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
        <div className="welcome-banner flex items-center gap-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-4 rounded-xl shadow-2xl border border-cyan-300/40 backdrop-blur-lg hover:shadow-cyan-500/50 transition-all duration-300">
          {/* Emoji with Wave Animation */}
          <div className="emoji-wave text-3xl sm:text-4xl flex-shrink-0">
            👋
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <p className="welcome-title">
              Welcome to My Portfolio!
            </p>
            <p className="welcome-subtitle text-xs sm:text-sm text-cyan-100 mt-1.5">
              Explore my work, projects & achievements
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="close-btn flex-shrink-0 hover:bg-white/20 p-2 rounded-full"
            title="Close (ESC)"
          >
            <FiX size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
