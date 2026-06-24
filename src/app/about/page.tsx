import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Winter Wonder Lights GA — Atlanta's trusted holiday lighting company since 2006. Custom Christmas light installation for residential and commercial properties.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">About Winter Wonder Lights</h1>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Atlanta&apos;s trusted choice for professional holiday lighting since 2006.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Bringing Holiday Magic to Atlanta Since{" "}
                <span className="text-gold-600">2006</span>
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4 mb-6" />
              <p className="text-gray-600 leading-relaxed">
                Winter Wonder Lights GA is a family-owned holiday lighting company specializing in
                custom Christmas light installation for residential and commercial properties
                throughout the Atlanta metropolitan area.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                What started as a passion for creating beautiful holiday displays has grown into one
                of Atlanta&apos;s most trusted lighting companies. We&apos;ve illuminated over 10,000 homes
                and installed over 1 million lights, bringing joy to families and businesses across
                the region.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our team of lighting experts handles every detail — from the initial design
                consultation through professional installation, seasonal maintenance, and careful
                takedown. We use only commercial-grade materials and the latest lighting technology
                to ensure your display is safe, stunning, and energy-efficient.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
                {[
                  { value: "10,000+", label: "Homes Brightened" },
                  { value: "1,000,000+", label: "Lights Installed" },
                  { value: "4.6/5", label: "Google Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl py-3 px-2 sm:py-4 sm:px-3 text-center border border-gray-100">
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gold-600 whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-section.jpg"
                alt="Winter Wonder Lights team and property"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">Our Commitment</h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-4 mb-5" />
            <p className="text-gray-600 text-lg">
              We believe great holiday lighting should be stress-free, safe, and spectacular.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                desc: "We use only commercial-grade LED lights and premium materials. Every installation is built to last the entire season and beyond.",
              },
              {
                title: "Safety",
                desc: "Our team is fully licensed and insured. We follow strict safety protocols for every installation, from rooftop work to electrical connections.",
              },
              {
                title: "Service",
                desc: "From your first call to post-season takedown, we're here for you. Same-week service calls and free bulb replacements throughout the season.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 sm:p-7 border border-gray-100">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Light Up Your Holidays
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Contact us for a free estimate and discover why Atlanta trusts Winter Wonder Lights.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base"
            >
              Get a Free Estimate
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
