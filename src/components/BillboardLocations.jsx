import { ArrowRight, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

const featuredBillboard = {
  id: 'billboard-m25-96',
  image: '/assets/Mask group1.png',
  title: 'M25 96 Sheet',
  location: 'Essex & Waltham Abbey',
  corridor: 'M25 Orbital Motorway (Junction 26)',
  status: 'Available',
  statusColor: 'bg-[#56D856]',
  statusTextColor: 'text-black',
  size: '6m × 3m',
  format: '96 Sheet Giant Format',
  traffic: 'High Traffic Volume',
  description:
    'Dominating one of the UK’s busiest orbital motorway corridors, this flagship 96-sheet roadside site delivers maximum dwell time, uninterrupted long-range visibility, and commanding high-impact reach to hundreds of thousands of daily motorists.',
};

export default function BillboardLocations() {
  return (
    <section
      id="locations"
      className="relative w-full min-h-[700px] lg:min-h-[800px] xl:min-h-[874px] overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/assets/image 15.png"
        alt="Streetline billboard at dusk"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />

      {/* Subtle ambient brand glow behind the featured card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 xl:px-[100px] py-14 lg:py-20 xl:py-24">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 lg:mb-12">
          <div>
            <p className="section-label text-brand-orange-light mb-3">Billboard Locations</p>
            <h2
              className="font-extrabold text-[22px] md:text-[32px] lg:text-[40px] xl:text-[54px] text-white capitalize"
              style={{ lineHeight: '112%', letterSpacing: '0.01em' }}
            >
              Featured <span className="text-[#FF6801]">Billboard Opportunity</span>
            </h2>
            <p
              className="text-white mt-3 max-w-[1085px]"
              style={{ fontSize: 'clamp(15px, 1.4vw, 25px)', lineHeight: '141%', letterSpacing: '0.01em' }}
            >
              High-visibility roadside site across the UK, reaching thousands of potential customers every day.
            </p>
          </div>
        </div>

        {/* Featured Billboard Card: Single horizontal showcase layout */}
        <div className="max-w-[1240px] mx-auto">
          <article
            id={featuredBillboard.id}
            className="card-billboard rounded-2xl lg:rounded-3xl overflow-hidden group transition-all duration-300 hover:border-brand-orange/50 hover:shadow-[0_20px_50px_rgba(255,104,1,0.2)]"
          >
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Side: Billboard Image - Anchored right so the billboard and BMW are 100% visible without being cut off */}
              <div className="relative w-full lg:w-[50%] xl:w-[50%] min-h-[320px] sm:min-h-[380px] lg:min-h-[490px] overflow-hidden bg-black/40 flex items-center">
                <img
                  src={featuredBillboard.image}
                  alt={`${featuredBillboard.title} billboard location`}
                  className="w-full h-full object-cover object-right lg:object-[95%_center] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Subtle gradient to preserve image clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15 pointer-events-none" />

                {/* Live Availability Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-[#56D856] text-black font-extrabold text-[13px] sm:text-[15px] px-4 py-1.5 rounded-full shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-950"></span>
                  </span>
                  {featuredBillboard.status}
                </div>

                {/* Format Tag */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/60 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  {featuredBillboard.format}
                </div>
              </div>

              {/* Right Side: Details & Specs */}
              <div className="w-full lg:w-[50%] xl:w-[50%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div>
                  {/* Location Tag */}
                  {/* <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className="text-brand-orange flex-shrink-0" />
                    <span className="text-brand-orange-light font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
                      {featuredBillboard.location}
                    </span>
                  </div> */}

                  {/* Main Title & Arrow Button */}
                  <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="font-extrabold text-white text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[42px] leading-[115%] tracking-[0.01em]">
                        {featuredBillboard.title}
                      </h3>
                      <p className="text-brand-orange font-semibold text-sm sm:text-base mt-1">
                        {featuredBillboard.corridor}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="flex-shrink-0 w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-full border border-white/40 flex items-center justify-center transition-all duration-250 hover:bg-white/20 group-hover:bg-[#FF6801] group-hover:border-[#FF6801]"
                      aria-label={`Enquire about ${featuredBillboard.title}`}
                    >
                      <ArrowRight size={18} className="text-white" strokeWidth={2.5} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 text-sm sm:text-[15px] lg:text-[16px] leading-[160%] mb-5 sm:mb-6 font-normal">
                    {featuredBillboard.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-5 sm:mb-6">
                    {/* Spec 1: Size */}
                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-xl p-3.5 sm:p-4 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <img src="/assets/sizes.png" className="w-5 h-5 object-contain" alt="Size" />
                        <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                          Billboard Size
                        </span>
                      </div>
                      <p className="font-bold text-[17px] sm:text-[19px] text-white tracking-[0.01em]">
                        {featuredBillboard.size}
                      </p>
                      <p className="text-brand-orange-light text-xs font-medium mt-0.5">
                        96 Sheet Standard
                      </p>
                    </div>

                    {/* Spec 2: Traffic */}
                    <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-xl p-3.5 sm:p-4 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <img src="/assets/eye.png" className="w-5 h-5 object-contain" alt="Traffic" />
                        <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                          Audience Reach
                        </span>
                      </div>
                      <p className="font-bold text-[17px] sm:text-[19px] text-[#56D856] tracking-[0.01em]">
                        {featuredBillboard.traffic}
                      </p>
                      <p className="text-white/60 text-xs font-medium mt-0.5">Heavy Motorway Volume</p>
                    </div>

                    {/* Spec 3: Illumination */}
                    <div className="col-span-1 sm:col-span-2 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-xl p-3.5 sm:p-4 transition-colors flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles size={18} className="text-brand-orange" />
                          <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                            Visibility
                          </span>
                        </div>
                        <p className="font-bold text-[17px] sm:text-[19px] text-white tracking-[0.01em]">
                          24/7 Illuminated
                        </p>
                      </div>
                      <p className="text-brand-orange-light text-xs sm:text-sm font-medium">
                        Day & Night Impact
                      </p>
                    </div>

                    {/* Spec 4: Positioning */}
                    {/* <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 rounded-xl p-3.5 sm:p-4 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={18} className="text-brand-orange" />
                        <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                          Placement
                        </span>
                      </div>
                      <p className="font-bold text-[17px] sm:text-[19px] text-white tracking-[0.01em]">
                        Junction 26 (M25)
                      </p>
                      <p className="text-white/60 text-xs font-medium mt-0.5">Arterial Approach</p>
                    </div> */}
                  </div>
                </div>

                {/* Footer CTA */}
                <div>
                  <div className="w-full h-[1px] bg-white/15 mb-5" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* <a
                      href="#contact"
                      className="btn-orange justify-center group/btn shadow-lg shadow-brand-orange/20"
                    >
                      <span>Enquire For This Site</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-200 group-hover/btn:translate-x-1"
                      />
                    </a> */}

                    <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                      <CheckCircle2 size={16} className="text-[#56D856] flex-shrink-0" />
                      <span>Prime booking • Rapid turnaround</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
