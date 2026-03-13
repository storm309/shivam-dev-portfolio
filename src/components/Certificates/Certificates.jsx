import React from "react";
import { certificates } from "../../constants";
import { FaCheckCircle } from "react-icons/fa";

const Certificates = () => {
    return (
        <section
            id="certificates"
            data-reveal
            className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    Verified credentials from leading platforms and institutions.
                </p>
            </div>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        data-reveal
                        className="rounded-2xl border border-white/10 bg-[#0f0b24] p-6 shadow-[0_0_25px_rgba(130,69,236,0.12)] hover:border-purple-400/50 hover:-translate-y-1 transition duration-300"
                    >
                        {/* Header row */}
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white leading-snug">
                                    {cert.title}
                                </h3>
                                <p className="text-purple-400 text-sm font-semibold mt-1">
                                    {cert.issuer}
                                </p>
                            </div>
                            {/* Completed badge */}
                            <span className="flex items-center gap-1 bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                                <FaCheckCircle size={11} />
                                Completed
                            </span>
                        </div>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {cert.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="bg-[#251f38] text-purple-400 text-xs font-semibold px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Footer meta */}
                        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                            <span>Issued: {cert.date}</span>
                            <span className="font-mono">ID: {cert.credentialId}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
