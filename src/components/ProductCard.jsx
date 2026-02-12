import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  title,
  subtitle,
  productId,
  image,
  content,
  side = "right",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${productId}`);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  return (
    <motion.div
      className={`relative bg-transparent p-10 cursor-pointer
                 group hover:border-industrial-glow transition-all duration-300
                 flex flex-col md:flex-row gap-10 items-center rounded-lg
                 ${side === "left" ? "md:flex-row-reverse" : ""}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* IMAGE */}
      <div className="w-64 md:w-80 lg:w-96 h-full flex-1 ">
        <img
          src={image}
          alt={title}
          className="w-full object-cover size-90 rounded-md
                     group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl md:text-3xl  font-bold mb-3">{title}</h3>
          <p className="text-gray-400 sm:text-md md:text-lg leading-relaxed tracking-wide ">
            {content}
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-6 flex ${side === "left" ? "justify-end  md:justify-start" : "justify-end"} text-industrial-glow`}
        >
          <motion.div
            className="text-lg flex items-center gap-4"
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Explore More
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            >
              <path d="M2 12h20" />
              <path d="M14 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* GLOW */}
      <div
        className="absolute inset-0 bg-industrial-glow opacity-0
                   group-hover:opacity-5 transition-opacity duration-300
                   pointer-events-none"
      />
    </motion.div>
  );
};

export default ProductCard;
