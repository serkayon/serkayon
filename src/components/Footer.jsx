import { FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-industrial-darker border-t border-industrial-border">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold tracking-widest  mb-3">Serkayon</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Industrial Intelligence for modern manufacturing, predictive
            analytics, and bio-pharma process optimization.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#38DCF9] transition">
              Machine Monitoring
            </li>
            <li className="hover:text-[#38DCF9] transition">
              Predictive Maintenance
            </li>
            <li className="hover:text-[#38DCF9] transition">
              Bio Process Control
            </li>
            <li className="hover:text-[#38DCF9] transition">
              Pharma Operations
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-[#38DCF9] transition">About Us</li>
            <li className="hover:text-[#38DCF9] transition">Careers</li>
            <li className="hover:text-[#38DCF9] transition">Contact</li>
            <li className="hover:text-[#38DCF9] transition">Resources</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
            Connect
          </h4>

          <p className="text-gray-400 text-sm mb-4">
            <a
              href="mailto:support@serkayon.com"
              className="hover:text-[#38DCF9] transition"
            >
              support@serkayon.com
            </a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/serkayon/ "
              className="w-10 h-10 flex items-center justify-center
                         border border-industrial-border rounded-full
                         text-gray-400
                         hover:text-[#38DCF9] hover:border-[#38DCF9]
                         transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 pointer-events-none flex items-center justify-center
                         border border-industrial-border rounded-full
                         text-gray-400
                         hover:text-[#38DCF9] hover:border-[#38DCF9]
                         transition"
            >
              <FaYoutube />
            </a>

            <a
              href="mailto:support@serkayon.com"
              className="w-10 h-10 flex items-center justify-center
                         border border-industrial-border rounded-full
                         text-gray-400
                         hover:text-[#38DCF9] hover:border-[#38DCF9]
                         transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-industrial-border">
        <div
          className="max-w-7xl mx-auto px-6 py-6
                        flex flex-col md:flex-row
                        justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Serkayon Technologies Pvt Ltd
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-[#38DCF9] transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#38DCF9] transition cursor-pointer">
              Cookie Policy
            </span>
            <span className="hover:text-[#38DCF9] transition cursor-pointer">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
