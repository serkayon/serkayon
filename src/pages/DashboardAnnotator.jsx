import { motion } from "framer-motion"

export default function DashboardAnnotator({
  imageSrc,
  detailedImage
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">

      <motion.img
        src={detailedImage || imageSrc}
        alt="Detailed dashboard view"
        className="
          w-full
          max-w-6xl
          mx-auto
          rounded-xl
          shadow-2xl
          object-contain
        "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />

    </div>
  )
}
