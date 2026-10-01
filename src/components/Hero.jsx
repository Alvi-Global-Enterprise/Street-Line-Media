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
      className="relative overflow-hidden w-full bg-black min-h-[640px] md:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px] 2xl:min-h-[872px] flex flex-col justify-center"
    >
      {/* Background Image — full bleed with right-anchored positioning so the billboard is never cut off */}
      <div className="absolute inset-0">
        <img
          src="/assets/Group 120.png"
          alt="Streetline roadside billboard at night"
          className="absolute w-full h-full object-cover object-[78%_center] lg:object-[82%_center] xl:object-[85%_center] select-none pointer-events-none"
          style={{ top: 0, left: 0 }}
        />
        {/* Gradient overlay for high contrast text readability on left while keeping billboard vivid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.74) 42%, rgba(0, 0, 0, 0.28) 72%, rgba(0, 0, 0, 0.12) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col justify-center w-full"
        style={{
          maxWidth: '1920px',
          margin: '0 auto',
          paddingTop: 'clamp(120px, 17vh, 230px)',
          paddingBottom: 'clamp(44px, 6vh, 64px)',
          paddingLeft: 'clamp(20px, 5.2vw, 100px)',
          paddingRight: 'clamp(20px, 5.2vw, 100px)',
        }}
      >
        <div className="w-full max-w-[814px]">

          {/* Eyebrow label — Outdoor Advertising That Works */}
          <p
            className="animate-fade-in-up text-brand-orange-light font-bold uppercase tracking-[0.32em]"
            style={{
              fontSize: 'clamp(13px, 1.4vw, 23px)',
              lineHeight: '130%',
              color: '#FFAD74',
              marginBottom: 'clamp(10px, 1.6vh, 16px)',
            }}
          >
            Outdoor Advertising That Works
          </p>

          {/* H1 */}
          <h1
            className="animate-fade-in-up text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] xl:text-[65px] text-white font-extrabold capitalize"
            style={{
              fontWeight: 900,
              lineHeight: '109%',
              letterSpacing: '0.01em',
              maxWidth: '720px',
              marginBottom: 'clamp(16px, 2.5vh, 26px)',
              animationDelay: '0.1s',
            }}
          >
            Roadside advertising that <span className="text-brand-orange">gets your business seen.</span>
          </h1>

          {/* Sub-copy */}
          <p
            className="animate-fade-in-up text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[23px] 2xl:text-[25px] text-white font-normal"
            style={{
              lineHeight: '141%',
              letterSpacing: '0.01em',
              maxWidth: '778px',
              marginBottom: 'clamp(24px, 4vh, 48px)',
              animationDelay: '0.2s',
            }}
          >
            From finding the right billboard to designing, printing and installing
            your advert, Streetline Media handles every step — making outdoor
            advertising simple and effective.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fade-in-up flex flex-wrap items-center gap-4 sm:gap-5"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Primary CTA */}
            <button
              id="hero-enquire-btn"
              onClick={scrollToContact}
              className="inline-flex items-center justify-between transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                background: '#FF6801',
                borderRadius: '24.09px',
                height: '48px',
                padding: '0 18px 0 22px',
                gap: '12px',
                border: 'none',
              }}
            >
              <span
                className="text-[14px] sm:text-[16px] xl:text-[18px] font-bold text-black whitespace-nowrap"
                style={{ lineHeight: '20px' }}
              >
                Enquire About Advertising
              </span>
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" style={{ flexShrink: 0 }}>
                <line x1="0" y1="5" x2="14" y2="5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
                <polyline points="9,0.5 14,5 9,9.5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            {/* Secondary CTA */}
            <button
              id="hero-locations-btn"
              onClick={scrollToLocations}
              className="inline-flex items-center justify-between transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                background: 'transparent',
                border: '1px solid #FFFFFF',
                borderRadius: '24.09px',
                height: '48px',
                padding: '0 18px 0 22px',
                gap: '12px',
              }}
            >
              <span
                className="text-[14px] sm:text-[16px] xl:text-[18px] font-bold text-white whitespace-nowrap"
                style={{ lineHeight: '20px' }}
              >
                View Billboard Locations
              </span>
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
