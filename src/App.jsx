import "./index.css";
import Pic1 from "./assets/images/Pic1.jpg";
import Pic2 from "./assets/images/Pic2.jpg";
import Pic3 from "./assets/images/Pic3.jpg";
import Pic4 from "./assets/images/Pic4.jpg";
import ScrollAnimation from "./components/ScrollAnimation";
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";
import "./index.css";
import React from "react";
import logo from "./assets/images/image-wo-bg.png";
import {
  FaChartLine,
  FaBuilding,
  FaRoad,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaHandshake,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
  FaSun,
  FaMoon,
} from "react-icons/fa";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const imageLabel = (title) => {
    return (
      <div className="absolute left-0 bottom-[5%] text-5xl font-semibold text-white capitalize bg-black/35 backdrop-blur-md px-20 py-4 rounded-r-2xl">
        {title}
      </div>
    );
  };

  const logoMatchingColor = "#e0e71b";
  const logoMatchingColorHover = "#eef224";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set initial dark mode based on system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Handle modal overflow
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center py-1 px-2">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="z-50 w-10 h-10 p-2 rounded-full bg-white backdrop-blur-sm text-black dark:text-white dark:bg-gray-800/20 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <FaSun className="w-5 h-5" />
          ) : (
            <FaMoon className="w-5 h-5" />
          )}
        </button>
      </div>
      {/* Hero Section - White Background */}
      <section className="bg-white dark:bg-gray-900 pb-5 !pt-0 sm:py-10">
        <div className="flex justify-center items-center">
          <div
            className="relative flex items-start justify-start overflow-hidden rounded-3xl shadow-2xl mx-2 sm:mx-8"
            style={{
              height: "calc(100vh - 4rem)",
              width: "calc(100vw - 1rem)",
            }}
          >
            {/* Image Slider Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <FaArrowRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div
                className="relative w-full h-full flex"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.7s ease-in-out",
                }}
              >
                {[Pic1, Pic2, Pic3, Pic4].map((pic, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                    <img
                      src={pic}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 shadow ${
                    currentSlide === index
                      ? "bg-white w-4"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Hero Content */}
            <div className="absolute top-1/2 left-4 sm:left-8 md:left-16 -translate-y-1/2 z-10 flex flex-col items-start justify-between h-full py-20 md:py-auto md:h-auto sm:gap-4 max-w-xl px-4 sm:px-8 md:px-12">
              <div className="flex flex-col items-start gap-2 sm:gap-4">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-lg flex items-center gap-2">
                  <span className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg mr-2">
                    <img src={logo} alt="Logo" className="w-full h-full" />
                  </span>
                  REALTY{" "}
                  <span
                    className={`opacity-95`}
                    style={{
                      // text color
                      color: logoMatchingColor,
                    }}
                  >
                    SECTORS
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white tracking-wide drop-shadow-md sm:backdrop-blur-none backdrop-blur-sm rounded-xl font-semibold">
                  Connecting You to Your Dream Property –{" "}
                  <span className="font-semibold">
                    Where Deals Meet Desires!
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg text-sm sm:text-base"
                >
                  Get Started
                </button>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creatives Section - Gray Background */}
      <section className="py-16 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:from-transparent dark:via-gray-900/50 dark:to-transparent">
        <ScrollAnimation>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300 mb-4">
                    <FaChartLine className="text-blue-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Best Investment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Premium opportunities in Tricity near Chandigarh with
                    exceptional growth potential
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300 mb-4">
                    <FaBuilding className="text-green-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Premium Properties
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    High ROI potential in prime locations with modern amenities
                    and infrastructure
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300 mb-4">
                    <FaRoad className="text-purple-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Modern Infrastructure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Excellent connectivity and future-ready developments in
                    strategic locations
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300 mb-4">
                    <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Prime Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Strategic properties located in the heart of Tricity,
                    offering excellent connectivity and proximity to essential
                    amenities.
                  </p>
                </div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors duration-300 mb-4">
                    <FaHandshake className="text-red-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Trusted Service
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Experience reliable and transparent real estate services
                    with our expert team guiding you every step of the way.
                  </p>
                </div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-teal-500/10 rounded-full group-hover:bg-teal-500/20 transition-colors duration-300 mb-4">
                    <FaStar className="text-teal-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Best Customer Service
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Experience reliable and transparent real estate services
                    with our expert team guiding you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-8 sm:pt-16 pb-8">
        <ScrollAnimation>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-16">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <img src={logo} alt="Logo" className="w-8 h-8" />
                  Realty Sectors
                </h3>
                <p className="text-gray-400 mb-4">
                  Your trusted partner in real estate, helping you find your
                  perfect property in Tricity.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaMapMarkedAlt className={`text-[${logoMatchingColor}]`} />
                    SCO 671, Sector 70
                  </li>
                  <li className="flex items-center gap-2">
                    {/* <FaMapMarkedAlt className="text-blue-500" /> */}
                    Mohali, 160071
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone className={`text-[${logoMatchingColor}]`} />
                    +91 883 750 8020
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope className={`text-[${logoMatchingColor}]`} />
                    realtysectors@gmail.com
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`text-black py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2`}
                  style={{
                    backgroundColor: logoMatchingColor,
                    hover: {
                      backgroundColor: logoMatchingColorHover,
                    },
                  }}
                >
                  <FaEnvelope />
                  Contact Us
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Realty Sectors. All rights
                reserved.
              </p>
            </div>
          </div>
        </ScrollAnimation>
        <ContactModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          logoMatchingColor={logoMatchingColor}
          logoMatchingColorHover={logoMatchingColorHover}
        />
      </footer>
    </div>
  );
}

export default App;
