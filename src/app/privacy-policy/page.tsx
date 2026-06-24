import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
          <p>
            This Privacy Policy describes how Bright Services LLC (&quot;Winter Wonder Lights GA,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your information when you visit
            our website or use our services.
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email address, phone
            number, and service address when you fill out our contact form or request a quote.
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide our lighting
            services, communicate with you about your project, and improve our website and services.
          </p>
          <h2 className="text-xl font-semibold text-navy-900 mt-8">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@winterwonderlightsga.com" className="text-gold-600 hover:text-gold-700">
              info@winterwonderlightsga.com
            </a>{" "}
            or call{" "}
            <a href="tel:+167****9002" className="text-gold-600 hover:text-gold-700">
              (678) 782-9002
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
