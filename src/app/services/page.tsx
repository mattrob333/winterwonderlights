import Image from "next/image";
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
    icon: "🏠",
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
    icon: "🏢",
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
    icon: "✨",
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
    icon: "🛠️",
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
    icon: "🔧",
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
    icon: "📦",
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
                  <Image
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
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
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
