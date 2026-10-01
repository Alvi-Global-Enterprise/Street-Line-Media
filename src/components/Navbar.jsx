import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label, href) => {
    setActiveLink(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden"
      style={{
        background: scrolled
          ? 'rgba(0, 0, 0, 0.85)'
          : 'rgba(255, 104, 1, 0.2)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        height: '104px',
      }}
    >
      {/* White glow blob — left edge */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '-40px',
          transform: 'translateY(-50%)',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(18px)',
        }}
      />
      {/* White glow blob — right edge */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-40px',
          transform: 'translateY(-50%)',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'blur(18px)',
        }}
      />

      {/* Desktop Layout */}
      <div
        className="hidden lg:flex items-center justify-between relative w-full h-full px-6 lg:px-10 xl:px-[100px]"
        style={{ maxWidth: '1932px', margin: '0 auto', zIndex: 1 }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('Home', '#home'); }}
          className="flex-shrink-0 flex items-center"
        >
          <img
            src="/assets/logo.png"
            alt="Streetline Media Logo"
            className="h-[46px] xl:h-[56px] w-auto object-contain"
          />
        </a>

        {/* Nav Links */}
        <nav
          className="flex items-center gap-6 xl:gap-10"
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
                className="relative flex flex-col items-start transition-all duration-200 py-2"
                style={{
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.15vw, 18px)',
                  lineHeight: '20px',
                  color: isActive ? '#FF6801' : 'rgba(255, 255, 255, 0.45)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
                }}
              >
                {link.label}
                {/* Active underline — 24px × 3px white bar */}
                {isActive && (
                  <span
                    className="absolute"
                    style={{
                      bottom: '0px',
                      left: 0,
                      width: '24px',
                      height: '3px',
                      background: '#FFFFFF',
                      borderRadius: '1.5px',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          id="nav-enquire-btn"
          onClick={(e) => { e.preventDefault(); handleNavClick('Contact Us', '#contact'); }}
          className="flex-shrink-0 flex items-center justify-between transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: '#FF6801',
            borderRadius: '24.09px',
            height: '48px',
            paddingLeft: 'clamp(16px, 1.3vw, 22px)',
            paddingRight: 'clamp(12px, 1vw, 14px)',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.1vw, 18px)',
              lineHeight: '20px',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}
          >
            Enquire About Advertising
          </span>
          {/* Arrow icon */}
          <span className="flex-shrink-0 flex items-center" style={{ width: '15px', height: '10px', position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                width: '14px',
                height: 0,
                borderTop: '2.5px solid #FFFFFF',
                transform: 'translateY(-50%)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)',
                width: '6px',
                height: '10px',
                borderRight: '2.5px solid #FFFFFF',
                borderTop: '2.5px solid #FFFFFF',
              }}
            />
          </span>
        </a>
      </div>

      {/* Mobile Layout */}
      <div
        className="lg:hidden flex items-center justify-between"
        style={{ height: '104px', padding: '0 24px', position: 'relative', zIndex: 1 }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('Home', '#home'); }}
        >
          <img
            src="/assets/logo.png"
            alt="Streetline Media Logo"
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          style={{ color: '#FFFFFF', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden animate-fade-in"
          style={{
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '0 24px 24px',
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
                className="block transition-colors duration-200"
                style={{
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '20px',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  color: isActive ? '#FF6801' : 'rgba(255,255,255,0.6)',
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('Contact Us', '#contact'); }}
            className="flex items-center justify-center transition-all duration-200 hover:opacity-90"
            style={{
              marginTop: '16px',
              background: '#FF6801',
              borderRadius: '24px',
              height: '48px',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '20px',
              color: '#FFFFFF',
              gap: '10px',
            }}
          >
            Enquire About Advertising
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
              <line x1="0" y1="5" x2="14" y2="5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <polyline points="9,0.5 14,5 9,9.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </a>
        </div>
      )}
    </header>
  );
}
