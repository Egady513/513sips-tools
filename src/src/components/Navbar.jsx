import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3' 
          : 'py-5'
      }`}
    >
      <div className={`mx-4 sm:mx-6 lg:mx-8 transition-all duration-500 ${
        scrolled ? 'liquid-glass' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CA8A04] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg font-['Bodoni_Moda']">513</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CA8A04] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Bodoni_Moda'] font-bold text-xl text-[#0A1628] tracking-tight">Sips</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] font-medium -mt-1">Mobile Bar</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-sm uppercase tracking-wider ${
                    isActive(link.path) 
                      ? 'text-[#CA8A04] font-semibold' 
                      : 'text-[#0A1628]/80 hover:text-[#CA8A04]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:513-555-0199"
                className="flex items-center gap-2 text-[#0A1628]/70 hover:text-[#CA8A04] transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">(513) 555-0199</span>
              </a>
              <Link
                to="/contact"
                className="btn-luxury text-sm py-3 px-6"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-[#0A1628]/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-[#0A1628]" /> : <Menu size={24} className="text-[#0A1628]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-x-4 top-24 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="liquid-glass p-6 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-[#CA8A04]/10 to-transparent text-[#CA8A04] font-semibold'
                  : 'hover:bg-[#0A1628]/5 text-[#0A1628]'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#0A1628]/10 mt-4">
            <a
              href="tel:513-555-0199"
              className="flex items-center gap-2 py-3 px-4 text-[#0A1628]/70"
            >
              <Phone size={18} />
              <span>(513) 555-0199</span>
            </a>
            <Link
              to="/contact"
              className="btn-luxury w-full text-center mt-2 block"
              onClick={() => setIsOpen(false)}
            >
              Get Your Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
