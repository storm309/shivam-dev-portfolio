import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <section
      id="achievements"
      data-reveal
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="text-center mb-12" data-reveal>
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Milestones that reflect growth in coding, collaboration, and product development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <article
            key={item.id}
            data-reveal
            className="rounded-2xl border border-white/15 bg-[#120c27] p-6 shadow-[0_0_30px_rgba(130,69,236,0.12)] hover:border-purple-400/60 transition duration-300"
          >
            <p className="text-sm font-semibold text-purple-400">{item.metric}</p>
            <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
            <p className="text-gray-300 mt-3 leading-relaxed">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
