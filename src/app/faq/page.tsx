import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Winter Wonder Lights GA's professional Christmas light installation services in Atlanta. Learn about costs, scheduling, maintenance, and more.",
};

const faqs = [
  {
    q: "How much does holiday light installation cost?",
    a: "Costs vary based on the size of your property, the complexity of the design, and the type of lights selected. We provide free, no-obligation estimates. Contact us for a personalized quote tailored to your home or business.",
  },
  {
    q: "Do I need to be home for installation?",
    a: "Not necessarily. Once we've completed the initial consultation and design walk-through, our team can install your lights while you're away. We'll coordinate with you to ensure the final result meets your expectations.",
  },
  {
    q: "What type of lights do you use?",
    a: "We use commercial-grade LED lights that are energy-efficient, durable, and produce a beautiful, consistent glow. Our lights are professionally rated for outdoor use and designed to last throughout the entire holiday season, even in Georgia weather.",
  },
  {
    q: "Do you offer both purchase and rental options?",
    a: "Yes! You can choose to purchase your lights outright and keep them for reuse, or lease them from us for the season. If you purchase, we offer convenient off-season storage for a nominal annual fee.",
  },
  {
    q: "Do you service commercial properties?",
    a: "Absolutely. We provide holiday lighting for businesses of all sizes, including office parks, shopping centers, restaurants, HOAs, municipal properties, and more throughout the Atlanta area.",
  },
  {
    q: "When should I schedule my installation?",
    a: "We recommend scheduling in early fall (September–October) to secure your preferred installation date. Our installation season typically runs from November through early December. The earlier you book, the better!",
  },
  {
    q: "What happens if a bulb burns out?",
    a: "It's common for bulbs to go out during the season. Simply call, text, or email us and we'll schedule a repair promptly. If you have a special event or family visiting, just let us know a few days in advance and we'll replace the bulbs at no charge.",
  },
  {
    q: "When do you take down the lights?",
    a: "We typically begin takedown after New Year's Day. If you need them taken down earlier (for a post-holiday event or if you're heading out of town), just let us know and we'll accommodate your schedule.",
  },
  {
    q: "Do you offer storage for my lights?",
    a: "Yes! If you purchased your lights from us, we offer convenient storage for a nominal annual fee. Your lights are professionally packed and stored in a climate-controlled facility, ready for re-installation next season.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire Atlanta metropolitan area and surrounding North Georgia communities, including Marietta, Alpharetta, Roswell, Sandy Springs, Buckhead, Dunwoody, Cumming, Johns Creek, Suwanee, Woodstock, Kennesaw, and more.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Winter Wonder Lights GA is fully licensed and insured. We take safety seriously and carry comprehensive liability insurance for your peace of mind.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply fill out our contact form, call us at (678) 782-9002, or email us at info@winterwonderlightsga.com. One of our lighting experts will reach out within the hour during business hours.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-lg text-gray-300">
            Everything you need to know about our holiday lighting services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 group open:border-gold-300 transition-all"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                  <span className="font-medium text-navy-900 pr-4 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            We&apos;re here to help. Reach out and one of our lighting experts will get back to you
            within the hour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base"
            >
              Contact Us
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
