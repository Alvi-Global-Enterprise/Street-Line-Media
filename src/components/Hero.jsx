export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToLocations = () => {
    document.querySelector('#locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ width: '100%', minHeight: '872px', background: '#000000' }}
    >
      {/* Background Image — full bleed */}
      <div className="absolute inset-0">
        <img
          src="/assets/Group 120.png"
          alt="Streetline roadside billboard at night"
          className="absolute w-full h-full object-cover object-center"
          style={{ top: 0, left: 0 }}
        />
        {/* Gradient overlay — Figma: linear-gradient(270deg, rgba(0,0,0,0) 9.13%, rgba(0,0,0,0.7) 47.49%) with slight rotation */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(270deg, rgba(0, 0, 0, 0) 9.13%, rgba(0, 0, 0, 0.7) 47.49%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col justify-center"
        style={{
          minHeight: '872px',
          maxWidth: '1920px',
          margin: '0 auto',
          /* pt accounts for 104px navbar + Figma top: 260px */
          paddingTop: '260px',
          paddingBottom: '60px',
          paddingLeft: 'clamp(24px, 5.2vw, 100px)',
          paddingRight: 'clamp(24px, 5.2vw, 100px)',
        }}
      >
        <div style={{ maxWidth: '814px' }}>

          {/* Eyebrow label — Figma: 23px, weight 700, #FFAD74, letter-spacing 0.32em, UPPERCASE */}
          <p
            className="animate-fade-in-up text-brand-orange-light"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(14px, 1.6vw, 23px)',
              lineHeight: '25px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#FFAD74',
              marginBottom: '14px',
            }}
          >
            Outdoor Advertising That Works
          </p>

          {/* H1 — Figma: 65px, weight 800, #FFFFFF, line-height 109%, letter-spacing 0.01em, capitalize */}
          <h1
            className="animate-fade-in-up  text-[32px] lg:text-[48px] xl:text-[65px] text-white font-extrabold"
            style={{
              fontWeight: 900,
              lineHeight: '109%',
              letterSpacing: '0.01em',
              textTransform: 'capitalize',
              color: '#FFFFFF',
              maxWidth: '700px',
              marginBottom: '26px',
              animationDelay: '0.1s',
            }}
          >
            Roadside advertising that <span className="text-brand-orange" > gets your business seen.</span>
          </h1>

          {/* Sub-copy — Figma: 25px, weight 400, #FFFFFF, line-height 141%, letter-spacing 0.01em */}
          <p
            className="animate-fade-in-up text-[15px] lg:text-[18px] xl:text-[25px]  text-white"
            style={{
              fontWeight: 400,
              lineHeight: '141%',
              letterSpacing: '0.01em',
              color: '#FFFFFF',
              maxWidth: '778px',
              marginBottom: '57px',
              animationDelay: '0.2s',
            }}
          >
            From finding the right billboard to designing, printing and installing
            your advert, Streetline Media handles every step — making outdoor
            advertising simple and effective.
          </p>

          {/* CTA Buttons — Figma: 48px height, 24px border-radius */}
          <div
            className="animate-fade-in-up flex flex-wrap"
            style={{ gap: '22px', animationDelay: '0.3s' }}
          >
            {/* Primary CTA — bg #FF6801, text BLACK, border-radius 24px, 322.73×48px */}
            <button
              id="hero-enquire-btn"
              onClick={scrollToContact}
              className="inline-flex items-center  transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: '#FF6801',
                borderRadius: '24.09px',
                height: '48px',
                padding: '0 14px 0 22px',
                gap: '12px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span
                className="text-[13px]  xl:text-[18px]"
                style={{
                  fontWeight: 700,
                  lineHeight: '20px',
                  color: '#000000',
                  whiteSpace: 'nowrap',
                }}
              >
                Enquire About Advertising
              </span>
              {/* Arrow — Figma: 2.5px stroke, black */}
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" style={{ flexShrink: 0 }}>
                <line x1="0" y1="5" x2="14" y2="5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,0.5 14,5 9,9.5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            {/* Secondary CTA — border white, text white, border-radius 24px, 311×48px */}
            <button
              id="hero-locations-btn"
              onClick={scrollToLocations}
              className="inline-flex items-center  transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'transparent',
                border: '1px solid #FFFFFF',
                borderRadius: '24.09px',
                height: '48px',
                padding: '0 14px 0 22px',
                gap: '12px',
                cursor: 'pointer',
              }}
            >
              <span
                className="text-[13px]  xl:text-[18px]"
                style={{
                  fontWeight: 700,
                  lineHeight: '20px',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                View Billboard Locations
              </span>
              {/* Arrow — Figma: 2.5px stroke, white */}
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" style={{ flexShrink: 0 }}>
                <line x1="0" y1="5" x2="14" y2="5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,0.5 14,5 9,9.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/40" />
        <p className="text-white/50 text-xs tracking-widest uppercase font-medium">Scroll</p>
      </div> */}
    </section>
  );
}
