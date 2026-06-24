import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional Christmas and holiday light installation services for residential and commercial properties in Atlanta. Free estimates, commercial-grade lights, full-service care.",
};

const services = [
  {
    title: "Residential Christmas Lighting",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    description:
      "Make your home the star of the neighborhood this holiday season. Our team handles every detail from custom design to professional installation and seasonal removal. We use commercial-grade LED lights that are energy-efficient and produce a beautiful, consistent glow.",
    features: [
      "Custom designs tailored to your home's architecture",
      "Commercial-grade LED lighting",
      "Professional installation by trained experts",
      "Hassle-free takedown after the holidays",
      "On-call maintenance throughout the season",
    ],
  },
  {
    title: "Commercial Christmas Lighting",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    description:
      "Make your business sparkle and attract customers with a professional holiday lighting display. We serve shopping centers, office parks, restaurants, HOAs, and municipal properties.",
    features: [
      "Large-scale commercial installations",
      "Brand-aligned custom designs",
      "Parking lot and landscape lighting",
      "Year-round maintenance options",
      "Fast, minimal-disruption installation",
    ],
  },
  {
    title: "Custom Holiday Designs",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    description:
      "From elegant warm-white classics to vibrant multi-color displays, we create a custom lighting design that matches your vision and complements your property's architecture.",
    features: [
      "In-person property consultation",
      "3D design previews",
      "Wide selection of light styles and colors",
      "Synchronized lighting options",
      "Seasonal themes and special events",
    ],
  },
  {
    title: "Installation & Setup",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    description:
      "Our trained installation crews handle every detail — from roof lines and gutters to trees, columns, and landscape features. All electrical work is professionally connected with light-sensitive timers.",
    features: [
      "Safe, professional installation",
      "Custom-fitted lights for each section",
      "Light-sensitive dusk-to-dawn timers",
      "No damage to roofs, gutters, or landscaping",
      "Fully insured for your peace of mind",
    ],
  },
  {
    title: "Maintenance & Repairs",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      "If you experience any issues with your lights during the season, simply call, text, or email us and we'll schedule a repair promptly. Bulbs go out — we replace them at no charge.",
    features: [
      "Season-long bulb replacement at no charge",
      "Quick response to service calls",
      "Pre-event touch-ups for special occasions",
      "Weather-damage repairs",
      "Same-week service available",
    ],
  },
  {
    title: "Takedown & Storage",
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    description:
      "After New Year's Day (or earlier upon request), we carefully take down your lights. If you purchased your lights from us, we offer convenient storage for a nominal annual fee.",
    features: [
      "Professional, careful removal",
      "No damage to your property",
      "Convenient off-season storage available",
      "Early takedown available on request",
      "Inspection and testing before re-installation next season",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Holiday Lighting Services</h1>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From residential curb appeal to commercial spectacles, we provide complete holiday lighting
            solutions across Atlanta and North Georgia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">{service.title}</h2>
                  <div className="w-12 h-1 bg-gold-500 rounded-full mt-3 mb-5" />
                  <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${
                    i % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <img
                    src={
                      [
                        "/images/about-section.jpg",
                        "/images/commercial-lighting.jpg",
                        "/images/craftsman-home.jpg",
                        "/images/gallery-1.jpg",
                        "/images/gallery-2.jpg",
                        "/images/gallery-3.jpg",
                      ][i]
                    }
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Contact us for a free, no-obligation estimate. We&apos;ll design the perfect holiday lighting
            for your home or business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base"
            >
              Get a Free Estimate
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+167****9002"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-6 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-all"
            >
              Call (678) 782-9002
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
