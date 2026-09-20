import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ className = "", text = "Chat on WhatsApp" }) => {
  const handleClick = () => {
    const url = `https://wa.me/919875962200?text=${encodeURIComponent(
      "Hello, I'm interested in your real estate services! Please call me back."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-5 h-5 text-white" />
      <span>{text}</span>
    </button>
  );
};

export default WhatsAppButton;
