import React from 'react';
import { Link } from 'react-router-dom';
import { LogoFull } from './Logo';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                    <div className="space-y-6">
                        <LogoFull className="h-10 brightness-0 invert" />
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Architecting global mobility and educational 
                            success in Malaysia and beyond.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-emerald-400 transition-colors"><FaFacebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><FaTwitter className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><FaLinkedin className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><FaInstagram className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/why-malaysia" className="hover:text-white transition-colors">Why Malaysia</Link></li>
                            <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Our Expertise</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white transition-colors">University Admissions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Visa Consultancy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Career Pathways</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Language Training</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Scholarship Guidance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-emerald-400 shrink-0" />
                                <span>Plot No 128, Gate Number 6,<br />Sitaram Nagar, Gunrock Enclave,<br />Secunderabad, Telangana 500009</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                                <a href="tel:+919848426087" className="hover:text-white transition-colors">98484 26087</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                                <span>hello@elevateadvisors.com</span>
                            </li>
                            <li className="pt-4 border-t border-slate-800">
                                <p className="text-sm font-bold text-white mb-2">Main Adviser:</p>
                                <p className="text-slate-400">Clement David</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-16 rounded-3xl overflow-hidden h-64 border border-slate-800">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30449.149552847364!2d78.4901573!3d17.4528352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9be4b194fbcf:0x620048d26732a53d!2sTrade%20Syndicate%20Corporate%20office!5e0!3m2!1sen!2sin!4v1744908182740!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location"
                    ></iframe>
                </div>

                <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-500">
                        &copy; {currentYear} Elevate Advisors Education. Powered by Trade Syndicate.
                    </p>
                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
