import logoImg from '../assets/logo.jpeg';

export const Logo = ({ className = "h-18" }: { className?: string }) => {
  return (
    <img src={logoImg} alt="TSEA Logo" className={`${className} h-auto`} />
  );
};

export const LogoFull = ({ className = "h-20" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo className="h-full w-auto object-contain rounded-lg" />
    </div>
  );
};
