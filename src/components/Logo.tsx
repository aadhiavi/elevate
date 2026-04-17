import React from 'react';

export const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 80L50 20L80 80"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 55L65 55"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="45"
        r="15"
        stroke="currentColor"
        strokeWidth="4"
        className="animate-pulse"
      />
      <path
        d="M20 20L30 20M70 20L80 20M20 40L25 40M75 40L80 40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LogoFull = ({ className = "h-10" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="h-full w-auto text-emerald-500" />
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Elevate Advisors</span>
        <span className="text-xl font-black tracking-tight text-slate-900">EDUCATION</span>
      </div>
    </div>
  );
};
