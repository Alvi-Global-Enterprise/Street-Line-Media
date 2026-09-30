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
      className="relative w-full bg-white py-16 lg:py-24"
    >
      <div className=" mx-auto px-6 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-1 ">
            <p
              className={`text-brand-orange-light font-bold text-[16px] lg:text-[23px] leading-[143%] tracking-[0.32em] uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              Why Businesses Choose Streetline Media
            </p>
            <h2
              className={`text-[20px] lg:text-[40px] xl:text-[65px] font-extrabold leading-[109%] tracking-[0.01em] capitalize text-black  transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
            >
              Roadside advertising <span className='text-[#FF6801]' > Performance</span>
            </h2>

            {/* 20 Years stat */}
            <div className="flex items-end gap-8">
              <div>
                <span
                  className={` text-[60px] text-nowrap lg:text-[80px] xl:text-[140px] px-2 font-extrabold text-gradient-years transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  style={{

                    lineHeight: '109%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  20 Years
                </span>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-[176px] bg-[#D9D9D9] flex-shrink-0 hidden md:block" />

              {/* Right stat label */}
              <div className="hidden md:block pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/assets/Group 124.png"
                    alt="Experience icon"
                    className="w-5 h-auto"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <p
                  className="font-bold text-[14px] lg:text-[23px] leading-[30px] text-black/40"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Outdoor Advertising<br />Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right - Feature cards in dark panel */}
          <div
            className={`flex-shrink-0 w-full  bg-black rounded-[34px] overflow-hidden relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            style={{ minHeight: '542px' }}
          >

            {/* Feature items */}
            <div className="relative z-10  px-20 py-10 flex flex-col justify-center h-full gap-16">
              {featureItems.map((item, i) => (
                <div key={i} className="flex  items-start gap-6">
                  {/* Orange circle with icon */}
                  <div className="flex-shrink-0 w-[80px] h-[80px] rounded-full border border-[#FFD8BD] flex items-center justify-center overflow-hidden">
                    <img
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="pt-4">
                    <h3
                      className="font-extrabold text-[20px] md:text-[46px] lg:text-[46px] text-white capitalize mb-2"
                      style={{ lineHeight: '109%', letterSpacing: '0.01em' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-white text-[12px] md:text-[14px] lg:text-[16px]  font-normal"
                      style={{ lineHeight: '143%', opacity: 0.45, letterSpacing: '0.01em' }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  {i !== 0 && <div className="absolute -mt-8" style={{ width: '40%', height: '1px', background: '#D9D9D9' }} />}
                </div>
              ))}
            </div>

            {/* Horizontal divider lines inside panel */}
            {/* 
            <div className="absolute inset-x-0" style={{ top: '66%', height: '2px', background: '#D9D9D9', opacity: 0.3 }} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
