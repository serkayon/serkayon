import { useParams, useNavigate } from "react-router-dom";
import caseStudies from "./CaseStudyData";
import back from "./CaseStudyAssests/back-arrow.png";

export default function CaseStudyDetail() {
  const { slug, productSlug } = useParams();
  const navigate = useNavigate();

  const category = caseStudies.find((c) => c.slug === slug);
  const product = category?.products.find((p) => p.slug === productSlug);

  if (!product) return <div className="p-10">Not Found</div>;

  return (
    <section className="relative bg-white text-black min-h-screen">

      {/* BACK BUTTON — responsive position */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-10
                   w-10 h-10 sm:w-12 sm:h-12
                   flex items-center justify-center
                   rounded-full bg-white/70 backdrop-blur-md
                   shadow-lg hover:bg-white transition z-50"
      >
        <img src={back} alt="back" className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* HERO — FULL WIDTH */}
      <HeroCover title={product.title} image={product.heroImage} />

      {/* CONTENT — CENTERED WITH SIDE SPACE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-14">

        <TextSection title="Introduction" content={product.intro} />

        <TextSection title="Challenge" content={product.challenge} />

        <SplitSection
          title="Solution"
          content={product.solution}
          image={product.solutionImage}
          imageLeft={true}
        />

        <SplitSection
          title="Results"
          
          content={product.results}
          image={product.resultImage}
          imageLeft={false}
        />

        <TextSection title="Conclusion" content={product.conclusion} />

      </div>
    </section>
  );
}

//////////////////////////////////////////////////////////

/* HERO COVER — FULL WIDTH ONLY */
function HeroCover({ title, image }) {
  return (
    <div className="w-full  overflow-hidden bg-[#e6f0f3] ">
      <div className="flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 p-8 md:p-14 space-y-6">
<h1 className="mt-12 sm:mt-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1b3f] leading-tight">
            {title}
          </h1>

          <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition">
            Download PDF →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 h-[260px] sm:h-[350px] md:h-[500px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

//////////////////////////////////////////////////////////

/* NORMAL TEXT SECTION */
function TextSection({ title, content }) {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl md:text-4xl md:tracking-wider font-semibold text-[#0f172a]">
        {title}
      </h2>

      {/* smaller reading width */}
      <div className="max-w-5xl">
        <p className="text-base md:text-lg text-gray-800 leading-8 whitespace-pre-line">
          {content}
        </p>
      </div>

    </div>
  );
}

//////////////////////////////////////////////////////////

/* IMAGE + TEXT SPLIT SECTION */
/* IMAGE + TEXT SPLIT SECTION */
function SplitSection({ title, content, image, imageLeft }) {
  return (
    <div className="space-y-6">
      
      <h2 className="text-2xl md:text-4xl md:tracking-wider font-semibold text-[#0f172a]">
        {title}
      </h2>

      {/* CARD CONTAINER */}
      <div
        className={`overflow-hidden border border-slate-300 rounded-2xl
        flex flex-col md:flex-row items-stretch
        ${imageLeft ? "" : "md:flex-row-reverse"}`}
      >
        {/* IMAGE SIDE */}
        <div className="w-full md:w-1/2 h-[260px] md:h-[380px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT SIDE */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-12 py-8">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>

    </div>
  );
}

