import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';
import { LogoFull } from './Logo';
import { GraduationCap, Users, BookOpen, Calendar, Menu, X, Phone } from 'lucide-react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const icons: Record<string, React.ReactNode> = {
        'Home': <BookOpen className="h-4 w-4" />,
        'About Us': <Users className="h-4 w-4" />,
        'Take Test': <GraduationCap className="h-4 w-4" />,
        'Why Malaysia': <Calendar className="h-4 w-4" />,
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="hover:scale-105 transition-transform duration-300">
                        <LogoFull className="h-10 md:h-12" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`flex items-center space-x-2 text-sm font-semibold transition-colors group relative ${
                                    location.pathname === item.path ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                                }`}
                            >
                                {icons[item.label]}
                                <span>{item.label}</span>
                                {location.pathname === item.path && (
                                    <span className="absolute -bottom-4 left-0 w-full h-1 bg-emerald-500 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact & CTA (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                            <Phone className="h-4 w-4 text-emerald-600" />
                            <a href="tel:+919848426087" className="text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors tracking-tight">
                                98484 26087
                            </a>
                        </div>
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            Talk To Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-4">
                        <a href="tel:+919848426087" className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                            <Phone className="h-5 w-5" />
                        </a>
                        <button 
                            onClick={toggleMenu}
                            className="p-2 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl transition-all duration-300 transform ${
                isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
            }`}>
                <div className="px-4 pt-4 pb-8 space-y-4 bg-white">
                    {NAVIGATION_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={closeMenu}
                            className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                                location.pathname === item.path 
                                ? 'bg-emerald-50 text-emerald-700 font-bold' 
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                        >
                            <div className={`${location.pathname === item.path ? 'text-emerald-600' : 'text-slate-400'}`}>
                                {icons[item.label]}
                            </div>
                            <span className="text-lg">{item.label}</span>
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-slate-100 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                             <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-emerald-600" />
                                <span className="font-bold text-slate-900">98484 26087</span>
                             </div>
                             <a href="tel:+919848426087" className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-xl active:scale-95 transition-all">Call Now</a>
                        </div>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="flex items-center justify-center w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-xl shadow-lg"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
