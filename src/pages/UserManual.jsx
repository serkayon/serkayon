import Navbar from "./NavBar";
import { Download } from "lucide-react";

const products = [
  {
    name: "Bio-PM",
    description: "Predictive Maintenance System for AI-driven machine health monitoring.",
    pdf: "/Bio-PM_User_Manual.pdf"
  },
  {
    name: "Bio-CIG",
    description: "Column Integrity Guard for structural stress and load monitoring.",
    pdf: null
  },
  {
    name: "MTG",
    description: "Machine-Tool Guard for operational safety and anomaly detection.",
    pdf: null
  }
];

const UserManual = () => {

 const handleDownload = (pdfPath) => {
  const link = document.createElement("a");
  link.href = pdfPath;


  link.download = "Bio-Pm_User-Manual.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <div className="min-h-screen bg-industrial-dark text-[#d8f9ff] px-4 sm:px-6 py-16 sm:py-20">
      <Navbar />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 sm:mb-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e6ffff] mb-4">
          User Documentations
          </h1>
          <p className="text-[#9edfe8] text-base sm:text-lg max-w-2xl mx-auto">
            Download official user documentation for all Bio-Tech industrial products.
          </p>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-3 bg-[#11161c] px-8 py-4 text-[#7edce6] font-semibold text-sm uppercase tracking-wider border border-[#1f2a30] rounded-t-xl">
          <div>Product Name</div>
          <div>Description</div>
          <div className="text-right">User Manual</div>
        </div>

        {/* Product Rows */}
        <div className="border border-[#1f2a30] md:border-t-0 rounded-xl md:rounded-t-none overflow-hidden bg-[#0f1115] shadow-lg">

          {products.map((product, index) => (
            <div
              key={index}
              className="border-t border-[#1f2a30] first:border-t-0 md:grid md:grid-cols-3 px-6 sm:px-8 py-6 items-center hover:bg-[#121a22] transition duration-300"
            >
              
              {/* Product Name */}
              <div className="font-semibold text-[#e0ffff] text-lg md:text-base mb-2 md:mb-0">
                {product.name}
              </div>

              {/* Description */}
              <div className="text-[#a8e9ef] text-sm md:pr-10 mb-4 md:mb-0">
                {product.description}
              </div>

              {/* Download Button */}
         <div className="md:flex md:justify-end">
  {product.pdf ? (
    <button
      onClick={() => handleDownload(product.pdf)}
      className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 
      text-[#00ffff] rounded-lg
      hover:bg-[#003b46] hover:text-[#5fffff] transition"
    >
      <Download size={18} className="fill-[#00ffff]" />
      Download Manual
    </button>
  ) : (
    <button
      disabled
      className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 
      rounded-lg opacity-50 cursor-not-allowed bg-gray-800 text-gray-400"
    >
      Coming Soon
    </button>
  )}
</div>


            </div>
          ))}

        </div>

        {/* Footer Note */}
        <div className="mt-8 text-xs sm:text-sm text-[#6ed0da] text-center md:text-left">
          For older documentation versions, contact system administration.
        </div>

      </div>
    </div>
  );
};

export default UserManual;
