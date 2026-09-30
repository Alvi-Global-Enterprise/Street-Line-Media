import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    campaignDates: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      {/* Figma Group 227: 1721px x 451px, left 100px */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[100px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[87px] items-start justify-between">

          {/* Left - Contact info (Figma Group 184: 787px wide, left 100px) */}
          <div className="flex-shrink-0 w-full xl:w-[720px] max-w-[787px]">
            {/* Figma: CONTACT US — 23px, weight 700, #FFAD74, letter-spacing 0.32em */}
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
              Contact Us
            </p>

            {/* Figma: Let’s get your campaign started — 54px, weight 800, line-height 104% */}
            <h2
              className="font-extrabold text-black capitalize text-[28px] sm:text-[38px] lg:text-[46px] xl:text-[54px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '104%',
                letterSpacing: '-0.01em',
                marginBottom: '20px',
              }}
            >
              Let's Get Your <br />
              <span style={{ color: '#FF6801' }}>Campaign Started</span>
            </h2>

            {/* Figma: 20px, weight 400, line-height 141% */}
            <p
              className="text-black font-normal text-[16px] sm:text-[18px] xl:text-[20px]"
              style={{
                fontFamily: "'LINE Seed JP', sans-serif",
                lineHeight: '141%',
                letterSpacing: '0.01em',
                maxWidth: '720px',
                marginBottom: '36px',
              }}
            >
              Tell us about your advertising needs and our team will get back to you with availability and a quote.
            </p>

            {/* Contact details — Phone & Email with orange icons */}
            <div className="flex flex-col gap-6">
              {/* Phone — Figma: 25px, weight 700, color #000000, opacity 0.43 */}
              <a
                href="tel:02080361084"
                id="contact-phone"
                className="flex items-center gap-4 transition-colors duration-250 hover:text-brand-orange group"
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(18px, 1.4vw, 25px)',
                  lineHeight: '141%',
                  letterSpacing: '0.01em',
                  textTransform: 'uppercase',
                  color: 'rgba(0, 0, 0, 0.43)',
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Phone size={24} className="text-[#FF6801]" fill="#FF6801" />
                </div>
                <span>0208 0361084</span>
              </a>

              {/* Email — Figma: 25px, weight 700, underline, uppercase, opacity 0.43 */}
              <a
                href="mailto:sales@streetlinemedia.co.uk"
                id="contact-email"
                className="flex items-center gap-4 transition-colors duration-250 hover:text-brand-orange group"
                style={{
                  fontFamily: "'LINE Seed JP', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(16px, 1.4vw, 25px)',
                  lineHeight: '141%',
                  letterSpacing: '0.01em',
                  textDecorationLine: 'underline',
                  textTransform: 'uppercase',
                  color: 'rgba(0, 0, 0, 0.43)',
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <Mail size={24} className="text-[#FF6801]" />
                </div>
                <span>sales@streetlinemedia.co.uk</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Form (Figma: width 947px, left 874px) */}
          <div className="flex-1 w-full max-w-[947px]">
            {submitted ? (
              <div className="bg-[#EDEDEC] rounded-[16px] p-12 text-center">
                <div className="w-16 h-16 bg-[#FF6801] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M 4 12 L 9 17 L 20 6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-[28px] text-black mb-3">Enquiry Sent!</h3>
                <p className="text-black/60 text-[18px] leading-[141%]">
                  Thank you for reaching out. Our team will be in touch shortly with availability and a quote.
                </p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 — Rectangle 82 & 83: 459px x 69px each, radius 8px, bg #EDEDEC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="input-full-name"
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                  <input
                    id="input-company-name"
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                </div>

                {/* Row 2 — Rectangle 84 & 85: 459px x 69px each, radius 8px, bg #EDEDEC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="input-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                  <input
                    id="input-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                </div>

                {/* Row 3 — Rectangle 86 & 88: 459px x 69px each, radius 8px, bg #EDEDEC */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="input-location"
                    type="text"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Preferred Location *"
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                  <input
                    id="input-campaign-dates"
                    type="text"
                    name="campaignDates"
                    value={form.campaignDates}
                    onChange={handleChange}
                    placeholder="Campaign Dates *"
                    style={{ fontFamily: "'LINE Seed JP', sans-serif" }}
                    className="w-full h-[69px] bg-[#EDEDEC] rounded-[8px] px-6 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all"
                  />
                </div>

                {/* Row 4 — Rectangle 87: 947px x 115px, radius 8px, bg #EDEDEC */}
                <div>
                  <textarea
                    id="input-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    rows={4}
                    style={{ fontFamily: "'LINE Seed JP', sans-serif", height: '115px' }}
                    className="w-full bg-[#EDEDEC] rounded-[8px] px-6 py-4 font-bold text-[18px] sm:text-[20px] text-black placeholder:text-black/20 placeholder:font-bold focus:outline-none focus:ring-2 focus:ring-[#FF6801] transition-all resize-none"
                  />
                </div>

                {/* Row 5 — Rectangle 2: 947px x 48px, #FF6801, radius 24.09px */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#e05b00] hover:scale-[1.01] active:scale-[0.99] group shadow-sm"
                  style={{
                    height: '48px',
                    background: '#FF6801',
                    borderRadius: '24.0949px',
                    color: '#FFFFFF',
                    fontFamily: "'LINE Seed JP', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '20px',
                  }}
                >
                  <span>Send Enquiry</span>
                  {/* Figma Vector 5 + Vector 6: 2.5px solid white arrow */}
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M 1 6 H 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 11 1.5 L 15.5 6 L 11 10.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

