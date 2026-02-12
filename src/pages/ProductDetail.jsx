import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../pages/NavBar.jsx";
import ProductMiniNav from "../pages/ProductMiniNav.jsx";
import download from "../pages/assets/download.png";
import watchdemo from "../pages/assets/play.png";
import usermanual from "../pages/assets/user-manual.png";
import DashboardAnnotator from "./DashboardAnnotator.jsx";
import Ciidashboard from "../pages/assets/cii-dashboard.png";
import Features from "../pages/Features";
import { X } from "lucide-react";
import TopImage from "./assets/bg-bio.png";
import UserManual from "./UserManual.jsx";
import {
  Brain,
  Activity,
  BellRing,
  TrendingDown,
  ClipboardCheck,
  LayoutDashboard,
  Gauge,
  Waves,
  Layers,
  LineChart,
  ShieldAlert,
  FileText,
  Scan,
  Zap,
  AlertTriangle,
  CalendarClock,
  History,
} from "lucide-react";
import machineTool from "./CaseStudy/CaseStudyAssests/hyundai-2.jpeg";
import pm1 from "./CaseStudy/CaseStudyAssests/pm-5.png";
import pm2 from "./CaseStudy/CaseStudyAssests/pm-9.png";
import pm3 from "./CaseStudy/CaseStudyAssests/pm-10.png";
import pm4 from "./CaseStudy/CaseStudyAssests/pm-11.png";
import pm5 from "./CaseStudy/CaseStudyAssests/pm-8.png";
import defaultVideo from "./assets/Video_Ready_After_Request.mp4";

const productDownload = {
  "machine-monitoring": {
    downloadLink: null,
  },
  "predictive-maintenance": {
    downloadLink:
      "https://github.com/serkayon/SerkayonProducts/releases/download/v1.0.0/BIO-PM-Setup.7-Trial.-1.0.0.exe",
  },
  "column-integrity-guard": {
    downloadLink: null, // not ready
  },
};

const productData = {
  "machine-monitoring": {
    title: "Machine Tool-Guard",
    subtitle:
      "Monitors tool diameter accuracy and machine health to predict wear, prevent defects, and maintain production quality",
    images: [machineTool],
    features: [
      "Real-time Data Collection",
      "Multi-Machine Dashboard",
      "Performance Analytics",
      "Alert Management",
      "Historical Reporting",
      "Custom Metrics",
    ],
    videoId: "xcJtL7QggTI",
  },
  "predictive-maintenance": {
    title: "Bio-Predictive Maintenance",
    subtitle:
      "Predicts bioreactor failures and audits machine performance in real time to reduce downtime and improve batch reliability",
    images: [pm1, pm2, pm3, pm4, pm5],
    features: [
      "AI-based Predictions",
      "Downtime Reduction",
      "Maintenance Scheduling",
    ],
    videoId: "xcJtL7QggTI",
  },
  "column-integrity-guard": {
    title: "Bio-Column Integrity Guard",
    subtitle:
      "Detects column degradation and ensures packed-bed stability to enable proactive maintenance and consistent process performance",
    images: [Ciidashboard],
    features: [
      "Column Degradation Detection",
      "Packed-Bed Stability Monitoring",
      "Predictive Maintenance Insights",
    ],
    videoId: "xcJtL7QggTI",
  },
};
// feature of mtg
export const mtguardFeatures = [
  {
    title: "Real-Time Diameter Monitoring",
    description: "Continuously verifies dimensional accuracy during machining.",
    icon: Scan,
  },
  {
    title: "Tool Wear Prediction",
    description: "Identifies wear patterns before they lead to defects.",
    icon: Zap,
  },
  {
    title: "Machine Health Tracking",
    description: "Detects abnormal load or performance variations.",
    icon: Activity,
  },
  {
    title: "Scrap Reduction Alerts",
    description: "Prevents production errors through early anomaly detection.",
    icon: AlertTriangle,
  },
  {
    title: "Maintenance Scheduling Insights",
    description: "Optimizes service timing based on performance trends.",
    icon: CalendarClock,
  },
  {
    title: "Machine Auditing Dashboard",
    description:
      "Creates a performance history for accountability and process optimization.",
    icon: History,
  },
];
// featuresData.js
export const cigFeatures = [
  {
    title: "Pressure Variation Monitoring",
    description:
      "Detects abnormal pressure behavior indicating channeling or clogging.",
    icon: Gauge,
  },
  {
    title: "Hydrodynamic Stability Tracking",
    description: "Analyzes flow patterns to identify early column degradation.",
    icon: Waves,
  },
  {
    title: "Bed Compaction Detection",
    description:
      "Recognizes structural changes that impact enzyme performance.",
    icon: Layers,
  },
  {
    title: "Performance Consistency Analysis",
    description:
      "Ensures stable output by tracking process variations over time.",
    icon: LineChart,
  },
  {
    title: "Predictive Maintenance Alerts",
    description: "Warns operators before column failure affects yield.",
    icon: ShieldAlert,
  },
  {
    title: "Machine Auditing Reports",
    description:
      "Provides traceable performance records for quality assurance.",
    icon: FileText,
  },
];
// feature of bio-pm
export const bioPmFeatures = [
  {
    title: "Early Failure Detection",
    description:
      "Identifies deviations in agitation, temperature, pH, and DO before they impact batch outcomes.",
    icon: Brain,
  },
  {
    title: "Batch Stability Monitoring",
    description:
      "Tracks process consistency across runs to highlight hidden reliability issues.",
    icon: Activity,
  },
  {
    title: "Predictive Maintenance Alerts",
    description:
      "Flags equipment stress patterns that indicate upcoming failures.",
    icon: BellRing,
  },
  {
    title: "Performance Degradation Analysis",
    description:
      "Measures gradual efficiency loss in mixing, heat transfer, and reaction behavior.",
    icon: TrendingDown,
  },
  {
    title: "Machine Auditing Logs",
    description:
      "Maintains operational history for compliance, troubleshooting, and process review.",
    icon: ClipboardCheck,
  },
  {
    title: "Real-Time Visualization Dashboard",
    description:
      "Provides instant visibility into process health and anomaly trends.",
    icon: LayoutDashboard,
  },
];

