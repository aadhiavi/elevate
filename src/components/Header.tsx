import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../constants';
import { GraduationCap, Calendar, Menu, X, Phone, Briefcase, Rocket } from 'lucide-react';
import { LogoFull } from '.';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const icons: Record<string, React.ReactNode> = {
        'Services': <Briefcase className="h-4 w-4" />,
        'Opportunities': <Rocket className="h-4 w-4" />,
        'Pathways': <GraduationCap className="h-4 w-4" />,
        'Why Malaysia': <Calendar className="h-4 w-4" />,
        'Contact Us': <Phone className="h-4 w-4" />,
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-2">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="hover:scale-105 transition-transform duration-300">
                        <LogoFull className="h-12 md:h-16" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`flex items-center space-x-2 text-sm font-semibold transition-all duration-300 group relative ${location.pathname === item.path ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                                    }`}
                            >
                                {icons[item.label]}
                                <span>{item.label}</span>
                                {location.pathname === item.path && (
                                    <span className="absolute -bottom-4 left-0 w-full h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact & CTA (Desktop) */}
                    <div className="hidden xl:flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 group hover:bg-white/20 transition-all">
                            <Phone className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <a href="tel:+918309622516" className="text-sm font-bold text-slate-100 hover:text-emerald-400 transition-colors tracking-tight">
                                83096 22516
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2 sm:gap-4">
                        <a href="tel:+918309622516" className="p-2 sm:p-2.5 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                            <Phone className="h-5 w-5" />
                        </a>
                        <button
                            onClick={toggleMenu}
                            className="p-2 sm:p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-[64px] md:top-[80px] left-0 w-full h-[calc(100vh-64px)] bg-slate-900 z-50 transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                <div className="flex flex-col h-full bg-slate-900">
                    <div className="flex-grow px-6 py-8 space-y-2 overflow-y-auto">
                        <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6 ml-2">Navigation</p>
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={closeMenu}
                                className={`flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 ${location.pathname === item.path
                                        ? 'bg-emerald-500 text-white font-black shadow-lg shadow-emerald-500/20'
                                        : 'text-slate-300 hover:bg-white/5 active:scale-95'
                                    }`}
                            >
                                <div className={`${location.pathname === item.path ? 'text-white' : 'text-emerald-400'}`}>
                                    {icons[item.label]}
                                </div>
                                <span className="text-xl">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="p-6 bg-slate-800/50 border-t border-white/5 space-y-4">
                        <div className="flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Expert Advice</span>
                                <span className="font-black text-white text-lg italic">98484 26087</span>
                            </div>
                            <a href="tel:+918309622516" className="px-6 py-3 bg-emerald-500 text-white text-sm font-black rounded-2xl active:scale-95 transition-all shadow-lg shadow-emerald-500/20">
                                Call Now
                            </a>
                        </div>
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="flex items-center justify-center w-full py-5 rounded-3xl bg-white text-slate-900 font-black text-xl shadow-2xl active:scale-[0.98] transition-all"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>
        </header>

    );
};
