import React from 'react';
import Link from 'next/link';

interface NavLinkButtonProps {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  type?: 'default' | 'donate';
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ href, title, subtitle, icon, type = 'default' }) => {
  const isDonate = type === 'donate';
  return (
    <Link href={href} className={`relative flex flex-col items-center justify-center px-6 py-4 min-h-[180px] min-w-[180px] bg-black/50 border border-gray-700 transition-all duration-300 
      ${isDonate ? 'hover:shadow-white-glow' : 'hover:brightness-125 hover:border-gray-600 hover:shadow-white-glow'}
      group
    `}>
      <div className={`relative z-20 text-5xl text-white`}>
        {icon}
      </div>
      <span className={`relative z-20 text-base font-bold ${isDonate ? 'text-white' : 'text-gray-100'} uppercase text-center whitespace-normal`}>{title}</span>
      <span className="relative z-20 text-sm text-gray-400 text-center whitespace-normal">{subtitle}</span>
    </Link>
  );
};

export default NavLinkButton;
