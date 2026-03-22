import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [ref, isVisible] = useScrollTrigger();

  const animationsStyle = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeInGlow {
      from {
        opacity: 0;
        box-shadow: 0 0 0 rgba(130, 69, 236, 0);
      }
      to {
        opacity: 1;
        box-shadow: 0 0 20px rgba(130, 69, 236, 0.2);
      }
    }
    @keyframes shimmerForm {
      0% {
        border-color: #4f46e5;
      }
      50% {
        border-color: #8b5cf6;
      }
      100% {
        border-color: #4f46e5;
      }
    }
    .contact-card {
      animation: ${isVisible ? 'slideUp' : 'none'} 0.5s ease-out forwards;
    }
    .contact-form {
      animation: ${isVisible ? 'fadeInGlow' : 'none'} 0.8s ease-out forwards;
    }
    .form-input:focus {
      animation: ${isVisible ? 'shimmerForm' : 'none'} 2s ease-in-out infinite;
    }
  `;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s9njseb",
        "template_u28lwup",
        form.current,
        "lPm4zGUVXZZxiftVb"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "shivamkumarp447@gmail.com",
      href: "mailto:shivamkumarp447@gmail.com",
    },
    {
      icon: <FaPhone size={20} />,
      label: "Phone",
      value: "+91 8252980774",
      href: "tel:+918252980774",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Location",
      value: "Phagwara, Punjab, India",
      href: null,
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      value: "pandey--shivam",
      href: "https://www.linkedin.com/in/pandey--shivam/",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "github.com/storm309",
      href: "https://github.com/storm309",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      data-reveal
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <style>{animationsStyle}</style>
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I am open to internships, collaborations, and freelance opportunities.
        </p>
      </div>

      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8">

        {/* Left – Contact Info Cards */}
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
          <p className="text-gray-400 text-sm mb-2">
            Let&apos;s build useful and scalable products together. Reach out via any of the channels below.
          </p>
          {contactInfo.map((item, i) => (
            <div
              key={i}
              className="contact-card flex items-center gap-4 rounded-xl border border-white/10 bg-[#100a24] p-4 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-purple-400 flex-shrink-0 hover:scale-125 transition-transform duration-300">{item.icon}</div>
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-gray-200 text-sm hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-200 text-sm">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right – Contact Form */}
        <div className="contact-form lg:w-1/2 bg-gradient-to-br from-[#0d081f] to-[#1a0f3a] p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Send Me a Message <span className="ml-1 animate-bounce">🚀</span>
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="form-input w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="form-input w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="form-input w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="form-input w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 py-3 text-white font-semibold rounded-md hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;