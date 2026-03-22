import { certificates } from "../../constants";
import { FaCheckCircle, FaDownload, FaEye } from "react-icons/fa";

const Certificates = () => {
    return (
        <section
            id="certificates"
            data-reveal
            className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-cyan-400">Certificates</h2>
                <p className="text-gray-400 mt-4 text-lg">
                    Verified credentials from leading platforms and institutions.
                </p>
            </div>

            {/* Horizontal Scrolling Carousel */}
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .carousel-container {
                    animation: scroll 30s linear infinite;
                }
                .carousel-container:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="relative overflow-hidden rounded-lg">
                {/* Gradient Fade Effect Left */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                
                {/* Gradient Fade Effect Right */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling Container */}
                <div className="flex gap-6 carousel-container" style={{ width: 'fit-content' }}>
                    {/* Original certificates */}
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="rounded-lg border border-purple-800/30 bg-[#111827] p-5 hover:border-purple-700/50 transition duration-300 group overflow-hidden flex-shrink-0 w-80"
                        >
                            {/* Certificate Image */}
                            {cert.image && (
                                <div className="mb-4 rounded-lg overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow duration-300">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            {cert.pdf && !cert.image && (
                                <div className="mb-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 aspect-video flex flex-col items-center justify-center p-4 group-hover:border-purple-400/50 transition duration-300">
                                    <div className="text-4xl mb-3 text-cyan-400">📄</div>
                                    <p className="text-sm text-gray-300 text-center mb-3">PDF Certificate</p>
                                    <div className="flex gap-2">
                                        <a
                                            href={cert.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                                        >
                                            <FaEye size={12} /> View
                                        </a>
                                        <a
                                            href={cert.pdf}
                                            download
                                            className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-xs font-semibold transition-colors"
                                        >
                                            <FaDownload size={12} /> Download
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Header row */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-cyan-400 text-xs font-semibold mt-1">
                                        {cert.issuer}
                                    </p>
                                </div>
                                {/* Completed badge */}
                                <span className="flex items-center gap-1 bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                                    <FaCheckCircle size={10} />
                                    Done
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {cert.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-800 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Footer meta */}
                            <div className="mt-3 text-xs text-gray-500">
                                <span>Issued: {cert.date}</span>
                            </div>
                        </div>
                    ))}

                    {/* Duplicate certificates for seamless loop */}
                    {certificates.map((cert) => (
                        <div
                            key={`duplicate-${cert.id}`}
                            className="rounded-lg border border-purple-800/30 bg-[#111827] p-5 hover:border-purple-700/50 transition duration-300 group overflow-hidden flex-shrink-0 w-80"
                        >
                            {/* Certificate Image */}
                            {cert.image && (
                                <div className="mb-4 rounded-lg overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow duration-300">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}
                            {cert.pdf && !cert.image && (
                                <div className="mb-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/30 aspect-video flex flex-col items-center justify-center p-4 group-hover:border-purple-400/50 transition duration-300">
                                    <div className="text-4xl mb-3 text-cyan-400">📄</div>
                                    <p className="text-sm text-gray-300 text-center mb-3">PDF Certificate</p>
                                    <div className="flex gap-2">
                                        <a
                                            href={cert.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
                                        >
                                            <FaEye size={12} /> View
                                        </a>
                                        <a
                                            href={cert.pdf}
                                            download
                                            className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-xs font-semibold transition-colors"
                                        >
                                            <FaDownload size={12} /> Download
                                        </a>
                                    </div>
                                </div>
                            )}

                            {/* Header row */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-white leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-cyan-400 text-xs font-semibold mt-1">
                                        {cert.issuer}
                                    </p>
                                </div>
                                {/* Completed badge */}
                                <span className="flex items-center gap-1 bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                                    <FaCheckCircle size={10} />
                                    Done
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {cert.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-800 text-cyan-400 text-xs font-semibold px-2 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Footer meta */}
                            <div className="mt-3 text-xs text-gray-500">
                                <span>Issued: {cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
