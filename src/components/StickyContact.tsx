import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export const StickyContact = () => {
    const phoneNumber = '8309622516';
    const whatsappLink = `https://wa.me/91${phoneNumber}`;
    const callLink = `tel:+91${phoneNumber}`;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
            {/* WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
                aria-label="Contact on WhatsApp"
            >
                <FaWhatsapp className="h-8 w-8 text-white" />
                <span className="absolute right-full mr-3 px-3 py-1 bg-white text-slate-900 text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
                    Chat on WhatsApp
                </span>
            </a>

            {/* Call Button */}
            <a
                href={callLink}
                className="group relative flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
                aria-label="Call Us"
            >
                <FaPhoneAlt className="h-6 w-6 text-white" />
                <span className="absolute right-full mr-3 px-3 py-1 bg-white text-slate-900 text-sm font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
                    Call 98484 26087
                </span>
            </a>
        </div>
    );
};
