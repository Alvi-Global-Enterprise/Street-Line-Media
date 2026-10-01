const features = [
  {
    id: 'about-feature-uk-wide',
    icon: '/assets/Group 152.png',
    label: 'UK-Wide Opportunities',
    description: 'Roadside billboard options for local and national campaigns.',
  },
  {
    id: 'about-feature-national',
    icon: '/assets/Group 185.png',
    label: 'Local + National Campaigns',
    description: 'Helping local businesses and national brands get seen.',
  },
  {
    id: 'about-feature-end-to-end',
    icon: '/assets/Vector (3).png',
    label: 'End-to-End Service',
    description: 'Campaign planning, Artwork design, Printing & Installation.',
  },
];

export default function About() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-white py-14 lg:py-20 xl:py-24">
      {/* Figma Group 225: 1734px x 719.06px */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-[87px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-[64px] 2xl:gap-[93px]">

          {/* Left - Image collage */}
          <div className="w-full lg:w-1/2 max-w-[854px] flex-shrink-1 min-w-0 flex items-center justify-center">
            <img
              src="/assets/road-side-banner.png"
              alt="Streetline Media 20 Years of roadside advertising experience"
              className="w-full h-auto max-h-[640px] object-contain transition-transform duration-500 hover:scale-[1.01]"
              onError={(e) => {
                e.target.src = '/assets/about-collage.jpg';
              }}
            />
          </div>

          {/* Right - Content */}
          <div className="w-full lg:w-1/2 max-w-[787px] flex-1 min-w-0">
            {/* Figma: ABOUT US */}
            <p
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(14px, 1.2vw, 23px)',
                lineHeight: '25px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#FFAD74',
                marginBottom: '10px',
              }}
            >
              About Us
            </p>

            {/* Headline */}
            <h2
              className="font-extrabold text-black capitalize text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[54px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '122%',
                letterSpacing: '0.01em',
                marginBottom: '16px',
              }}
            >
              Your Roadside <br />
              <span style={{ color: '#FF6801' }}>Advertising Partner</span>
            </h2>

            {/* Sub-text */}
            <p
              className="text-black font-normal text-[15px] sm:text-[17px] xl:text-[20px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '141%',
                letterSpacing: '0.01em',
                maxWidth: '720px',
                marginBottom: '28px',
              }}
            >
              With 20 years of experience in outdoor advertising, Streetline Media helps businesses get noticed on the road.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-5 sm:gap-6 mb-8 sm:mb-10">
              {features.map((feat) => (
                <div key={feat.id} id={feat.id} className="flex items-center gap-4 sm:gap-5">
                  {/* Peach-tinted square icon box */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-[6px]"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: '#FFE8D9',
                    }}
                  >
                    <img
                      src={feat.icon}
                      alt={feat.label}
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-bold text-black uppercase text-[16px] sm:text-[20px] xl:text-[24px]"
                      style={{
                        fontFamily: "'LINE Seed JP', sans-serif",
                        lineHeight: '135%',
                        letterSpacing: '0.01em',
                        marginBottom: '2px',
                      }}
                    >
                      {feat.label}
                    </h3>
                    <p
                      className="text-[13px] sm:text-[15px] xl:text-[18px]"
                      style={{
                        fontFamily: "'LINE Seed JP', sans-serif",
                        fontWeight: 400,
                        lineHeight: '141%',
                        letterSpacing: '0.01em',
                        color: '#000000',
                        opacity: 0.55,
                      }}
                    >
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              id="about-enquire-btn"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#e05b00] hover:scale-[1.02] active:scale-[0.98] group w-full sm:w-[322px]"
              style={{
                height: '48.19px',
                background: '#FF6801',
                borderRadius: '24.0949px',
                color: '#FFFFFF',
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '20px',
              }}
            >
              <span>Enquire About Advertising</span>
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

