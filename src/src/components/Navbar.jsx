import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-brand-cta flex items-center justify-center">
              <span className="text-brand-navy font-bold text-sm">513</span>
            </div>
            <span className="font-heading font-bold text-xl">Sips</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-brand-gold ${
                  isActive(link.path) ? 'text-brand-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:513-555-0199"
              className="flex items-center space-x-1 text-brand-gold hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 px-4 rounded-md transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-gold text-brand-navy'
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:513-555-0199"
              className="flex items-center space-x-2 py-2 px-4 text-brand-gold"
            >
              <Phone size={16} />
              <span>(513) 555-0199</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}