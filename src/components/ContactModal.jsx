import { useState } from "react";

const ContactModal = ({ isModalOpen, setIsModalOpen }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => {
          setShowSuccess(false);
          setIsModalOpen(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4 animate-slideUpModal">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h4>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>
        {showSuccess ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for contacting us. We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            action="https://formsubmit.co/realtysectors@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for contacting us. We have received your message and will get back to you soon."
            />

            {/* Honeypot field to prevent spam */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone No."
              required
              onWheel={(e) => e.target.blur()}
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              required
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
