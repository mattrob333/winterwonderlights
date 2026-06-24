import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Get a Free Quote",
  description:
    "Contact Winter Wonder Lights GA for a free holiday light installation estimate. Call (678) 782-9002 or fill out our form and we'll respond within the hour.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Get a Free Estimate</h1>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the form below or give us a call. One of our lighting experts will reach out within the hour.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy-900 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy-900 mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    placeholder="(678) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Service Address / Area
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                    placeholder="City or neighborhood in metro Atlanta"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="residential-christmas">Residential Christmas Lighting</option>
                    <option value="commercial-christmas">Commercial Christmas Lighting</option>
                    <option value="custom-design">Custom Holiday Design</option>
                    <option value="maintenance">Lighting Maintenance</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 transition-all resize-none"
                    placeholder="Tell us about your project — property type, size, preferences, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base shadow-lg shadow-gold-500/25"
                >
                  Get a Free Estimate
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to be contacted about your estimate.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a href="tel:+167****9002" className="text-gold-600 hover:text-gold-700 font-semibold">
                          (678) 782-9002
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <a href="mailto:info@winterwonderlightsga.com" className="text-gold-600 hover:text-gold-700 font-semibold break-all">
                          info@winterwonderlightsga.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Business Hours</p>
                        <p className="text-navy-900 font-medium">Mon – Fri: 9:00 am – 5:00 pm</p>
                        <p className="text-gray-500 text-sm">Saturday &amp; Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">Service Areas</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Proudly serving Metro Atlanta and North Georgia:
                  </p>
                  <div className="flex flex-wrap gap-2">
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
                      <span key={city} className="bg-white px-3 py-1 rounded-full text-xs text-navy-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors"
                  >
                    Visit our FAQ
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
