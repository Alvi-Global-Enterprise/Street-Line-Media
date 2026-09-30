import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'service-campaign-planning',
    icon: '/assets/Group 152.png',
    title: 'Campaign Planning',
    description: 'We help you choose the right locations to reach your target audience.',
  },
  {
    id: 'service-artwork-design',
    icon: '/assets/Group 157.png',
    title: 'Artwork & Design',
    description: 'Our team creates eye-catching artwork that gets your message noticed.',
  },
  {
    id: 'service-printing',
    icon: '/assets/Group 162.png',
    title: 'Printing',
    description: 'High-quality, weatherproof printing for maximum impact.',
  },
  {
    id: 'service-installation',
    icon: '/assets/Group 185.png',
    title: 'Installation',
    description: 'Professional and safe installation at your chosen locations.',
  },
];

const steps = [
  {
    id: 'step-01',
    num: '01',
    title: 'Choose a Location',
    description: 'Select the best billboard sites for your campaign.',
    icon: '/assets/step-location.png',
  },
  {
    id: 'step-02',
    num: '02',
    title: 'Create the Artwork',
    description: 'We design your advert to make an impact.',
    icon: '/assets/step-artwork.png',
  },
  {
    id: 'step-03',
    num: '03',
    title: 'Print',
    description: 'High-quality, durable printing for outdoor use.',
    icon: '/assets/step-print.png',
  },
  {
    id: 'step-04',
    num: '04',
    title: 'Install & Go Live',
    description: 'We handle installation and your advert goes live.',
    icon: '/assets/step-install.png',
  },
];

function ServiceCard({ service }) {
  return (
    <article
      id={service.id}
      className="bg-white shadow-[0_0_25px_rgba(0,0,0,0.2)] rounded-[20px] p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] group"
    >
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center">
        <img
          src={service.icon}
          alt={`${service.title} icon`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Title */}
      <h3 className="font-bold  md:text-[16px] lg:text-[20px] xl:text-[24px] text-black leading-[150%]">{service.title}</h3>

      {/* Description */}
      <p className="text-black font-normal text-[24px] leading-[150%] flex-1">{service.description}</p>

      {/* Divider */}
      <div className="w-full h-[2px] bg-[#D9D9D9]" />

      {/* Learn More */}
      <button
        className="inline-flex items-center gap-2 text-brand-orange font-bold text-[18px] uppercase tracking-wider transition-all duration-250 hover:gap-3 group-hover:translate-x-1"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <ArrowRight size={14} strokeWidth={2.5} className="text-brand-orange" />
      </button>
    </article>
  );
}

