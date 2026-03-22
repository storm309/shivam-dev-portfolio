import React from "react";
import { achievements } from "../../constants";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const Achievements = () => {
  const [ref, isVisible] = useScrollTrigger();
  const animationsStyle = `
    @keyframes scrollHorizontal {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .achievements-carousel {
      animation: ${isVisible ? 'scrollHorizontal' : 'none'} 35s linear infinite;
    }
    .achievements-carousel:hover {
      animation-play-state: paused;
    }
    @keyframes zoomIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .achievement-card {
      animation: ${isVisible ? 'zoomIn' : 'none'} 0.5s ease-out forwards;
    }
  `;

  return (
    <section
      id="achievements"
      ref={ref}
      data-reveal
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <style>{animationsStyle}</style>
      <div className="text-center mb-12" data-reveal>
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Milestones that reflect growth in coding, collaboration, and product development.
        </p>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="relative overflow-hidden rounded-lg">
        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling Container */}
        <div className="flex gap-6 achievements-carousel" style={{ width: 'fit-content' }}>
          {achievements.map((item) => (
            <article
              key={item.id}
              className="achievement-card rounded-2xl border border-white/15 bg-[#120c27] p-6 shadow-[0_0_30px_rgba(130,69,236,0.12)] hover:border-purple-400/60 transition duration-300 flex-shrink-0 w-96 hover:shadow-[0_0_50px_rgba(130,69,236,0.25)]"
            >
              <p className="text-sm font-semibold text-purple-400">{item.metric}</p>
              <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.detail}</p>
            </article>
          ))}

          {/* Duplicate for seamless loop */}
          {achievements.map((item) => (
            <article
              key={`duplicate-${item.id}`}
              className="achievement-card rounded-2xl border border-white/15 bg-[#120c27] p-6 shadow-[0_0_30px_rgba(130,69,236,0.12)] hover:border-purple-400/60 transition duration-300 flex-shrink-0 w-96 hover:shadow-[0_0_50px_rgba(130,69,236,0.25)]"
            >
              <p className="text-sm font-semibold text-purple-400">{item.metric}</p>
              <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
