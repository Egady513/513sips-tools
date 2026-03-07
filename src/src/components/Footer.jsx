import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-brand-cta flex items-center justify-center">
                <span className="text-brand-navy font-bold text-sm">513</span>
              </div>
              <span className="font-heading font-bold text-xl">Sips</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Making Every Event, Uniquely Yours. Premium mobile bar service for weddings, 
              corporate events, and private parties in Cincinnati and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-brand-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-brand-gold" />
                <span>(513) 555-0199</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-brand-gold" />
                <span>hello@513sips.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="text-brand-gold mt-0.5" />
                <span>Hyde Park, Cincinnati, OH 45208<br />Serving Cincinnati, N. Kentucky & SW Indiana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} 513 Sips - Elevated Ventures EG, LLC. All rights reserved.</p>
          <p className="mt-1">Licensed & Insured | ASK Certified Bartenders</p>
        </div>
      </div>
    </footer>
  )
}