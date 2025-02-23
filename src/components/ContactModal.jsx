const ContactModal = ({ isModalOpen, setIsModalOpen }) => {
    if (!isModalOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 animate-slideUpModal">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                        Get in Touch
                    </h4>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <input
                        type="number"
                        prefix="+91"
                        placeholder="Your Phone No."
                        onWheel={(e) => e.target.blur()}
                        className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="3"
                        className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded active:outline-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal; 