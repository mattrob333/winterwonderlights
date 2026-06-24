import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-navy-900 overflow-hidden min-h-[70vh]">
        {/* Background image */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury home with professional holiday lighting"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/70 to-navy-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                Serving Atlanta Since 2016
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance">
                Atlanta&apos;s Top Choice for{" "}
                <span className="text-gold-400">Magical Holiday Lighting</span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Get a professional installation of Christmas lights on your home or business this holiday season.
                Call for a quote today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
                >
                  Get a Free Estimate
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-all text-base"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Already a customer?{" "}
                <a href="tel:+167****9002" className="text-gold-400 hover:text-gold-300 font-medium">
                  Call (678) 782-9002
                </a>
              </p>
            </div>

            {/* Right: Stats + Quick Quote */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10,000+", label: "Homes Brightened" },
                  { value: "1,000,000+", label: "Lights Installed" },
                  { value: "4.6/5", label: "Google Rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center border border-white/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-gold-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick Quote Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Get Your Free Estimate</h3>
                <form className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-5 py-3 rounded-lg transition-all text-sm"
                  >
                    Get a Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-navy-950 border-y border-navy-800/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium mb-4">
            Trusted by homeowners and businesses across Atlanta
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-gray-500 text-sm">
            <span className="font-semibold text-gray-400">✓ Licensed &amp; Insured</span>
            <span className="text-gray-600">|</span>
            <span className="font-semibold text-gray-400">✓ 10+ Years Experience</span>
            <span className="text-gray-600">|</span>
            <span className="font-semibold text-gray-400">✓ Commercial-Grade Lights</span>
            <span className="text-gray-600">|</span>
            <span className="font-semibold text-gray-400">✓ Free Estimates</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Deck the Halls with Stunning{" "}
                <span className="text-gold-600">Christmas and Holiday Lights</span>
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4 mb-6" />
              <p className="text-gray-600 leading-relaxed">
                Since 2006, we&apos;ve specialized in providing custom Christmas light installation services to
                both residential and commercial properties. From elegant designs to commercial property
                lighting, we&apos;ve illuminated Atlanta since 2016 with the best lighting trends.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our team of lighting experts handles every detail — from custom design to professional
                installation and seasonal removal — so you can enjoy a stunning holiday display without
                climbing a ladder.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Custom designs tailored to your home or business",
                  "Commercial-grade LED lighting for durability and energy savings",
                  "Professional installation by trained experts",
                  "Hassle-free takedown and storage options",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold mt-6 transition-colors"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-section.jpg"
                alt="Luxury home exterior with professional holiday lighting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Our Holiday Lighting Services</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-5" />
            <p className="text-gray-600 text-lg">
              From cozy homes to large commercial properties, we bring holiday magic to every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Residential Christmas Lighting",
                desc: "Stay off the ladder this year! Our experts handle every detail — custom designs, professional installation, and removal. Make your home the star of the neighborhood.",
                icon: "🏠",
              },
              {
                title: "Commercial Christmas Lighting",
                desc: "Make your business sparkle with professional Christmas light installation that's safe and stress-free. Attract customers and create a festive atmosphere.",
                icon: "🏢",
              },
              {
                title: "Custom Holiday Designs",
                desc: "Unique, tailored lighting designs that match your vision. From elegant white lights to colorful displays, we create the perfect look for your property.",
                icon: "✨",
              },
              {
                title: "Lighting Maintenance",
                desc: "If you experience any issues during the season, just call, text, or email us and we'll schedule a repair promptly. We'll replace bulbs at no charge for events.",
                icon: "🔧",
              },
              {
                title: "Professional Installation",
                desc: "We use commercial-grade lighting supplies with custom-fitted lights for each section. All electrical work is handled by our trained team with light-sensitive timers.",
                icon: "🛠️",
              },
              {
                title: "Storage &amp; Takedown",
                desc: "After the holidays, we carefully take down your lights. If you purchased your lights, we offer convenient storage for a nominal annual fee.",
                icon: "📦",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-7 py-3 rounded-lg transition-all text-base"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-navy-900 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-5" />
            <p className="text-gray-400 text-lg">
              From consultation to sparkle — our proven process makes holiday lighting effortless.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Quote",
                desc: "Our lighting experts will visit your home to determine the best style and arrangement. Once the design is accepted, you'll get an affordable rate at no charge.",
              },
              {
                step: "02",
                title: "Professional Installation",
                desc: "We use commercial-grade lighting supplies with custom-fitted lights for each section. Our team handles all electrical work with timers that turn on at dusk.",
              },
              {
                step: "03",
                title: "Maintenance",
                desc: "If any issues arise, simply call, text, or email us and we'll schedule a repair promptly. Bulbs go out during the season — we replace them at no charge.",
              },
              {
                step: "04",
                title: "Uninstall &amp; Storage",
                desc: "After New Year's (or earlier upon request), we carefully take down your lights. If you purchased them, we offer convenient storage for a nominal annual fee.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gold-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-gold-500/20">
                  <span className="text-2xl font-bold text-gold-400">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base shadow-lg shadow-gold-500/25"
            >
              Schedule My Inspection
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/craftsman-home.jpg"
                alt="Inviting home with professional holiday lighting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Why Choose{" "}
                <span className="text-gold-600">Winter Wonder Lights?</span>
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6">
                We bring over a decade of experience and a passion for creating stunning holiday displays
                that make your home or business the talk of the neighborhood.
              </p>
              <div className="space-y-4">
                {[
                  { title: "10+ Years Experience", desc: "Serving Atlanta since 2016 with proven expertise in holiday lighting." },
                  { title: "Commercial-Grade Materials", desc: "Premium LED lights and commercial-grade supplies for lasting brilliance." },
                  { title: "Full-Service Convenience", desc: "Design, install, maintain, remove, and store — we handle everything." },
                  { title: "Licensed &amp; Insured", desc: "Fully licensed and insured for your peace of mind." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-5 h-5 bg-gold-500/10 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="bg-gray-50 py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Proudly Serving Metro Atlanta &amp; North Georgia</h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional holiday lighting installation throughout the Atlanta metropolitan area
            and surrounding North Georgia communities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "Atlanta",
              "Marietta",
              "Alpharetta",
              "Roswell",
              "Sandy Springs",
              "Buckhead",
              "Dunwoody",
              "Cumming",
              "Johns Creek",
              "Suwanee",
              "Woodstock",
              "Kennesaw",
            ].map((city) => (
              <span
                key={city}
                className="bg-white px-4 py-2 rounded-full text-sm text-navy-700 border border-gray-200 shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Featured Projects</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-5" />
            <p className="text-gray-600 text-lg">
              See how we&apos;ve transformed homes and businesses across Atlanta.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/gallery-1.jpg", alt: "Colonial home with elegant holiday lighting" },
              { src: "/images/gallery-2.jpg", alt: "Modern home with sleek holiday lighting" },
              { src: "/images/gallery-3.jpg", alt: "Traditional home with colorful Christmas lights" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-5" />
            <p className="text-gray-600 text-lg">
              Everything you need to know about our holiday lighting services.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How much does holiday light installation cost?",
                a: "Costs vary based on the size of your property, complexity of the design, and type of lights. We provide free, no-obligation estimates. Contact us for a personalized quote.",
              },
              {
                q: "Do I need to be home for installation?",
                a: "Not necessarily. Once we've completed the initial consultation and design walk-through, our team can install your lights while you're away. We'll coordinate with you to ensure everything meets your expectations.",
              },
              {
                q: "What type of lights do you use?",
                a: "We use commercial-grade LED lights that are energy-efficient, durable, and produce a beautiful, consistent glow. Our lights are professionally rated for outdoor use and designed to last throughout the holiday season.",
              },
              {
                q: "Do you service commercial properties?",
                a: "Yes! We provide holiday lighting for businesses, shopping centers, office parks, HOAs, and municipal properties throughout the Atlanta area.",
              },
              {
                q: "When should I schedule my installation?",
                a: "We recommend scheduling in early fall (September–October) to secure your preferred installation date. Our installation season typically runs from November through early December.",
              },
              {
                q: "What happens if a bulb burns out?",
                a: "It's common for bulbs to go out during the season. Simply call, text, or email us and we'll schedule a repair promptly. If you have a special event or family visiting, just let us know a few days in advance and we'll replace the bulbs at no charge.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 group open:border-gold-300 transition-all"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="font-medium text-navy-900 pr-4 text-sm sm:text-base">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              View All FAQs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-navy-900 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, #eab308 0%, transparent 50%), radial-gradient(ellipse at 70% 0%, #38bdf8 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Have Your Holiday Lights Done for You?
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto">
            Fill out the contact form, and one of our lighting experts will reach out to you within the
            hour. You can also reach us during business hours.
          </p>
          <a
            href="tel:+167****9002"
            className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold text-gold-400 hover:text-gold-300 mt-6 transition-colors"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            (678) 782-9002
          </a>
          <p className="text-sm text-gray-500 mt-2">Mon – Fri: 9:00 am – 5:00 pm</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base shadow-lg shadow-gold-500/25"
            >
              Get a Free Estimate
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-all text-base"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
