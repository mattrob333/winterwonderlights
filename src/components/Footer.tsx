import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/images/wwl-logo.png"
              alt="Winter Wonder Lights"
              width={220}
              height={70}
              className="h-12 sm:h-14 w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Menu</h3>
            <nav className="space-y-2.5">
              <Link href="/" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Services
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                About
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Gallery
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                FAQ
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Mon – Fri: 9:00 am – 5:00 pm</p>
              <p>Saturday: Closed</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <div className="space-y-2.5">
                <Link
                  href="/privacy-policy"
                  className="block text-gray-400 hover:text-gold-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-400 hover:text-gold-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="tel:+16787829002"
                className="block text-gold-400 hover:text-gold-300 transition-colors font-semibold text-base"
              >
                (678) 782-9002
              </a>
              <a
                href="mailto:info@winterwonderlightsga.com"
                className="block text-gold-400 hover:text-gold-300 transition-colors"
              >
                info@winterwonderlightsga.com
              </a>
              <p>Serving Metro Atlanta &amp; North Georgia</p>
            </div>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm"
              >
                Get a Free Estimate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} by Bright Services LLC. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
