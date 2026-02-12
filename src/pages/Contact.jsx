import { motion } from 'framer-motion'
import { useState } from 'react'
// import emailjs from '@emailjs/browser'
import Footer from '../components/Footer'
import  Navbar from "./NavBar"
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })
   const navigate = useNavigate();
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus("sending")

  const form = e.target
  const data = new FormData(form) // collect form values automatically

  try {
    const response = await fetch("https://formspree.io/f/mqedpppg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (response.ok) {
      setStatus("success")
      alert("Message sent successfully!") 
      form.reset() // clear form
      setFormData({ name: "", company: "", email: "", message: "" }) // reset state
    } else {
      setStatus("error")
    }
  } catch (error) {
    alert("Something went wrong!") 
    console.error("Form submission error:", error)
    setStatus("error")
  }
}


  return (
    <div className="min-h-screen bg-industrial-dark">
      <Navbar/>
         {/* <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => navigate(-1)}
        className="fixed top-10 left-10 z-50 flex items-center gap-2 px-6 py-2.5 
        bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 
        rounded-full hover:border-cyan-400/40 transition-all group"
      >
        <ArrowLeft size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors" />
        <span className="text-[11px] font-black tracking-[0.25em] text-gray-500 group-hover:text-white uppercase">
          Back
        </span>
      </motion.button> */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Operator
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-industrial-gray border border-industrial-border px-4 py-3 focus:outline-none focus:border-industrial-glow transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-industrial-gray border border-industrial-border px-4 py-3 focus:outline-none focus:border-industrial-glow transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-industrial-gray border border-industrial-border px-4 py-3 focus:outline-none focus:border-industrial-glow transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-industrial-gray border border-industrial-border px-4 py-3 focus:outline-none focus:border-industrial-glow transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-industrial-gray border border-industrial-border hover:border-industrial-glow px-6 py-4 text-lg font-semibold transition-all duration-300 hover:bg-industrial-lightgray disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'success'
                ? 'Message Sent ✓'
                : 'Submit'}
            </button>

            {status === 'success' && (
              <motion.p
                className="text-center text-industrial-glow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Your message has been sent. We'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="text-center text-red-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                There was an error sending your message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
