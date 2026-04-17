import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';
import { Button } from './index';

// Helper functions for cookie management
const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = getCookie('elevate_cookie_consent');
        if (!consent) {
            // Delay visibility for a smoother entrance
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAction = (type: 'accept' | 'reject') => {
        setCookie('elevate_cookie_consent', type, 365);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[110] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-700" />
                
                <div className="relative space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Your Privacy Matters</h3>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                        We use cookies to improve your experience and analyze our traffic. 
                        By clicking "Accept All", you consent to our use of cookies. 
                        Read our <a href="#" className="font-bold text-emerald-600 hover:underline">Privacy Policy</a>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                            onClick={() => handleAction('accept')}
                            className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200"
                        >
                            Accept All
                        </button>
                        <button 
                            onClick={() => handleAction('reject')}
                            className="flex-1 bg-slate-100 text-slate-600 font-bold py-3 rounded-2xl hover:bg-slate-200 transition-all active:scale-95"
                        >
                            Reject All
                        </button>
                    </div>
                </div>

                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};
