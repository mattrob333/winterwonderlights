import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of holiday lighting projects across Atlanta. See how Winter Wonder Lights GA transforms homes and businesses with professional Christmas light installations.",
};

const projects = [
  { name: "Residential Home", type: "Residential" },
  { name: "Chick-fil-A", type: "Commercial" },
  { name: "Office Park", type: "Commercial" },
  { name: "Custom Estate", type: "Residential" },
  { name: "Shopping Center", type: "Commercial" },
  { name: "Colonial Home", type: "Residential" },
  { name: "Townhouse Community", type: "HOA" },
  { name: "Restaurant Row", type: "Commercial" },
  { name: "Lake House", type: "Residential" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Portfolio</h1>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mt-5 mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See how we&apos;ve transformed homes and businesses across Atlanta with spectacular holiday
            lighting.
          </p>
        </div>
      </section>

      {/* Filter tags */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Residential", "Commercial", "HOA"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-gold-400 hover:text-gold-600 transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
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
                      "/images/about-section.jpg",
                      "/images/commercial-lighting.jpg",
                      "/images/craftsman-home.jpg",
                    ][i]
                  }
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div>
                    <p className="text-white font-semibold">{project.name}</p>
                    <p className="text-gold-400 text-sm">{project.type} Lighting</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Want to See Your Property Here?
          </h2>
          <p className="mt-4 text-gray-600">
            Get a free estimate and let us create a stunning holiday display for your home or business.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-3.5 rounded-lg transition-all text-base"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
