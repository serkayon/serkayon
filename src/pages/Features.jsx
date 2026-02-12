import { motion } from "framer-motion";

const Features = ({ title = "Key Capabilities", features = [] }) => {
  return (
    <section className="py-20 px-1 md:py-24 md:px-6 bg-industrial-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-36 text-gray-150 tracking-wide"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-36 place-items-center">
          {features.map((feature, index) => {
            const colIndex = index % 3;
            const isDown = colIndex === 0 || colIndex === 2;
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: isDown ? 50 : -50,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: colIndex * 0.1,
                }}
                className="
                  relative
                  w-full
                  max-w-[340px]
                  min-h-[200px]
                  md:min-h-[400px]
                  bg-[#121212]
                  border-[1px]
                  border-cyan-500/20
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  text-center
                  px-8
                  pt-20
                  pb-12
                 
                  transition-all
                  duration-500
                  group
                  feature-card
                "
              >
                {/* Large Center Circle Icon */}
                <div
                  className="
                  absolute 
                  -top-12 
                  w-24 
                  h-24 
                  rounded-full 
                  bg-[#0a0a0a]
                  border-2 
                  border-cyan-400/40 
                  flex 
                  items-center 
                  justify-center 
                  shadow-[0_0_25px_rgba(34,211,238,0.1)]
                  group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
                  transition-all
                "
                >
                  <div className="text-cyan-400">
                    {/* Render as a Tag, not as {feature.icon} */}
                    {IconComponent && (
                      <IconComponent
                        size={44}
                        strokeWidth={1.5}
                        fill="currentColor"
                        fillOpacity={0.15}
                      />
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-white tracking-wide leading-tight group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-[16px] leading-relaxed font-medium">
                  {feature.description}
                </p>

                <div
                  className="mt-auto pt-10"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <span className="text-[11px] font-black tracking-[0.4em] text-cyan-400/40 uppercase border-b border-gray-800 pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-all cursor-pointer">
                    Explore Details
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
