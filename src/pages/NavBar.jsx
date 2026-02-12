import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import Menu from './assets/menu.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const navigate = useNavigate()

  const navItem =
    'text-sm tracking-wide text-gray-300 hover:text-[#22D3EE] transition'

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-industrial-dark/90 backdrop-blur border-b border-industrial-border">
      
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate('/')}
          className="text-xl text-white font-bold tracking-wider cursor-pointer"
        >
          Serkayon
        </div>  

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          
          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={navItem}>Our Products</button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-3 w-64
                             bg-industrial-darker border border-industrial-border
                             shadow-xl rounded-lg p-2"
                >
                  {[
                    ['Machine Monitoring', 'machine-monitoring'],
                    ['Predictive Maintenance', 'predictive-maintenance'],
                    ['Bio-CIG','column-integrity-guard'],
                 
                  ].map(([label, id]) => (
                    <div
                      key={id}
                      onClick={() => navigate(`/product/${id}`)}
                      className="px-4 py-2 rounded-md
                                 text-sm text-gray-300
                                 hover:bg-industrial-gray
                                 hover:text-[#22D3EE]
                                 transition cursor-pointer"
                    >
                      {label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className={navItem} to="/case-study">Case Study</Link>
          <Link className={navItem} to="/careers">Jobs / Careers</Link>
          <Link className={navItem} to="/press">Press</Link>
          <Link className={navItem} to="/pricing">Plans & Pricing</Link>
          <Link className={navItem} to="/contact">Contact Us</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
      <img src={Menu} alt="menulogo" className='w-8 h-8'/>
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-industrial-darker border-t border-industrial-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-sm">
              
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="w-full text-left text-gray-300 hover:text-[#22D3EE]"
                >
                  Our Products
                </button>

                {productsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {[
               ['Machine Monitoring', 'machine-monitoring'],
                    ['Predictive Maintenance', 'predictive-maintenance'],
                    ['Bio-CIG','column-integrity-guard'],
                    ].map(([label, id]) => (
                      <span
                        key={id}
                        onClick={() => {
                          navigate(`/product/${id}`)
                          setOpen(false)
                        }}
                        className="text-gray-400 hover:text-[#22D3EE] cursor-pointer"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/case-study">CaseStudy</Link>
              <Link to="/careers">Jobs / Careers</Link>
              <Link to="/press">Press</Link>
              <Link to="/pricing">Plans & Pricing</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
