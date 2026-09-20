import "./index.css";
import mohaliVilla from "./assets/images/mohali-villa.jpg";
import chandigarhApartment from "./assets/images/chandigarh-apartment.jpg";
import aerocityCommercial from "./assets/images/aerocity-commercial.jpg";
import panchkulaHome from "./assets/images/panchkula-home.jpg";
import newChandigarhTownship from "./assets/images/new-chandigarh-township.jpg";
import zirakpurHighrise from "./assets/images/zirakpur-highrise.jpg";
import ScrollAnimation from "./components/ScrollAnimation";
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";
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
  FaCompass,
  FaWhatsapp,
} from "react-icons/fa";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const logoMatchingColor = "#e0e71b";
  const logoMatchingColorHover = "#eef224";

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSlides = [
    {
      image: mohaliVilla,
      title: "Luxury Villas",
    },
    {
      image: chandigarhApartment,
      title: "Modern Sky Condominiums",
    },
    {
      image: aerocityCommercial,
      title: "Prime Commercial SCOs",
    },
    {
      image: newChandigarhTownship,
      title: "Master-Planned Townships",
    },
    {
      image: panchkulaHome,
      title: "Designer Duplex Homes",
    },
    {
      image: zirakpurHighrise,
      title: "Resort-Style Penthouses",
    },
  ];

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
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Auto advance hero slider every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 40;

  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNextSlide();
    }
    if (isRightSwipe) {
      handlePrevSlide();
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100 selection:bg-yellow-400 selection:text-black">
      {/* Top Bar / Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="container mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img src={logo} alt="Realty Sectors Logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-gray-900 dark:text-white">
              REALTY <span style={{ color: "#d1d609" }} className="dark:text-[#e0e71b]">SECTORS</span>
            </span>
          </div>

          {/* Quick Contact & Dark Mode */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Mobile Call Icon */}
            <a
              href="tel:+919875962200"
              className="flex sm:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Call +91 98759 62200"
            >
              <FaPhone className="text-yellow-500 text-xs" />
            </a>

            {/* Desktop Call Badge */}
            <a
              href="tel:+919875962200"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full transition-all border border-gray-200 dark:border-gray-700 hover:border-yellow-400"
            >
              <FaPhone className="text-yellow-500 text-xs" />
              <span>+91 98759 62200</span>
            </a>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-10 h-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pb-5 pt-3 sm:py-8">
        <div className="flex justify-center items-center">
          <div
            className="relative flex items-center justify-start overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl mx-2 sm:mx-6 md:mx-8 w-full max-w-7xl min-h-[540px] sm:min-h-[580px] md:min-h-[640px]"
            style={{
              height: "calc(88vh - 4rem)",
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image Slider Container */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* Navigation Arrows (Visible on sm/desktop with dedicated padding margin) */}
              <button
                onClick={handlePrevSlide}
                className="hidden sm:flex absolute left-3 sm:left-5 md:left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 items-center justify-center bg-black/50 hover:bg-black/80 text-white backdrop-blur-md rounded-full transition-all duration-300 group shadow-lg cursor-pointer border border-white/20 hover:scale-105"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNextSlide}
                className="hidden sm:flex absolute right-3 sm:right-5 md:right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 items-center justify-center bg-black/50 hover:bg-black/80 text-white backdrop-blur-md rounded-full transition-all duration-300 group shadow-lg cursor-pointer border border-white/20 hover:scale-105"
                aria-label="Next slide"
              >
                <FaArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>

              <div
                className="relative w-full h-full flex"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {heroSlides.map((slide, index) => (
                  <div key={index} className="relative w-full h-full flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-10" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Picture Title Badge - Positioned at top-right for a sleek, clean look */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-white shadow-xl">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-xs sm:text-sm font-semibold tracking-wide">
                        {slide.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-5 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 shadow ${
                    currentSlide === index ? "bg-yellow-400 w-6 sm:w-8" : "bg-white/40 hover:bg-white/70 w-2 sm:w-2.5"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-start justify-center max-w-2xl px-5 sm:pl-20 sm:pr-8 md:pl-24 md:pr-10 lg:pl-28 py-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-yellow-400/20 backdrop-blur-md border border-yellow-400/40 text-yellow-300 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                <FaCompass className="text-yellow-400 text-xs sm:text-sm" />
                <span>Prime Real Estate in Chandigarh & Tricity</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg mb-3 sm:mb-4">
                REALTY{" "}
                <span
                  style={{
                    color: logoMatchingColor,
                  }}
                >
                  SECTORS
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-100 tracking-wide drop-shadow-md backdrop-blur-sm sm:backdrop-blur-none rounded-xl font-medium leading-relaxed mb-6">
                Connecting You to Your Dream Property –{" "}
                <span className="font-semibold text-yellow-300">
                  Where Deals Meet Desires!
                </span>{" "}
                Discover verified luxury villas, sky condominiums, commercial SCOs, and premium plots across Tricity.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaEnvelope /> Get a Consultation
                </button>
                <WhatsAppButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creatives / Value Proposition Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-gray-50 to-transparent dark:from-transparent dark:via-gray-900/50 dark:to-transparent">
        <ScrollAnimation>
          <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                Why Choose Realty Sectors?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Unmatched market expertise in Tricity property acquisitions, sales, and investments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300 mb-4">
                    <FaChartLine className="text-yellow-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Best Investment ROI
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Premium high-growth opportunities across Chandigarh, Mohali & Zirakpur corridors.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300 mb-4">
                    <FaBuilding className="text-green-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Verified Premium Properties
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    100% legal clearance, clear titles, and vetted high-end residential & commercial spaces.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300 mb-4">
                    <FaRoad className="text-purple-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Strategic Connectivity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Direct access to International Airport Road, PR7 Ring Road, and major national highways.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-orange-500/10 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300 mb-4">
                    <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Prime Locations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Carefully selected inventory in Sector 70, IT City, Aerocity, New Chandigarh & Panchkula.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors duration-300 mb-4">
                    <FaHandshake className="text-red-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Trusted & Transparent
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Zero hidden costs, ethical advisory, and end-to-end documentation assistance.
                  </p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-teal-500/10 rounded-full group-hover:bg-teal-500/20 transition-colors duration-300 mb-4">
                    <FaStar className="text-teal-500 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    Personalized property consultations, on-site visits, and swift customer care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-12 sm:pt-16 pb-8 border-t border-gray-800">
        <ScrollAnimation>
          <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-16">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                  Realty Sectors
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                  Your trusted partner in real estate, helping you find your
                  perfect residential & commercial property in Tricity (Chandigarh, Mohali, Panchkula, New Chandigarh, Zirakpur).
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://wa.me/919875962200"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="text-lg" />
                  </a>
                  <a
                    href="tel:+919875962200"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-yellow-500 hover:text-black flex items-center justify-center text-gray-300 transition-all duration-300 shadow-md"
                    aria-label="Call +91 98759 62200"
                  >
                    <FaPhone className="text-sm" />
                  </a>
                  <a
                    href="mailto:realtysectors@gmail.com"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-md"
                    aria-label="Email realtysectors@gmail.com"
                  >
                    <FaEnvelope className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
                <ul className="space-y-3.5 text-gray-400 text-sm">
                  <li className="flex items-start gap-3">
                    <FaMapMarkedAlt className="text-yellow-400 text-base mt-0.5 flex-shrink-0" />
                    <span>SCO 671, Sector 70, Mohali, Punjab 160071</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-yellow-400 text-base flex-shrink-0" />
                    <a
                      href="tel:+919875962200"
                      className="hover:text-yellow-400 transition-colors font-medium text-white"
                    >
                      +91 98759 62200
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-400 text-base flex-shrink-0" />
                    <a
                      href="mailto:realtysectors@gmail.com"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      realtysectors@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Form / Quick Action */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Looking to buy, sell or invest? Speak directly to our property specialists today.
                </p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 cursor-pointer"
                  >
                    <FaEnvelope />
                    Send An Inquiry
                  </button>
                  <a
                    href="https://wa.me/919875962200?text=Hello,%20I%20am%20looking%20for%20a%20property%20consultation"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-2.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <p>
                © {new Date().getFullYear()} Realty Sectors. All rights reserved.
              </p>
              <p>
                Connecting Deals to Desires across Chandigarh, Mohali, Panchkula & New Chandigarh.
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
