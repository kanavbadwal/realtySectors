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
import Location from "./components/svg/Location";
import logo from "./assets/images/image-wo-bg.png";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const imageLabel = (title) => {
    return (
      <div className="absolute left-0 bottom-[5%] text-5xl font-semibold text-white capitalize bg-black/35 backdrop-blur-md px-20 py-4 rounded-r-2xl">
        {title}
      </div>
    );
  };

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
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-3 right-4 z-50 w-9 h-9 p-2 rounded-full bg-slate-100 backdrop-blur-sm text-white dark:bg-gray-800/20"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
      <div className="p-2" />
      {/* Hero Section - White Background */}
      <section className="bg-white dark:bg-gray-900 py-5 sm:py-10">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
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
                  <span className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg bg-white/50 mr-2">
                    <img src={logo} alt="Logo" className="w-full h-full" />
                  </span>
                  REALTY <span className="text-blue-400">SECTORS</span>
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
      <section className=" py-8 sm:py-16">
        <ScrollAnimation>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-16">
              {/* Left Side - Headings */}
              <div className="flex flex-col items-center sm:items-end gap-4 flex-1">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  Chandigarh Creatives
                </h2>
                <div className="border-b border-gray-300 w-[250px] sm:w-[330px]" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100">
                  Mohali Creatives
                </h2>
              </div>

              {/* Divider - Hidden on mobile */}
              <div className="hidden sm:block h-32 w-px bg-gray-300"></div>
              {/* Location Image */}
              <Location
                width={100}
                height={100}
                className="opacity-50 hidden sm:block dark:text-white"
              />
              {/* Divider - Hidden on mobile */}
              <div className="hidden sm:block h-32 w-px bg-gray-300"></div>
              <div className="block sm:hidden h-px w-[90%] bg-gray-300"></div>

              {/* Right Side - Paragraph */}
              <div className="flex-1 max-w-md text-center sm:text-left">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  Best Investment
                  <br />
                  Opportunities in Tricity
                  <br />
                  Near Chandigarh
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Features Section - White Background */}
      <section className="bg-gradient-to-b from-transparent via-slate-200 to-transparent dark:from-transparent dark:via-gray-800/80 dark:to-gray-700/80 py-16">
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
            <div className="flex-1 min-w-[300px] max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Prime Location
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Strategic properties located in the heart of Tricity, offering
                excellent connectivity and proximity to essential amenities.
              </p>
            </div>
            <div className="flex-1 min-w-[300px] max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Investment Growth
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Benefit from the rapidly developing Mohali region with
                properties that promise strong appreciation potential.
              </p>
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
                <h3 className="text-2xl font-bold mb-4">Realty Sectors</h3>
                <p className="text-gray-400 mb-4">
                  Your trusted partner in real estate, helping you find your
                  perfect property in Tricity.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>SCO 671, Sector 70</li>
                  <li>Mohali, 160071</li>
                  <li>Phone: +91 883 750 8020</li>
                  <li>Email: realtysectors@gmail.com</li>
                </ul>
              </div>

              {/* Contact Form */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
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
        />
      </footer>
    </div>
  );
}

export default App;
