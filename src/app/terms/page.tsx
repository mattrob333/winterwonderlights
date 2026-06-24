import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8">Terms of Service</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            These Terms of Service govern your use of the website and services provided by Bright
            Services LLC (&quot;Winter Wonder Lights GA&quot;).
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">Services</h2>
          <p>
            Winter Wonder Lights GA provides professional holiday lighting installation, maintenance,
            and removal services. All services are provided subject to a separate service agreement
            detailing scope, pricing, and terms.
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">Website Use</h2>
          <p>
            By using this website, you agree to these terms. The content on this website is provided
            for informational purposes and may be updated without notice.
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">Contact</h2>
          <p>
            For questions about these terms, please contact us at{" "}
            <a href="mailto:info@winterwonderlightsga.com" className="text-gold-600 hover:text-gold-700">
              info@winterwonderlightsga.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