export default function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-12">
          <div className="max-w-[791px]">
            <p className="section-label text-brand-orange-light mb-4">Our Services</p>
            <h2
              className="font-extrabold text-[20px] md:text-[32px] lg:text-[38px] xl:text-[54px] text-black capitalize"
              style={{ lineHeight: '127%', letterSpacing: '0.01em' }}
            >
              A complete roadside <span className='text-[#FF6801]' >advertising service.</span>
            </h2>
          </div>
          <p
            className="text-black max-w-[667px] text-right self-end"
            style={{ fontSize: 'clamp(16px, 1.6vw, 25px)', lineHeight: '141%', letterSpacing: '0.01em' }}
          >
            We make billboard advertising simple, handling every step from planning to installation, so you can focus on your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* How it works - Black section (Figma Group 224 / Rectangle 66) */}
        <div className="bg-black rounded-[20px] py-12 lg:py-16 px-6 lg:px-12 xl:px-16 mt-8">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div>
              {/* Figma: OUR SERVICES — 23px, weight 700, #FFAD74, letter-spacing 0.32em */}
              <p
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(15px, 1.3vw, 23px)',
                  lineHeight: '25px',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: '#FFAD74',
                  marginBottom: '10px',
                }}
              >
                Our Services
              </p>
              {/* Figma: 54px, weight 800, line-height 109%, #FFFFFF with orange span */}
              <h3
                className="font-extrabold text-white capitalize text-[24px] sm:text-[34px] lg:text-[44px] xl:text-[54px]"
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  lineHeight: '109%',
                  letterSpacing: '0.01em',
                  maxWidth: '1091px',
                }}
              >
                A Complete Roadside <br />
                <span style={{ color: '#FF6801' }}>Advertising Service.</span>
              </h3>
            </div>

            {/* Figma: Ellipse 18 — 152.68px circle, border 2px solid #FFFFFF, thick orange arrow */}
            <div
              className="flex-shrink-0 hidden lg:flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
              style={{
                width: '152.68px',
                height: '152.68px',
                border: '2px solid #FFFFFF',
              }}
            >
              {/* Figma: Vector 5 (42.88px) + Vector 6 (17.28px x 30.21px), 6.5px solid #FF6801 */}
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
                <line x1="2" y1="16" x2="43" y2="16" stroke="#FF6801" strokeWidth="6.5" strokeLinecap="round" />
                <path d="M 28 3 L 42 16 L 28 29" stroke="#FF6801" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Steps row — Figma Group 212: 4 cards (380x133px each, bg #212121, radius 20px) connected by 67px dashed line with arrow tip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-[67px] relative items-stretch">
            {steps.map((step, i) => (
              <div key={step.id} className="relative flex items-stretch">
                {/* Step card — Figma: 380x133px, bg #212121, border-radius 20px */}
                <article
                  id={step.id}
                  className="flex-1 flex items-center bg-[#212121] rounded-[20px] transition-all duration-300 hover:bg-[#282828] group"
                  style={{
                    minHeight: '133px',
                    padding: '16px 18px',
                  }}
                >
                  <div className="flex items-center gap-4 w-full">

                    {/* Icon group — Figma Group 173: 87x91px */}
                    <div className="relative flex-shrink-0" style={{ width: '87px', height: '91px' }}>
                      {/* Orange circle — Figma: Ellipse 6, 83x83px, #FF6801 */}
                      <div
                        className="absolute flex items-center justify-center rounded-full bg-[#FF6801] shadow-md transition-transform duration-300 group-hover:scale-105"
                        style={{
                          width: '83px',
                          height: '83px',
                          bottom: 0,
                          left: '4px',
                        }}
                      >
                        {/* Exact Black Icon from Figma */}
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-9 h-9 object-contain"
                        />
                      </div>

                      {/* White number badge — Figma: Ellipse 9, 33x33px, #FFFFFF */}
                      <div
                        className="absolute flex items-center justify-center rounded-full bg-white shadow-sm"
                        style={{
                          width: '33px',
                          height: '33px',
                          top: 0,
                          left: 0,
                          zIndex: 2,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'LINE Seed JP', sans-serif",
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '141%',
                            letterSpacing: '-0.05em',
                            color: '#000000',
                            textTransform: 'uppercase',
                          }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>

                    {/* Text — Figma: title 15px uppercase, desc 18px / 14px with 0.56 opacity */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-bold text-white text-[15px] uppercase"
                        style={{
                          fontFamily: "'LINE Seed JP', sans-serif",
                          lineHeight: '141%',
                          letterSpacing: '0.01em',
                          marginBottom: '4px',
                        }}
                      >
                        {step.title}
                      </h4>
                      <p
                        className="text-[13px] xl:text-[14px]"
                        style={{
                          fontFamily: "'LINE Seed JP', sans-serif",
                          fontWeight: 400,
                          lineHeight: '141%',
                          letterSpacing: '0.01em',
                          color: '#FFFFFF',
                          opacity: 0.56,
                        }}
                      >
                        {step.description}
                      </p>
                    </div>

                  </div>
                </article>

                {/* Dashed connector with arrow tip — Figma: Vector 2/4/5: 67px, 4px dashed #FF6801, ending with arrowhead pointing right */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden xl:flex items-center absolute z-20 pointer-events-none"
                    style={{
                      right: '-67px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '67px',
                    }}
                  >
                    <svg width="67" height="14" viewBox="0 0 67 14" fill="none" className="overflow-visible">
                      <line
                        x1="0"
                        y1="7"
                        x2="52"
                        y2="7"
                        stroke="#FF6801"
                        strokeWidth="3.5"
                        strokeDasharray="6 4"
                      />
                      <polygon
                        points="50,2 65,7 50,12"
                        fill="#FF6801"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
