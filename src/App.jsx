import "./index.css";
import Pic1 from "./assets/images/Pic1.jpg";
import Pic2 from "./assets/images/Pic2.jpg";
import Pic3 from "./assets/images/Pic3.jpg";
import Pic4 from "./assets/images/Pic4.jpg";
import ScrollAnimation from "./components/ScrollAnimation";
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import "./App.css";
import "./index.css";
import React from "react";

function App() {
  const imageLabel = (title) => {
    return (
      <div className="absolute left-0 bottom-[5%] text-5xl font-semibold text-white capitalize bg-black/35 backdrop-blur-md px-20 py-4 rounded-r-2xl">
        {title}
      </div>
    );
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideInterval, setSlideInterval] = useState(null);

  useEffect(() => {
    // Handle modal overflow
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";

    // Handle slide interval
    let interval;
    if (!isModalOpen) {
      interval = setInterval(() => {
        setCurrentSlide((current) => (current === 3 ? 0 : current + 1));
      }, 4000);
      setSlideInterval(interval);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
      if (interval) clearInterval(interval);
    };
  }, [isModalOpen]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    // Reset the interval
    if (slideInterval) {
      clearInterval(slideInterval);
    }
    const newInterval = setInterval(() => {
      setCurrentSlide((current) => (current === 3 ? 0 : current + 1));
    }, 4000);
    setSlideInterval(newInterval);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      {/* Hero Section - White Background */}
      <section className="bg-white py-5 sm:py-10">
        <div className="flex justify-center items-center">
          <div
            className="relative flex items-start justify-start overflow-hidden rounded-2xl shadow-2xl mx-2 sm:mx-8"
            style={{
              height: "calc(100vh - 4rem)",
              width: "calc(100vw - 1rem)",
            }}
          >
            {/* Image Slider Container */}
            <div
              className="absolute inset-0 w-full"
              style={{
                height: "calc(100vh - 4rem)",
              }}
            >
              <div
                className="relative w-[400vw] overflow-hidden top-0 flex flex-row items-center justify-start slide-container transition-transform duration-500"
                style={{
                  height: "calc(100vh - 4rem)",
                  "--current-slide": currentSlide,
                }}
              >
                {/* Image Slides */}
                {[Pic1, Pic2, Pic3, Pic4].map((pic, index) => (
                  <div key={index} className="relative w-screen h-full">
                    <img
                      src={pic}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* {imageLabel(`P. ${index + 1}`)} */}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
                    currentSlide === index
                      ? "bg-white scale-125 ring-2 ring-blue-400"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Hero Content */}
            <div className="absolute top-1/2 right-4 sm:right-12 -translate-y-1/2 z-10 flex flex-col items-end gap-2 bg-white/95 backdrop-blur-sm px-6 sm:px-12 py-6 sm:py-10 rounded-2xl shadow-2xl opacity-0 animate-slideUp">
              <h1 className="text-3xl sm:text-6xl font-bold text-black tracking-tight leading-tight">
                REALTY <span className="text-blue-600">SECTORS</span>
              </h1>
              <span className="border-b border-gray-400 w-full" />
              <p className="text-sm sm:text-lg text-gray-700 tracking-wide max-w-xl text-right">
                Connecting You to Your Dream Property –{" "}
                <span className="font-semibold">Where Deals Meet Desires!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creatives Section - Gray Background */}
      <section className="bg-gray-100 py-8 sm:py-16">
        <ScrollAnimation>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
              {/* Left Side - Headings */}
              <div className="flex flex-col items-center sm:items-end gap-4 flex-1">
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                  Chandigarh Creatives
                </h2>
                <div className="border-b border-gray-300 w-[250px] sm:w-[330px]" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
                  Mohali Creatives
                </h2>
              </div>

              {/* Divider - Hidden on mobile */}
              <div className="hidden sm:block h-32 w-px bg-gray-300"></div>

              {/* Right Side - Paragraph */}
              <div className="flex-1 max-w-md text-center sm:text-left">
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
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
      <section className="bg-white py-16">
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-4">
            <div className="flex-1 min-w-[300px] max-w-md p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Prime Location
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Strategic properties located in the heart of Tricity, offering
                excellent connectivity and proximity to essential amenities.
              </p>
            </div>
            <div className="flex-1 min-w-[300px] max-w-md p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Investment Growth
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Benefit from the rapidly developing Mohali region with
                properties that promise strong appreciation potential.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white pt-8 sm:pt-16 pb-8">
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
                  <li>123 Real Estate Avenue</li>
                  <li>Chandigarh, 160001</li>
                  <li>Phone: +91 123 456 7890</li>
                  <li>Email: info@realtysectors.com</li>
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