const featureMapping = {
  "machine-monitoring": mtguardFeatures,
  "predictive-maintenance": bioPmFeatures,
  "column-integrity-guard": cigFeatures,
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);
  const manualRef = useRef(null);
  const demoRef = useRef(null);
  //for scrolling manually
  const scrollToManual = () => {
    manualRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //default product details of machine-monitoring wil come

  const product = productData[productId] || productData["machine-monitoring"];
  const currentFeatures = featureMapping[productId] || mtguardFeatures;
  const downloadInfo = productDownload[productId] || {};

  //manual scroll
  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  //watch demo
  const handleWatchDemo = () => {
    scrollToDemo();
    setTimeout(() => setVideoPlaying(true), 500);
  };
  //image change in pc
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [product.images.length]);
  useEffect(() => {
    setActiveImage(0);
  }, [productId]);
  return (
    <div className="min-h-screen bg-industrial-dark overflow-hidden">
      <Navbar />

      {/* IMAGE ZOOM OVERLAY SECTION */}
      {zoomImage && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setZoomImage(null)}
        >
          <motion.div
            className="w-full max-w-6xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()} // prevent close
          >
            <button
              onClick={() => setZoomImage(null)}
              className="
                absolute top-6 right-8
                z-[10000]
                bg-black/80
                border border-industrial-glow
                text-white
                rounded-full
                p-2
                hover:bg-industrial-gray
                transition
          "
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <DashboardAnnotator
              imageSrc={zoomImage}
              detailedImage={zoomImage}
              zoomEnabled={true}
            />
          </motion.div>
        </motion.div>
      )}

      {/* TOP SECTION PC SETUP SECTION */}
      <section className="relative py-20 px-6 bg-industrial-dark overflow-hidden ">
        <img
          src={TopImage}
          alt="industry background"
          className="
      absolute top-0 left-1/2 -translate-x-1/2
      w-full h-full object-cover
      opacity-40 
      pointer-events-none
      z-0
    "
        />

        <div className=" relative z-10 max-w-[90rem] mx-auto grid grid-cols-1  md:md:grid-cols-[1.5fr_1fr] gap-9 items-center">
          {/* APPLE iMAC WITH CAROUSEL */}
          {/* RESPONSIVE WINDOWS MONITOR */}
          <div style={{ perspective: "1600px" }}>
            <motion.div
              initial={{ opacity: 0, rotateY: -8, rotateX: 4, scale: 0.98 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-center scale-[0.85] md:scale-[0.9] lg:scale-[0.93]"
            >
              <div className="relative w-full max-w-[1000px]">
                {/* MONITOR FRAME */}
                <div className="bg-black rounded-[14px] p-[10px] sm:p-[14px] shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                  {/* SCREEN */}
                  <div
                    className="relative rounded-[8px] overflow-hidden 
                          h-[220px] sm:h-[320px] md:h-[529px] 
                          bg-black"
                  >
                    {/* IMAGE */}
                    <motion.img
                      src={product.images[activeImage]}
                      className="absolute inset-0 w-full h-full object-fill cursor-pointer"
                      animate={{ opacity: [0.9, 1], scale: [1.02, 1] }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setZoomImage(product.images[activeImage])}
                    />

                    {/* TASKBAR */}
                    <div
                      className="absolute bottom-0 left-0 w-full
                            h-[36px] sm:h-[33px]
                            bg-black/75 backdrop-blur-md
                            border-t border-white/10
                            flex items-center justify-between
                            px-3 sm:px-6 text-white text-xs"
                    >
                      {/* LEFT SIDE */}
                      <div className="flex items-center gap-3 sm:gap-5">
                        {/* Windows Logo */}
                        <div className="w-4 h-4 sm:w-5 sm:h-5 grid grid-cols-2 gap-[2px]">
                          <div className="bg-blue-500"></div>
                          <div className="bg-blue-500"></div>
                          <div className="bg-blue-500"></div>
                          <div className="bg-blue-500"></div>
                        </div>

                        {/* Search Bar */}
                        <div
                          className="hidden sm:flex items-center bg-white/10 
                                px-3 py-1 rounded-full 
                                text-gray-300 text-xs 
                                w-[140px] md:w-[180px]"
                        >
                          🔍 Search
                        </div>

                        {/* File Explorer Icon */}

                        {/* Browser Icon (Edge-like circle) */}
                        <div className="text-xl">⚙️</div>
                        <svg viewBox="0 0 24 24" className="w-7 h-7">
                          <path
                            d="M3 6h6l2 2h10v10a2 2 0 0 1-2 2H3z"
                            fill="#facc15"
                          />
                          <path d="M3 6h6l2 2H3z" fill="#fde047" />
                        </svg>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-300">
                        <span className="hidden sm:inline">🌐</span>
                        <span>🔊</span>
                        <span>
                          {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* STAND (FULL BLACK) */}
                <div className="flex flex-col items-center -mt-[2px]">
                  {/* Neck */}
                  <div
                    className="w-[40px] sm:w-[55px] 
                          h-[50px] sm:h-[70px]
                          bg-black rounded-b-md"
                  ></div>

                  {/* Base */}
                  <div
                    className="w-[220px] sm:w-[300px] md:w-[380px]
                          h-[14px] sm:h-[16px]
                          bg-black rounded-full
                          shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LEFT SIDE BOX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProductMiniNav />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {product.title}
            </h2>
            <p className="text-xl text-[#E2DFD2] mb-8">{product.subtitle}</p>
            <div className="flex flex-col gap-4">
              <div className="flex">
                {downloadInfo.downloadLink ? (
                  <a href={downloadInfo.downloadLink} className="w-full">
                    <button className="flex items-center gap-3 text-lg bg-industrial-gray border rounded-md shadow-[0_0_25px_rgba(34,211,238,0.1)] w-full border-industrial-glow px-6 py-3 text-left transition-all hover:bg-industrial-lightgray">
                      <img src={download} className="icon-svg" />
                      Download For Free
                      <h6 className="text-xs text-gray-400">
                        (Try our 7-days Free Trial)
                      </h6>
                    </button>
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center gap-3 text-lg w-full border rounded-md px-6 py-3 opacity-50 cursor-not-allowed"
                  >
                    <img src={download} className="icon-svg " />
                    Coming Soon
                  </button>
                )}
              </div>

              <div className="flex gap-2 flex-col sm:flex-row">
                <button
                  onClick={scrollToManual}
                  className="flex flex-1  items-center gap-3 rounded-md action-btn bg-industrial-gray border text-lg border-industrial-border hover:border-industrial-glow px-6 py-3 text-left transition-all hover:bg-industrial-lightgray"
                >
                  <img src={usermanual} className="icon-svg" />
                  User Documentation
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="flex flex-1 items-center gap-3 text-lg rounded-md bg-industrial-gray border action-btn border-industrial-border hover:border-industrial-glow px-6 py-3 text-left transition-all hover:bg-industrial-lightgray "
                >
                  <img src={watchdemo} className="icon-svg" />
                  Watch Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}

      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                className="border border-industrial-border p-6 bg-industrial-gray"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div> */}
      {/* FEATURES */}
      <section
        className="py-16 px-6 bg-industrial-darker
       "
      >
        <Features
          title="Key Capabilities"
          className="text-lg tracking-wider"
          features={currentFeatures}
        />
      </section>
      {/* </section> */}

      {/* DEMO */}
      <section ref={demoRef} className=" px-6 bg-industrial-darker ">
        <div
          className="
    bg-industrial-dark
  w-5xl px-10 py-10  "
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100 text-center mb-12">
              Demo Video
            </h2>
            {/* <div
                className="relative aspect-video border border-industrial-border overflow-hidden cursor-pointer"
                onClick={() => setVideoPlaying(true)}
              >
                {!videoPlaying ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${product.videoId}/maxresdefault.jpg`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white text-lg">
                        Click to play demo
                      </span>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${product.videoId}?autoplay=1`}
                    allowFullScreen
                  />
                )}
              </div> */}

            <div className="relative aspect-video border border-industrial-border overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={defaultVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6  bg-industrial-darker">
        <div ref={manualRef}>
          <UserManual />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
