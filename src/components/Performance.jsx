import { useRef, useEffect, useState } from 'react';

const featureItems = [
  {
    title: <>UK&#8209;<span style={{ color: '#FF6801' }}>Wide</span></>,
    subtitle: 'Roadside billboard opportunities for local and national campaigns.',
    iconSrc: '/assets/Group 219.png',
    iconAlt: 'UK-Wide location icon',
  },
  {
    title: <>End&#8209;<span style={{ color: '#FF6801' }}>to&#8209;End</span></>,
    subtitle: 'Campaign planning, artwork design, printing & installation.',
    iconSrc: '/assets/Group 220.png',
    iconAlt: 'End-to-end service icon',
  },
  {
    title: <>Local + <span style={{ color: '#FF6801' }}>National</span></>,
    subtitle: 'Helping local businesses and national brands get seen on the road.',
    iconSrc: '/assets/Group 221.png',
    iconAlt: 'Local and national campaigns icon',
  },
];

function useIntersection(ref, options) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return isVisible;
}

export default function Performance() {
  const sectionRef = useRef(null);
  const isVisible = useIntersection(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative w-full bg-white py-12 lg:py-16 xl:py-24 overflow-hidden"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 xl:gap-12">
        {/* Left content */}
        <div className="w-full lg:flex-1 min-w-0 pl-6 sm:pl-8 lg:pl-12 xl:pl-[max(48px,calc((100vw-1720px)/2))] pr-6 lg:pr-6 py-2">
          <p
            className={`text-brand-orange-light font-bold text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[23px] leading-[143%] tracking-[0.32em] uppercase mb-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Why Businesses Choose Streetline Media
          </p>
          <h2
            className={`text-[26px] sm:text-[36px] lg:text-[40px] xl:text-[54px] 2xl:text-[65px] font-extrabold leading-[110%] tracking-[0.01em] capitalize text-black mb-6 lg:mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Roadside advertising <span className="text-[#FF6801]">Performance</span>
          </h2>

          {/* 20 Years stat */}
          <div className="flex items-center sm:items-end gap-5 sm:gap-6 xl:gap-8">
            <div className="flex-shrink-0">
              <span
                className={`text-[48px] sm:text-[64px] md:text-[76px] lg:text-[70px] xl:text-[98px] 2xl:text-[130px] whitespace-nowrap font-extrabold text-gradient-years transition-all duration-700 delay-200 block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  lineHeight: '100%',
                  letterSpacing: '-0.01em',
                }}
              >
                20 Years
              </span>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[75px] sm:h-[95px] lg:h-[105px] xl:h-[135px] bg-[#D9D9D9] flex-shrink-0" />

            {/* Right stat label */}
            <div className="flex-shrink-0 pb-1 sm:pb-2">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/assets/Group 124.png"
                  alt="Experience icon"
                  className="w-5 sm:w-6 h-auto object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <p
                className="font-bold text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[23px] leading-[125%] text-black/40 whitespace-nowrap"
                style={{ letterSpacing: '-0.02em' }}
              >
                Outdoor <br /> Advertising<br />Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right - Feature cards in dark panel touching right screen edge */}
        <div
          className={`w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] lg:min-w-[420px] xl:min-w-[500px] flex-shrink-0 bg-black rounded-[24px] lg:rounded-l-[32px] xl:rounded-l-[42px] lg:rounded-r-none overflow-hidden relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
          style={{ minHeight: '480px' }}
        >
          {/* Feature items */}
          <div className="relative z-10 px-6 sm:px-10 lg:px-8 xl:px-14 py-8 sm:py-10 xl:py-14 flex flex-col justify-center h-full">
            {featureItems.map((item, i) => (
              <div key={i}>
                <div className="flex items-start gap-4 sm:gap-6">
                  {/* Orange circle with icon */}
                  <div className="flex-shrink-0 w-[58px] h-[58px] sm:w-[70px] sm:h-[70px] xl:w-[80px] xl:h-[80px] rounded-full border border-[#FFD8BD] flex items-center justify-center overflow-hidden bg-black">
                    <img
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="pt-1 sm:pt-2 min-w-0 flex-1">
                    <h3
                      className="font-extrabold text-[20px] sm:text-[26px] lg:text-[28px] xl:text-[36px] text-white capitalize mb-1"
                      style={{ lineHeight: '115%', letterSpacing: '0.01em' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-white text-[12px] sm:text-[14px] xl:text-[15px] font-normal leading-[143%]"
                      style={{ opacity: 0.55, letterSpacing: '0.01em' }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                {i < featureItems.length - 1 && (
                  <div className="w-full h-[1px] bg-[#D9D9D9]/20 my-5 sm:my-6 xl:my-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
