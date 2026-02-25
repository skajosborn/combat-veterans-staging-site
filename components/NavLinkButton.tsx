import React from 'react';
import Link from 'next/link';

interface NavLinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  type?: 'default' | 'donate';
  className?: string;
  compact?: boolean;
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ href, title, subtitle = '', icon, type = 'default', className, compact = false }) => {
  const isDonate = type === 'donate';
  if (compact) {
    return (
      <Link
        href={href}
        className={`relative flex items-center gap-2 px-3 py-2 min-h-0 bg-black/50 border border-gray-700 transition-all duration-300
          ${isDonate ? 'hover:shadow-white-glow' : 'hover:brightness-125 hover:border-gray-600 hover:shadow-white-glow'}
          group
          ${className ?? ''}
        `}
      >
        <span className="relative z-20 flex-shrink-0 text-white [&>svg]:w-5 [&>svg]:h-5">
          {icon}
        </span>
        <span className={`relative z-20 text-xs font-bold ${isDonate ? 'text-white' : 'text-gray-100'} uppercase truncate`}>
          {title}
        </span>
      </Link>
    );
  }
  return (
    <Link href={href} className={`relative flex flex-col items-center justify-center px-3 py-2.5 min-h-[120px] min-w-0 bg-black/50 border border-gray-700 transition-all duration-300 
      ${isDonate ? 'hover:shadow-white-glow' : 'hover:brightness-125 hover:border-gray-600 hover:shadow-white-glow'}
      group
      ${className ?? ''}
    `}>
      <div className="relative z-20 text-white">
        {icon}
      </div>
      <span className={`relative z-20 text-xs font-bold ${isDonate ? 'text-white' : 'text-gray-100'} uppercase text-center whitespace-normal leading-tight`}>{title}</span>
      <span className="relative z-20 text-[10px] text-gray-400 text-center whitespace-normal leading-tight">{subtitle}</span>
    </Link>
  );
};

export default NavLinkButton;
