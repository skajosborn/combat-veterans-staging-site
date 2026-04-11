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
  /** Light surface + dark text (e.g. hero over photography) */
  variant?: 'default' | 'hero';
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({
  href,
  title,
  subtitle = '',
  icon,
  type = 'default',
  className,
  compact = false,
  variant = 'default',
}) => {
  const isDonate = type === 'donate';
  const isHero = variant === 'hero';

  if (compact) {
    const heroCompact =
      'border border-slate-200/90 bg-white text-cvc-fg shadow-md hover:border-slate-300 hover:bg-slate-100 hover:shadow-lg dark:border-cvc-border dark:bg-cvc-card dark:hover:border-cvc-border-strong dark:hover:bg-cvc-hover';
    const defaultCompact = `border border-cvc-navlink-border bg-cvc-navlink ${
      isDonate
        ? 'hover:shadow-white-glow'
        : 'hover:brightness-125 hover:border-cvc-border-strong hover:shadow-white-glow'
    }`;

    return (
      <Link
        href={href}
        className={`group relative flex min-h-0 items-center gap-2 px-3 py-2 transition-all duration-300
          ${isHero ? heroCompact : defaultCompact}
          ${className ?? ''}
        `}
      >
        <span className="relative z-20 flex-shrink-0 text-cvc-fg transition-colors duration-300 [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
        <span className="relative z-20 truncate text-xs font-bold uppercase text-cvc-fg transition-colors duration-300">
          {title}
        </span>
      </Link>
    );
  }
  return (
    <Link href={href} className={`relative flex min-h-[120px] min-w-0 flex-col items-center justify-center border border-cvc-navlink-border bg-cvc-navlink px-3 py-2.5 transition-all duration-300 
      ${isDonate ? 'hover:shadow-white-glow' : 'hover:brightness-125 hover:border-cvc-border-strong hover:shadow-white-glow'}
      group
      ${className ?? ''}
    `}>
      <div className="relative z-20 text-cvc-fg">
        {icon}
      </div>
      <span className={`relative z-20 text-center text-xs font-bold uppercase leading-tight text-cvc-fg whitespace-normal`}>{title}</span>
      <span className="relative z-20 text-center text-[10px] leading-tight whitespace-normal text-cvc-fg-subtle">{subtitle}</span>
    </Link>
  );
};

export default NavLinkButton;
