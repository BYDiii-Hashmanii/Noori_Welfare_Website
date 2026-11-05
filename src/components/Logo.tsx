import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', size = 'md' }) => {
  const isLight = variant === 'light';

  // Responsive sizing matching template
  const scale = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-14 sm:h-16' : 'h-10 sm:h-12';

  return (
    <div className={`flex items-center select-none group cursor-pointer ${className}`}>
      {isLight ? (
        /* Light mode logo for dark footer with crisp contrast */
        <div className="flex items-center gap-2">
          <img
            src="/assets/aistudio/logo_hd.png"
            alt="Noori Welfare Foundation Logo"
            className={`${scale} w-auto object-contain brightness-110 drop-shadow-md rounded-md`}
          />
        </div>
      ) : (
        /* Official High-Resolution Logo from Template */
        <img
          src="/assets/aistudio/logo_hd.png"
          alt="Noori Welfare Foundation Logo"
          className={`${scale} w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs`}
        />
      )}
    </div>
  );
};
