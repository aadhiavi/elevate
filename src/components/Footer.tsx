import { Link } from 'react-router-dom';
import { Logo} from './Logo';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-24 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                    <div className="space-y-6">
                        <Logo/>
                        <p className="text-slate-400 leading-relaxed text-base">
                            Architecting global mobility and educational 
                            success in Malaysia and beyond.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.facebook.com/profile.php?id=61570873471632" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all p-2 bg-white/5 rounded-lg hover:bg-white/10"><FaFacebook className="h-6 w-6" /></a>
                            <a href="https://x.com/TSEA_Education" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all p-2 bg-white/5 rounded-lg hover:bg-white/10"><FaXTwitter className="h-6 w-6" /></a>
                            <a href="https://www.instagram.com/tsea_education/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all p-2 bg-white/5 rounded-lg hover:bg-white/10"><FaInstagram className="h-6 w-6" /></a>
                        </div>
                    </div>

                    <div className="sm:pl-4">
                        <h4 className="text-white font-black mb-6 text-xl tracking-tight">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-white transition-colors py-1 block">Home</Link></li>
                            <li><Link to="/pathways" className="hover:text-white transition-colors py-1 block">Program Pathways</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors py-1 block">Our Services</Link></li>
                            <li><Link to="/why-malaysia" className="hover:text-white transition-colors py-1 block">Why Malaysia</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors py-1 block">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="sm:pl-4">
                        <h4 className="text-white font-black mb-6 text-xl tracking-tight">Our Expertise</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors py-1 block">University Admissions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors py-1 block">Visa Consultancy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors py-1 block">Career Pathways</a></li>
                            <li><a href="#" className="hover:text-white transition-colors py-1 block">Language Training</a></li>
                            <li><a href="#" className="hover:text-white transition-colors py-1 block">Scholarship Guidance</a></li>
                        </ul>
                    </div>

                    <div className="sm:pl-4">
                        <h4 className="text-white font-black mb-6 text-xl tracking-tight">Contact Info</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                                    <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                                </div>
                                <span className="text-sm leading-relaxed">Plot No 128, Gate Number 6,<br />Sitaram Nagar, Gunrock Enclave,<br />Secunderabad, Telangana 500009</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                                    <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                                </div>
                                <a href="tel:+918309622516" className="hover:text-white transition-colors font-bold">+91 8309622516</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2.5 bg-emerald-500/10 rounded-xl">
                                    <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                                </div>
                                <a href="mailto:tseaeducation@tradesyndicate.in" className="hover:text-white transition-colors font-bold break-all">tseaeducation@tradesyndicate.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-16 rounded-[2rem] md:rounded-[3rem] overflow-hidden h-64 md:h-80 border border-white/5 shadow-2xl">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30449.149552847364!2d78.4901573!3d17.4528352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9be4b194fbcf:0x620048d26732a53d!2sTrade%20Syndicate%20Corporate%20office!5e0!3m2!1sen!2sin!4v1744908182740!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        &copy; {currentYear} TSEA Education India. <span className="block md:inline mt-1 md:mt-0">Part of the Trade Syndicate Group.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-bold">
                        <a href="#" className="hover:text-white transition-colors text-slate-400">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors text-slate-400">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors text-slate-400">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>

    );
};
