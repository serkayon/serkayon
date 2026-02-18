import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import Bio from "./CaseStudyAssests/bio-reactor-site.png";
import Machine from "./CaseStudyAssests/machinetools.jpg";
import Sustainable from "./CaseStudyAssests/sustainable.png";
import { Helmet } from 'react-helmet-async';
export default function CaseStudyCategories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "MACHINE TOOLS",
      slug: "machine-tools",
      image: Machine,
    },
    {
      name: "BIO",
      slug: "column-integrity",
      image: Bio,
    },
    {
      name: "SUSTAINABLE",
      slug: "repetory",
      image: Sustainable,
    },
  ];

  return (
    <>
 <Helmet>
<title>Case Studies | Real Industrial Solutions by Serkayon</title>
   <meta
  name="description"
  content="Discover how Serkayon delivers real-world industrial safety and AI monitoring solutions through successful implementations and measurable results."
/>


      </Helmet>
      <div className="bg-industrial-darker min-h-screen">
      
      <NavBar />

      <section className="py-[8rem] px-6 md:px-10">

        <h2 className="text-3xl md:text-5xl font-bold text-[#e2e8f0] text-center mb-14 tracking-wide">
          Case Study Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => navigate(`/case-study/${cat.slug}`)}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              
              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-500"></div>

              {/* CAPSULE BUTTON STYLE (UPDATED) */}
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/80 text-blue-800 px-6 py-3 rounded-full flex items-center gap-3 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:scale-105">
                  
                  <span className="text-sm md:text-base font-semibold tracking-wide">
                    {cat.name}
                  </span>

                  <span className="text-lg font-bold">
                    ➝
                  </span>

                </div>
              </div>

              {/* AQUA BORDER HOVER */}
              <div className="absolute inset-0 border border-transparent  rounded-3xl transition-all duration-500"></div>

            </div>
          ))}

        </div>
      </section>
    </div>
    </>
  
  );
}
