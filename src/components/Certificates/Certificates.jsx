import { useState, useEffect } from "react";
import { certificates } from "../../constants";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const Certificates = () => {
    const [ref, isVisible] = useScrollTrigger();
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    // Handle ESC key and auto-close after 15 seconds
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setSelectedCertificate(null);
            }
        };
        
        if (selectedCertificate) {
            document.body.style.overflow = 'hidden';
            window.addEventListener("keydown", handleEsc);
            
            // Auto-close after 15 seconds
            const autoCloseTimer = setTimeout(() => {
                setSelectedCertificate(null);
            }, 15000);
            
            return () => {
                document.body.style.overflow = 'auto';
                window.removeEventListener("keydown", handleEsc);
                clearTimeout(autoCloseTimer);
            };
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedCertificate]);
    return (
        <section
            id="certificates"
            ref={ref}
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
                    animation: ${isVisible ? 'scroll' : 'none'} 30s linear infinite;
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
                            onClick={() => setSelectedCertificate(cert)}
                            className="rounded-lg border border-purple-800/30 bg-[#111827] p-5 hover:border-purple-700/50 transition duration-300 group overflow-hidden flex-shrink-0 w-80 cursor-pointer hover:shadow-lg hover:shadow-purple-500/30"
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
                            onClick={() => setSelectedCertificate(cert)}
                            className="rounded-lg border border-purple-800/30 bg-[#111827] p-5 hover:border-purple-700/50 transition duration-300 group overflow-hidden flex-shrink-0 w-80 cursor-pointer hover:shadow-lg hover:shadow-purple-500/30"
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

            {/* Modal for Full Certificate View */}
            {selectedCertificate && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <style>{`
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                            }
                            to {
                                opacity: 1;
                            }
                        }
                        @keyframes slideUp {
                            from {
                                opacity: 0;
                                transform: translateY(30px) scale(0.95);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0) scale(1);
                            }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 0.3s ease-out;
                        }
                        .modal-content {
                            animation: slideUp 0.3s ease-out;
                        }
                    `}</style>
                    
                    <div 
                        className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-purple-500/30 max-w-2xl w-full shadow-2xl shadow-purple-500/20 modal-content relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white p-2 rounded-full transition-colors duration-200 z-10"
                            title="Close (ESC)"
                        >
                            <FaTimes size={20} />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6">
                            {/* Certificate Image */}
                            {selectedCertificate.image && (
                                <div className="mb-4 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center max-h-72">
                                    <img
                                        src={selectedCertificate.image}
                                        alt={selectedCertificate.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )}

                            {/* Certificate Details */}
                            <div className="space-y-3">
                                {/* Title and Issuer */}
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        {selectedCertificate.title}
                                    </h2>
                                    <p className="text-base text-cyan-400 font-semibold">
                                        {selectedCertificate.issuer}
                                    </p>
                                </div>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <span>📅 Issued: {selectedCertificate.date}</span>
                                </div>

                                {/* Tags */}
                                {selectedCertificate.tags && selectedCertificate.tags.length > 0 && (
                                    <div className="mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCertificate.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-purple-900/40 border border-purple-500/40 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Close Button */}
                                <div className="flex gap-3 mt-6 flex-wrap">
                                    <button
                                        onClick={() => setSelectedCertificate(null)}
                                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
