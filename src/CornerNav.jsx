import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  ['Machine Monitoring', 'machine-monitoring'],
  ['Predictive Maintenance', 'predictive-maintenance'],
  ['Bio-CIG', 'column-integrity-guard'],
 
  ['Plans & Pricing', 'pricing'],
  ['Contact Us', 'contact'],
]

const CornerNav = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // 🔹 Auto open on load (5 sec)
  useEffect(() => {
    setOpen(true)
    const timer = setTimeout(() => setOpen(false), 5000)
    return () => clearTimeout(timer)
  }, [])
const handleNav = (id) => {
  navigate(
    ['pricing', 'contact'].includes(id)
      ? id
      : `/product/${id}`
  )
  setOpen(false)
}


  return (
    <div className="absolute top-6 right-6 z-50">

      {/* ICON BUTTON (COMMON) */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-12 h-12 rounded-full
                   bg-transparent   
                
                   flex items-center justify-center
                   text-white hover:bg-white/20
                   transition"
      >
        {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
      </button>

      {/* ================= MOBILE (VERTICAL) ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-16 right-0
                       w-64 rounded-xl
                       bg-black/80 backdrop-blur-xl
                       border border-white/10
                       shadow-2xl p-3"
          >
            {navItems.map(([label, id]) => (
              <div
                key={id}
                onClick={() => handleNav(id)}
                className="px-4 py-2 rounded-lg
                           text-sm text-gray-200
                           hover:bg-white/10
                           hover:text-cyan-300
                           cursor-pointer transition"
              >
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= DESKTOP (HORIZONTAL TROLLEY) ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="hidden md:flex absolute top-1/2 right-16
                       -translate-y-1/2
                       items-center gap-2
                       px-4 py-3 rounded-full
                       bg-transparent
                       border border-white/10
                       shadow-2xl"
          >
            {navItems.map(([label, id]) => (
              <div
                key={id}
                onClick={() => handleNav(id)}
                className="px-3 py-1.5 rounded-full
                           text-sm text-gray-200
                           whitespace-nowrap
                           hover:bg-white/10
                           hover:text-cyan-300
                           cursor-pointer transition"
              >
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default CornerNav
