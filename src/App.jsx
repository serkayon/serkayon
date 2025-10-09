import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import {
  Menu,
  X,
  ChevronDown,
  Star,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  AlertTriangle,
  Database,
  Clock,
  Cpu,
  Wifi,
  Settings,
  BarChart,
  Lightbulb,
  TrendingUp,
  HardDrive,
  Cloud,
  GitBranch,
  Box,
  Server,
  Layers,
  Eye,
  DollarSign,
  Hourglass,
  FastForward,
  Handshake,
  BarChart2} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import heroBg from './assets/hero-bg-oQDqELUF.png'
import a1Img from '../images/a1.jpg'
import a2Img from '../images/a2.jpeg'
import a3Img from '../images/a3.jpeg'
import productImg from '../images/product.jpg'
import cs1Img from '../images/cs1.jpeg'
import cs2Img from '../images/cs2.jpeg'
import cs3Img from '../images/cs3.jpeg'
import aimlImg from '../images/aiml.png'
import aibioImg from '../images/aibio.png'
import aiproImg from '../images/aipro.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  
  const heroImages = [a1Img, a2Img, a3Img]

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'machine-tool',
        'bio-pharma',
        'processing',
        'case-study',
        'portfolio',
        'testimonials',
        'contact'
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
const handleSubmit = async (e) => {
  e.preventDefault(); // prevent page reload

  const form = e.target;
  const data = new FormData(form); // automatically collects all input values

  try {
    const response = await fetch("https://formspree.io/f/mjkaebnj", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent."); // success message
      form.reset(); // clear all fields
    } else {
      alert("Oops! Something went wrong. Please try again."); // error message
    }
  } catch (error) {
    alert("Oops! Something went wrong. Please try again."); // network or other error
    console.error("Form submission error:", error);
  }
};
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'Our Product' },
    { id: 'services', label: 'Our Services' },
    { id: 'working-fields', label: 'Working Fields' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'about', label: 'About' },
    { id: 'implementation-process', label: 'Implementation' },
    { id: 'contact', label: 'Get In Touch' }
  ]

  const services = [
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Data Monitoring & AI Reports",
      description: "Advanced data monitoring with intelligent AI-powered report generation for comprehensive insights.",
      features: ["Track your data in real timeGet instant" , "automated reports", "Unlock smarter insights with AI", "View everything in custom dashboards"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & AI Anomaly Detection",
      description: "Cutting-edge IoT sensors combined with AI algorithms for predictive anomaly detection.",
      features: ["Smart sensors that monitor in real time", "AI that learns machine patterns", "Predicts issues before they happen", "Sends instant alerts to prevent downtime"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Digital Twin",
      description: "Create virtual replicas of your physical systems for simulation and optimization.",
      features: ["Build a virtual copy of your machines", "Sync data in real time", "Run performance simulations", "Get smart suggestions for optimization"]
    }
  ]


  const testimonials = [
    {
      name: "JunBong Cheo",
      company: "HOD, Hyundai Wia",
      text: "Serkayon initially joined us as subcontractors, but within just a week they built a complete monitoring system that exceeded our expectations.",
      rating: 5
    },
    {
      name: "Sahaya Ellis",
      company: "GM, ToolFab",
      text: "We were looking for a solution to predict the remaining useful life of our plasma cups, and Serkayon delivered it with a simple yet highly effective monitoring system, transforming our manufacturing processes and boosting productivity and quality control.",
      rating: 5
    },
    {
      name: "BungMan Chae",
      company: "MD, PolyGreen",
      text: "Serkayon’s expertise has truly transformed our operations. They seamlessly integrated IoT and AI into our reverse vending machines for collecting PET bottles, making the system smarter, more efficient, and highly reliable",
      rating: 5
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: "Hyundai Wia, Chennai IN",
      image: cs1Img,
      description: "Real-time machine monitoring dashboard for shaft diameter inspection with AI-powered quality control.",
      benefits: ["30% increase in OEE", "25% reduction in defects", "Real-time monitoring"]
    },
    {
      id: 2,
      title: "ToolFab, Trichy IN", 
      image: cs2Img,
      description: "Advanced machine monitoring dashboard with predictive insights for manufacturing optimization.",
      benefits: ["Predictive maintenance", "15% decrease in energy consumption", "Smart factory integration"]
    },
    {
      id: 3,
      title: "PolyGreen, Busan KR",
      image: cs3Img,
      description: "Comprehensive smart factory solution with IoT integration and AI-driven process optimization.",
      benefits: ["Full system integration", "Computer vision Analysis", "reducing carbon footprint"]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-2xl font-bold text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Serkayon
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="inline-block text-5xl md:text-7xl font-bold mb-6 px-6 py-3 bg-white/30 backdrop-blur-sm rounded-2xl shadow-2xl ring-1 ring-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Serkayon
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shaping Tomorrow’s Industry, Together with Serkayon
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("services")}
            >
              Our Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-blue-300 hover:text-black"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Our Product Section */}
      <section id="product" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">Our Product</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              From Complexity to Clarity – Manufacturing Made Simple
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <img
                src={productImg}
                alt="Serkayon Product Overview"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">Our Services</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Comprehensive solutions tailored to meet your business needs and
              drive growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Fields Section */}
      <section id="working-fields" className="py-40 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl font-bold mb-8">Working Fields</h2>
            <p className="text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              We serve diverse industries with specialized IoT and AI solutions
              tailored to each sector's unique requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Machine Tool */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="mb-10">
                <img
                  src={aimlImg}
                  alt="Machine Tool AI/ML Solutions"
                  className="rounded-xl shadow-2xl w-full h-96 object-contain mx-auto"
                />
              </div>
              <h3 className="text-4xl font-bold mb-8 text-primary">
                Machine Tool
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Next-generation CNC and machine tool monitoring with predictive
                maintenance for peak precision and performance.
              </p>
            </motion.div>

            {/* Bio & Pharma */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="mb-10">
                <img
                  src={aibioImg}
                  alt="Bio Pharma AI Solutions"
                  className="rounded-xl shadow-2xl w-full h-96 object-contain mx-auto"
                />
              </div>
              <h3 className="text-4xl font-bold mb-8 text-primary">
                Bio & Pharma
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From biotech to pharma – IoT compliance solutions with AI
                analytics for smarter, safer manufacturing.
              </p>
            </motion.div>

            {/* Processing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="mb-10">
                <img
                  src={aiproImg}
                  alt="Processing AI Solutions"
                  className="rounded-xl shadow-2xl w-full h-96 object-contain mx-auto"
                />
              </div>
              <h3 className="text-4xl font-bold mb-8 text-primary">
                Processing
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Smart processing solutions for food, chemical, and material
                processing industries with intelligent automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">Case Study</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Real-world success stories from our implementations across
              different industries and regions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <img
                      src={caseStudy.image}
                      alt={`${caseStudy.title} Case Study`}
                      className="rounded-lg w-full h-80 object-cover mb-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedCaseStudy(caseStudy)}
                    />
                    <CardTitle className="text-2xl">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {caseStudy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {caseStudy.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">What Our Clients Say</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">About Serkayon</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              We’re not just professionals – we’re partners, a family dedicated
              to lifting businesses higher through innovation and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                description: "Skilled professionals with years of experience",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Quality Focus",
                description:
                  "Committed to delivering excellence in every project",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Client Success",
                description: "Your success is our primary objective",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Simple Implementation Process */}
      <section id="implementation-process" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">
              Simple Implementation Process
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-12 max-w-4xl">
              <h3 className="text-3xl font-bold text-center mb-8">
                Implementation Process
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-semibold">Assessment</h4>
                  <p className="text-muted-foreground">
                    Analyze current systems and requirements
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-semibold">Planning</h4>
                  <p className="text-muted-foreground">
                    Design solution architecture
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-semibold">Deployment</h4>
                  <p className="text-muted-foreground">
                    Install and configure systems
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h4 className="text-xl font-semibold">Support</h4>
                  <p className="text-muted-foreground">
                    Ongoing maintenance and optimization
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl text-center text-primary font-semibold max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-8"
              style={{ color: "#D43F92" }}
            >
              Time to Value: Days, Not Months!
            </h2>
          </motion.p>
          <motion.p
            className="text-lg text-center text-muted-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our streamlined process ensures rapid deployment, allowing you to
            start realizing the benefits of smart factory monitoring almost
            immediately.
          </motion.p>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-bold mb-8">Get In Touch</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Upgrade your machines with smart monitoring and AI
              insights—contact us today!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span>info@serkayon.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span>+91 88702 88649</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span>
                    18, Babu Road, Trichy 620008, <br />
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <CardTitle style={{ padding: 8, fontSize: 20 }}>
                      Send us a message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        name="first_name"
                        required
                      />
                      <Input
                        placeholder="Last Name"
                        name="last_name"
                        required
                      />
                    </div>
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                    <Input placeholder="Subject" name="subject" required />
                    <Textarea
                      placeholder="Your message"
                      rows={4}
                      name="message"
                      required
                    />
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </CardContent>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Serkayon</h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional services that drive your business forward
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2025 Serkayon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] mx-4 bg-background rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                <img
                  src={selectedCaseStudy.image}
                  alt={`${selectedCaseStudy.title} Case Study`}
                  className="w-full h-auto max-h-[60vh] object-cover rounded-lg mb-6"
                />
                <h3 className="text-3xl font-bold mb-4">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {selectedCaseStudy.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App

