import { useParams, useNavigate } from "react-router-dom";
import hyundai from "./CaseStudyAssests/hyundai.png";
import bioPm from "./CaseStudyAssests/Bio-Pm.png";
import columnImg from "./CaseStudyAssests/cig.png";
import repetoryImg from "./CaseStudyAssests/repetory.jpeg";

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudies = [
    {
      category: "Machine Tools",
      slug: "machine-tools",
      products: [
        {
          title:
            "Monitoring System: AI-powered real-time shaft diameter monitoring dashboard.",
          slug: "hyundai-pm",
          heroImage: hyundai,
          content: `
Real-time machine monitoring dashboard for shaft diameter inspection with AI-powered quality control enables real-time monitoring, delivering a 30% increase in OEE and a 25% reduction in defects.
          `,
        },
        {
          title: "Bio Predictive Maintenance:Real-time bioreactor failure prediction  and improve reliability",
          slug: "bio-product",
          heroImage: bioPm,
          content: `
AI-driven bioreactor predictive maintenance platform analyzing PLC data via Modbus to detect performance issues and risks.
Monitors agitation, temperature, and pH/DO to improve reliability and reduce downtime.
          `,
        },
      ],
    },
    {
      category: "Column Integrity Guard",
      slug: "column-integrity",
      products: [
        {
          title: "Column Integrity Guard:Detects column degradation to ensure packed-bed stability and consistent performance.",
          slug: "column-guard",
          heroImage: columnImg,
          content: `
Monitors hydrodynamic stability, pressure, and flow in packed-bed bioreactors to detect channeling, compaction, and degradation. Enables predictive maintenance and continuous auditing for consistent performance and reduced failure risk.

          `,
        },
      ],
    },
    {
      category: "Sustainable Solutions",
      slug: "repetory",
      products: [
        {
          title: "Repetory App:Smart factory solution with IoT integration and AI-driven optimization.",
          slug: "repetory-app",
          heroImage: repetoryImg,
          content: `
Factory solution with IoT integration, AI-driven optimization, full system integration, and computer vision analysis to reduce carbon footprint.

          `,
        },
      ],
    },
  ];

  const category = caseStudies.find((c) => c.slug === slug);

  if (!category)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
        Not Found
      </div>
    );

  return (
    <div className="bg-[#f3f4f6] min-h-screen flex flex-col">

      <section className="flex-grow px-6 md:px-12 py-8">

        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-10 relative">

          {/* Back Button - Left Aligned */}
      <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0">
  <button
    onClick={() => navigate(-1)}
    className="inline-flex items-center gap-2 px-4 py-2
               bg-white border border-gray-200 
               rounded-full shadow-sm 
               text-gray-700 font-medium 
               hover:bg-gray-50 hover:shadow-md 
               transition-all duration-300"
  >
    <span className="text-lg">←</span>
    <span className="hidden sm:inline">Back to Categories</span>
  </button>
</div>


          {/* Centered Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] tracking-tight ">
            {category.category}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {category.products.map((product) => (
            <div
              key={product.slug}
              onClick={() =>
                navigate(`/case-study/${slug}/${product.slug}`)
              }
              className="bg-white rounded-2xl overflow-hidden 
                         border border-gray-200 
                         shadow-sm hover:shadow-xl 
                         transition-all duration-500 
                         cursor-pointer hover:-translate-y-1 
                         flex flex-col"
            >

              {/* Image */}
              <div className="h-50 overflow-hidden">
                <img
                  src={product.heroImage}
                  alt={product.title}
                  className="w-full h-50 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-4 leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-sm text-[#4b5563] leading-relaxed line-clamp-6">
                    {product.content} 
                  </p>
                </div>

                {/* Read More */}
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all duration-300">
                  <span className="hover:underline">Read more</span>
                  <span>➜</span>
                </div>

              </div>
            </div>
          ))}

        </div>

      </section>
    </div>
  );
}
