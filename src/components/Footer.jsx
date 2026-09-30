import { useState } from 'react';

const quickLinks = ['Home', 'Our Services', 'About Us', 'Contact'];
const serviceLinks = ['Campaign Planning', 'Artwork & Design', 'Printing', 'Installation'];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-black pt-16 lg:pt-20 pb-10">
      {/* Figma Group 228: width 2018px, height 654px, background #000000 */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[100px]">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 lg:mb-20">

          {/* Col 1: Brand, Tagline, Socials (Figma width: 506px) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo — Figma Streetline Media-03 1: 271px x 86px */}
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="inline-block mb-6">
                <img
                  src="/assets/logo.png"
                  alt="Streetline Media"
                  style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
                />
              </a>

              {/* Tagline — Figma: 23px, weight 400, line-height 141%, letter-spacing 0.08em */}
              <p
                className="text-white font-normal mb-8"
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  fontSize: 'clamp(16px, 1.2vw, 23px)',
                  lineHeight: '141%',
                  letterSpacing: '0.08em',
                  maxWidth: '506px',
                }}
              >
                Roadside advertising that gets your business seen. From planning and design to printing and installation, we handle every step.
              </p>
            </div>

            {/* Social Icons — Figma Group 109: 5 orange #FF6801 icons */}
            <div className="flex items-center gap-6 mt-2">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-[#FF6801] transition-transform duration-200 hover:scale-110 hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF6801">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.46 11.82 5 14.54 5c1.3 0 2.68.23 2.68.23v2.95h-1.51c-1.5 0-1.97.93-1.97 1.89V12h3.33l-.53 3h-2.8v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#FF6801] transition-transform duration-200 hover:scale-110 hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6801" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="text-[#FF6801] transition-transform duration-200 hover:scale-110 hover:opacity-80">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6801">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[#FF6801] transition-transform duration-200 hover:scale-110 hover:opacity-80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6801">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#FF6801] transition-transform duration-200 hover:scale-110 hover:opacity-80">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF6801">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-6">
            <h3
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.2vw, 23px)',
                lineHeight: '141%',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FF6801',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const map = {
                        'Home': '#home',
                        'Our Services': '#services',
                        'About Us': '#about',
                        'Contact': '#contact',
                      };
                      scrollTo(map[link] || '#home');
                    }}
                    className="text-white font-normal transition-colors duration-200 hover:text-brand-orange block"
                    style={{
                      fontFamily: "'LINE Seed JP', sans-serif",
                      fontSize: 'clamp(16px, 1.2vw, 23px)',
                      lineHeight: '210%',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3">
            <h3
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.2vw, 23px)',
                lineHeight: '141%',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FF6801',
                marginBottom: '16px',
              }}
            >
              Our Services
            </h3>
            <ul className="space-y-1">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo('#services');
                    }}
                    className="text-white font-normal transition-colors duration-200 hover:text-brand-orange block"
                    style={{
                      fontFamily: "'LINE Seed JP', sans-serif",
                      fontSize: 'clamp(16px, 1.2vw, 23px)',
                      lineHeight: '210%',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter (Figma Group 110: 412.23px) */}
          <div className="lg:col-span-3">
            <h3
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 1.2vw, 23px)',
                lineHeight: '141%',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#FF6801',
                marginBottom: '8px',
              }}
            >
              Newsletter
            </h3>
            <p
              className="text-white font-normal mb-6"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontSize: 'clamp(16px, 1.2vw, 23px)',
                lineHeight: '210%',
              }}
            >
              Stay in the Loop
            </p>

            {/* Newsletter input container — Figma Rectangle 37: 412.23px x 62.02px, radius 10px */}
            <form
              id="newsletter-form"
              onSubmit={handleSubscribe}
              className="flex items-center bg-white rounded-[10px] p-[5px] w-full max-w-[412px]"
              style={{ height: '62px' }}
            >
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Send Your Email"
                required
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  fontSize: '18px',
                }}
                className="flex-1 px-4 py-2 text-black font-normal placeholder:text-black/25 outline-none bg-transparent"
              />
              {/* Subscribe button — Figma Rectangle 38: 142.56px x 52.08px, bg #FF6801, radius 6px */}
              <button
                id="newsletter-subscribe-btn"
                type="submit"
                className="flex items-center justify-center bg-[#FF6801] text-white font-medium text-[16px] sm:text-[18px] rounded-[6px] transition-all duration-200 hover:bg-[#e05b00] flex-shrink-0"
                style={{
                  width: '135px',
                  height: '52px',
                  fontFamily: "'LINE Seed JP', sans-serif",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          {/* Copyright — Figma: 23px, weight 400, letter-spacing 0.08em */}
          <p
            className="text-white font-normal"
            style={{
              fontFamily: "'LINE Seed JP', sans-serif",
              fontSize: 'clamp(14px, 1.2vw, 23px)',
              lineHeight: '141%',
              letterSpacing: '0.08em',
            }}
          >
            © 2026 Streetline Media. All rights reserved.
          </p>

          {/* Privacy Policy | Terms & Conditions — Figma: 23px, letter-spacing 0.08em, text-align right */}
          <div
            className="flex items-center gap-2 text-white font-normal"
            style={{
              fontFamily: "'LINE Seed JP', sans-serif",
              fontSize: 'clamp(14px, 1.2vw, 23px)',
              lineHeight: '141%',
              letterSpacing: '0.08em',
            }}
          >
            <a href="#" className="transition-colors duration-200 hover:text-brand-orange">
              Privacy Policy
            </a>
            <span className="text-white/40">|</span>
            <a href="#" className="transition-colors duration-200 hover:text-brand-orange">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

