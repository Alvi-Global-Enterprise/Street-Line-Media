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
    <section id="about" className="bg-white py-16 lg:py-24">
      {/* Figma Group 225: 1734px x 719.06px */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[87px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-[93px]">

          {/* Left - Image collage (Figma Group 213: 854px x 719.06px) */}
          <div className="w-full lg:w-[854px] max-w-[854px] flex-shrink-0">
            <img
              src="/assets/road-side-banner.png"
              alt="Streetline Media 20 Years of roadside advertising experience"
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
              onError={(e) => {
                e.target.src = '/assets/about-collage.jpg';
              }}
            />
          </div>

          {/* Right - Content (Figma Group 214: 787px x 625.19px) */}
          <div className="w-full lg:w-[787px] max-w-[787px] flex-1">
            {/* Figma: ABOUT US — 23px, weight 700, #FFAD74, letter-spacing 0.32em */}
            <p
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(15px, 1.2vw, 23px)',
                lineHeight: '25px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#FFAD74',
                marginBottom: '10px',
              }}
            >
              About Us
            </p>

            {/* Figma: Your roadside advertising partner — 54px, weight 800, line-height 127% */}
            <h2
              className="font-extrabold text-black capitalize text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[54px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '127%',
                letterSpacing: '0.01em',
                marginBottom: '20px',
              }}
            >
              Your Roadside <br />
              <span style={{ color: '#FF6801' }}>Advertising Partner</span>
            </h2>

            {/* Figma: 20px, weight 400, line-height 141% */}
            <p
              className="text-black font-normal text-[16px] sm:text-[18px] xl:text-[20px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '141%',
                letterSpacing: '0.01em',
                maxWidth: '720px',
                marginBottom: '32px',
              }}
            >
              With 20 years of experience in outdoor advertising, Streetline Media helps businesses get noticed on the road.
            </p>

            {/* Feature list — Figma: 3 features with 68x68px #FFE8D9 icon box */}
            <div className="flex flex-col gap-6 mb-10">
              {features.map((feat) => (
                <div key={feat.id} id={feat.id} className="flex items-center gap-5">
                  {/* Peach-tinted square icon box: 68x68px, #FFE8D9, rounded-[6px] */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-[6px]"
                    style={{
                      width: '68px',
                      height: '68px',
                      background: '#FFE8D9',
                    }}
                  >
                    <img
                      src={feat.icon}
                      alt={feat.label}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-black uppercase text-[18px] sm:text-[22px] xl:text-[25px]"
                      style={{
                        fontFamily: "'LINE Seed JP', sans-serif",
                        lineHeight: '141%',
                        letterSpacing: '0.01em',
                        marginBottom: '2px',
                      }}
                    >
                      {feat.label}
                    </h3>
                    <p
                      className="text-[14px] sm:text-[17px] xl:text-[20px]"
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

            {/* CTA Button — Figma: Rectangle 2: 322.73px x 48.19px, #FF6801, radius 24.09px */}
            <button
              id="about-enquire-btn"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#e05b00] hover:scale-[1.02] active:scale-[0.98] group"
              style={{
                width: '322.73px',
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
              {/* Figma Vector 5 + Vector 6: 2.5px white arrow */}
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

