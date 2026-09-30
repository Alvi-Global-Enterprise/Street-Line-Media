import { ArrowRight, Maximize2, Zap } from 'lucide-react';

const billboards = [
  {
    id: 'billboard-m25-96',
    image: '/assets/Mask group1.png',
    title: 'M25 96 Sheet',
    location: 'Essex & Waltham Abbey',
    status: 'Available',
    statusColor: 'bg-[#56D856]',
    statusTextColor: 'text-black',
    size: '6m × 3m',
    traffic: 'High Traffic',
  },
  {
    id: 'billboard-m25-harold',
    image: '/assets/Mask group (1).png',
    title: 'M25 – Harold Wood',
    location: 'Essex',
    status: 'Limited Availability',
    statusColor: 'bg-brand-orange',
    statusTextColor: 'text-black',
    size: '6m × 3m',
    traffic: 'High Traffic',
  },
  {
    id: 'billboard-a47-norwich',
    image: '/assets/Mask group (2).png',
    title: 'A47 – Norwich',
    location: 'Norfolk',
    status: 'Available',
    statusColor: 'bg-[#56D856]',
    statusTextColor: 'text-black',
    size: '6m × 3m',
    traffic: 'High Traffic',
  },
];

export default function BillboardLocations() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="locations"
      className="relative w-full min-h-[874px] overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/assets/image 15.png"
        alt="Streetline billboard at dusk"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-[100px] py-16 lg:py-24">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <p className="section-label text-brand-orange-light mb-4">Billboard Locations</p>
            <h2
              className="font-extrabold text-[20px] md:text-[32px] lg:text-[38px] xl:text-[54px] text-white capitalize"
              style={{ lineHeight: '109%', letterSpacing: '0.01em' }}
            >
              Featured <span className='text-[#FF6801]' >Billboards opportunities</span>
            </h2>
            <p
              className="text-white mt-4 max-w-[1085px]"
              style={{ fontSize: 'clamp(16px, 1.6vw, 25px)', lineHeight: '141%', letterSpacing: '0.01em' }}
            >
              High-visibility roadside sites across the UK, reaching thousands of potential customers every day.
            </p>
          </div>
        </div>

        {/* Billboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {billboards.map((bb) => (
            <article
              key={bb.id}
              id={bb.id}
              className="card-billboard group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-[315px] overflow-hidden rounded-t-2xl">
                <img
                  src={bb.image}
                  alt={`${bb.title} billboard location`}
                  className="w-full h-full   transition-transform duration-500 group-hover:scale-105"
                />
                {/* Status badge */}
                <span
                  className={`absolute top-5 left-5 ${bb.statusColor} ${bb.statusTextColor} font-bold text-[18px] px-5 py-2 rounded-full`}
                >
                  {bb.status}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-white text-[20px] leading-[141%] tracking-[0.01em]">
                      {bb.title}
                    </h3>
                    <p className="text-white/70 text-[13px] uppercase tracking-[0.01em] mt-1 flex items-center gap-1">
                      <img src="/assets/loc.png" className='w-3 h-3' alt="" srcset="" /> {bb.location}
                    </p>
                  </div>
                  {/* Arrow circle button */}
                  <button
                    className="flex-shrink-0 w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center transition-all duration-250 hover:bg-white/20"
                    aria-label={`View ${bb.title} details`}
                  >
                    <ArrowRight size={14} className="text-white" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#D9D9D9]/30 mb-4" />

                {/* Meta info */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <img src="/assets/sizes.png" className='w-5 h-5' alt="" srcset="" />
                    <span className="font-bold text-[20px] text-brand-orange tracking-[0.01em]">
                      {bb.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/assets/eye.png" className='w-5 h-5' alt="" srcset="" />
                    <span className="font-bold text-[20px] text-brand-orange tracking-[0.01em]">
                      {bb.traffic}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
