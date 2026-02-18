import { motion } from 'framer-motion'
import { useRef } from 'react'
import ScrollArrow from '../components/ScrollArrow'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import backgroundImage from '../pages/assets/engineer.png'
import machineImg from '../pages/assets/machine.png'
import predictiveImg from '../pages/assets/bio.png'
import cii from '../pages/assets/cii.png'
import BackgroundVideo from '../pages/assets/sampleVideo.mp4'
import CornerNav from '../CornerNav'
import { Helmet } from 'react-helmet-async';


/* ================= LINE + CARD ANIMATIONS ================= */

// SVG line draw
const lineDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeInOut' }
  }
}

// Card reveal AFTER line
const cardReveal = (from) => ({
  hidden: {
    opacity: 0,
    y: 40,
    x: from === 'right' ? 60 : -60
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 }
  }
})


/* ========================================================== */

const Home = () => {
  const divisionsRef = useRef(null)

  return (
<>
       <Helmet>
    <title>Serkayon - Industrial Intelligence</title>
    <meta
      name="description"
      content="Serkayon Industrial Intelligence provides data analysis and operational auditing software for industrial and bioprocess plants, using PLC and sensor data to monitor processes and deliver early warnings before performance issues arise." />
          </Helmet>
    <div className="min-h-screen bg-industrial-dark">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20">
    <CornerNav />
  </div>
        <div className="relative z-10 h-full flex flex-col gap-40 p-8 md:p-16 home-page">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm font-medium text-gray-100 uppercase tracking-wider logo"
          >
            Serkayon Industrial Intelligence
          </motion.div>
                  <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl slogan-container"
          >
               <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 w-fit
                   rounded-full bg-cyan-500/20
                   px-3 py-1 text-xs font-semibold
                   text-cyan-300 tracking-wider real-tag"
      >
        {/* blinking dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 tag"></span>
        </span>
        REALTIME DATA
      </motion.div>
            <h1 className="text-5xl md:text-7xl  mt-5 font-bold leading-tight mb-4 tracking-wider slogan">
              Protect Your Most Expensive Asset
            </h1>
          </motion.div>
          <ScrollArrow targetId="divisions" />
        </div>
      </section>

      {/* ================= DIVISIONS ================= */}
      <section
        id="divisions"
        ref={divisionsRef}
        className="relative py-20  px-6 bg-industrial-dark overflow-hidden"
      >
        <h3 className=' text-5xl md:text-6xl  font-bold text-center mb-10 font-mono tracking-wide '>Our Products</h3>
        {/* <div
          className="absolute top-0 left-0 h-full w-full bg-no-repeat bg-left"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.5,
            backgroundSize: '700px 1400px'
          }}
        />
        <div className="absolute inset-0 bg-black/80" /> */}

        <div className="max-w-6xl mx-auto relative">

          {/* ================= PRODUCT 1 (RIGHT) ================= */}
          <div className="relative mb-32">
            <motion.svg
              viewBox="0 0 600 120"
                className="hidden md:block absolute right-0 top-[-50px] w-[900px] h-[200px]"

              // className="absolute right-0 top-[-50px] w-[900px] h-[200px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <defs>
                <linearGradient id="gradRight" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>
 {/* 🔷 HEXAGON */}
 

              <motion.polyline
                points="600,10 480,10 430,50 240,50 180,80"
                fill="none"
                stroke="url(#gradRight)"
                strokeWidth="2"
                variants={lineDraw}
              />
            </motion.svg>

            <motion.div
              variants={cardReveal('right')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <ProductCard
                title="Bio-PM(Predictive Maintenance)"
                subtitle="Predicts bioreactor failures and audits machine performance in real time"
                productId="predictive-maintenance"
                image={predictiveImg}
                side="right"
                content="AI-driven predictive maintenance and machine auditing platform for bioreactors that analyzes
PLC data via Modbus to detect early-stage performance degradation, maintenance risks, and
operational inefficiencies. The system monitors agitation load, temperature stability, pH/DO
behavior, and process deviations to improve reliability, reduce downtime, and ensure audit-ready
operational transparency through real-time dashboards."
              />
            </motion.div>
          </div>

          {/* ================= PRODUCT 2 (LEFT) ================= */}
          <div className="relative mb-32">
            <motion.svg
              viewBox="0 0 600 120"
                className="hidden md:block absolute right-0 top-[-90px] w-[1100px] h-[200px]"

              // className="absolute left-0 top-[-40px] w-[900px] h-[200px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <defs>
                <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>

              <motion.polyline
                points="0,10 120,10 170,50 360,50 420,80"
                fill="none"
                stroke="url(#gradLeft)"
                strokeWidth="2"
                variants={lineDraw}
              />
            </motion.svg>

            <motion.div
              variants={cardReveal('left')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ProductCard
                title="Bio-CIG(Column Integrity Guard)"
                subtitle="Detects column degradation and ensures packed-bed stability"
                productId="column-integrity-guard"
                image={cii}
                content="Column Integrity Guard monitors hydrodynamic stability, pressure variation, and flow behavior in
enzyme-based packed-bed bioreactors to detect early signs of channeling, bed compaction, and
performance degradation. Integrated PLC data enables predictive maintenance and continuous
machine auditing, ensuring process consistency, yield protection, and reduced risk of unexpected
column failure"
                side="left"
              />
            </motion.div>
          </div>

          {/* ================= PRODUCT 3 (LEFT) ================= */}
     <div className="relative">
      <motion.svg
        viewBox="0 0 600 120"
          className="hidden md:block absolute right-0 top-[-50px] w-[900px] h-[200px]"
        // className="absolute right-0 top-[-50px] w-[900px] h-[200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
    <defs>
      {/* UNIQUE ID */}
      <linearGradient id="gradRightProduct3" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%" stopColor="#e5e7eb" />
        <stop offset="100%" stopColor="#9ca3af" />
      </linearGradient>
    </defs>

    <motion.polyline
      points="600,10 480,10 430,50 240,50 180,80"
      fill="none"
      stroke="url(#gradRightProduct3)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={lineDraw}
    />
  </motion.svg>

  <motion.div
    variants={cardReveal('right')}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <ProductCard
      title="Machine Tool Guard"
      subtitle="Diameter verification and predictive maintenance system"
      productId="machine-monitoring"
      image={machineImg}
      side="right"
      content="MT-Tool Guard is a diameter verification and predictive maintenance system for machine tools
that uses PLC data via Modbus to track dimensional accuracy, detect tool wear patterns, and
identify process deviations. The platform provides continuous machine auditing, enabling early
intervention, reduced scrap rates, and improved production consistency through real-time
monitoring dashboards"
    />
  </motion.div>
</div>
</div>
      </section>

      <Footer />
    </div>
    </>
  )
}

export default Home
