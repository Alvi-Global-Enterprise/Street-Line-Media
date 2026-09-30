export default function CTABanner() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta-banner"
      className="relative w-full min-h-[464px] overflow-hidden flex items-center bg-[#0d0705]"
    >
      {/* Background Panorama Image (Figma Group 226 / image 15) */}
      <img
        src="/assets/image 15.png"
        alt="Roadside billboard at dusk cityscape"
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        style={{ minHeight: '464px' }}
      />

      {/* Dark gradient on the left for crisp text contrast while keeping right side billboard vivid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.82) 36%, rgba(0,0,0,0.48) 58%, rgba(0,0,0,0.08) 78%, transparent 100%)',
        }}
      />

      {/* Realistic Animated Blurry Glowing Lights on Billboard Bulbs (No boxes, pure circular blur) */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-full lg:w-[50%] pointer-events-none overflow-hidden select-none">
        {/* Soft, circular diffuse glow over the empty billboard surface */}
        <div
          className="absolute rounded-full animate-board-glow"
          style={{
            right: '8%',
            top: '15%',
            width: '380px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(255, 185, 30, 0.28) 0%, rgba(255, 140, 0, 0.12) 42%, transparent 72%)',
            filter: 'blur(50px)',
            mixBlendMode: 'screen',
          }}
        />

        {/* Bulb 1 (Left Lamp) - Pure Circular Blurry Glow */}
        <div
          className="absolute rounded-full animate-bulb-glow"
          style={{
            right: '25.5%',
            top: '13.5%',
            width: '64px',
            height: '64px',
            background: 'radial-gradient(circle, #FFF7D6 0%, #FFB703 40%, rgba(255, 140, 0, 0.45) 65%, transparent 80%)',
            filter: 'blur(10px)',
            boxShadow: '0 0 35px 14px rgba(255, 180, 0, 0.75)',
          }}
        />

        {/* Bulb 2 (Middle Lamp) - Pure Circular Blurry Glow */}
        <div
          className="absolute rounded-full animate-bulb-glow"
          style={{
            right: '18.5%',
            top: '11.5%',
            width: '72px',
            height: '72px',
            background: 'radial-gradient(circle, #FFFFFF 0%, #FFA000 45%, rgba(255, 130, 0, 0.5) 65%, transparent 80%)',
            filter: 'blur(12px)',
            boxShadow: '0 0 45px 18px rgba(255, 160, 0, 0.85)',
            animationDelay: '0.5s',
          }}
        />

        {/* Bulb 3 (Right Lamp) - Pure Circular Blurry Glow */}
        <div
          className="absolute rounded-full animate-bulb-glow"
          style={{
            right: '11%',
            top: '9.5%',
            width: '64px',
            height: '64px',
            background: 'radial-gradient(circle, #FFF7D6 0%, #FFB703 40%, rgba(255, 140, 0, 0.45) 65%, transparent 80%)',
            filter: 'blur(10px)',
            boxShadow: '0 0 35px 14px rgba(255, 180, 0, 0.75)',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Foreground Content Container (Figma Group 216: 1091px x 301px, left 100px) */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-[100px] py-16 lg:py-20 w-full">
        <div className="max-w-[1091px]">
          {/* Eyebrow — Figma: GET YOUR BUSINESS SEEN, 23px, weight 700, #FFAD74, letter-spacing 0.32em */}
          <p
            style={{
              fontFamily: "'LINE Seed JP', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(15px, 1.2vw, 23px)',
              lineHeight: '25px',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#FFAD74',
              marginBottom: '12px',
            }}
          >
            Get Your Business Seen
          </p>

          {/* Headline — Figma: 54px, weight 800, line-height 109%, letter-spacing 0.01em */}
          <h2
            className="font-extrabold text-white capitalize text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[54px]"
            style={{
              fontFamily: "'LINE Seed JP', sans-serif",
              lineHeight: '109%',
              letterSpacing: '0.01em',
              marginBottom: '16px',
              maxWidth: '1091px',
            }}
          >
            Ready To Advertise <br />
            <span style={{ color: '#FF6801' }}>On Our Billboards?</span>
          </h2>

          {/* Subtext — Figma: 24px, weight 400, line-height 141% */}
          <p
            className="text-white font-normal text-[16px] sm:text-[20px] xl:text-[24px]"
            style={{
              fontFamily: "'LINE Seed JP', sans-serif",
              lineHeight: '141%',
              letterSpacing: '0.01em',
              maxWidth: '586px',
              marginBottom: '36px',
            }}
          >
            Reach more people with high-impact roadside advertising.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Button 1: Request a Quote (Figma Group 117: 237px x 48px, #FF6801, text #000000, 2.5px arrow) */}
            <button
              id="cta-quote-btn"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#ff7a20] hover:scale-[1.02] active:scale-[0.98] group"
              style={{
                width: '237px',
                height: '48px',
                background: '#FF6801',
                borderRadius: '24.0949px',
                color: '#000000',
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '20px',
              }}
            >
              <span>Request a Quote</span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M 1 6 H 15.5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 11 1.5 L 15.5 6 L 11 10.5" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>

            {/* Button 2: Request a Callback (Figma Group 192: 256px x 48px, border 1px solid #FFFFFF, text #FFFFFF, 2.5px arrow) */}
            <button
              id="cta-callback-btn"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] group"
              style={{
                width: '256px',
                height: '48px',
                border: '1px solid #FFFFFF',
                borderRadius: '24.0949px',
                color: '#FFFFFF',
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '20px',
                background: 'transparent',
              }}
            >
              <span>Request a Callback</span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M 1 6 H 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M 11 1.5 L 15.5 6 L 11 10.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

