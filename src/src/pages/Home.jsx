import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users, Award, Star, Wine, Coffee, Tent } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-primary/80"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Elevate Your Event with{' '}
              <span className="text-brand-gold">513 Sips</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium mobile bar service in Cincinnati. We bring the bar to you—
              certified bartenders, signature cocktails, and unforgettable experiences 
              for weddings, corporate events, and private parties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>Get a Quote</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                View Services
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Award size={18} className="text-brand-gold" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={18} className="text-brand-gold" />
                <span>ASK Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-brand-gold" />
                <span>5x4 Mobile Bar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Our Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every event is unique. Choose the package that fits your vision, 
              or let us create something completely custom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Golden Standard */}
            <div className="glass-card p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Wine className="text-brand-primary" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">Golden Standard</h3>
              <p className="text-brand-cta font-bold text-3xl mb-4">$650</p>
              <p className="text-gray-600 mb-6">Perfect for intimate gatherings and classic celebrations.</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>3 hours of service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Up to 50 guests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Beer, Wine & Champagne</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Mobile bar cart rental</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>All necessities included</span>
                </li>
              </ul>
              <Link to="/services" className="btn-secondary w-full text-center block">
                Learn More
              </Link>
            </div>

            {/* The Signature */}
            <div className="glass-card p-8 border-2 border-brand-cta relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="w-14 h-14 rounded-full bg-brand-cta/10 flex items-center justify-center mb-6">
                <Star className="text-brand-cta" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">The Signature</h3>
              <p className="text-brand-cta font-bold text-3xl mb-4">$850</p>
              <p className="text-gray-600 mb-6">Elevate your event with custom cocktails and premium service.</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Everything in Golden Standard</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>2 Signature Cocktails</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Custom menu design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Homemade mixers & syrups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>1 Premade cocktail</span>
                </li>
              </ul>
              <Link to="/services" className="btn-primary w-full text-center block">
                Learn More
              </Link>
            </div>

            {/* Uniquely Yours */}
            <div className="glass-card p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-6">
                <Coffee className="text-brand-secondary" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-brand-primary mb-2">Uniquely Yours</h3>
              <p className="text-brand-cta font-bold text-3xl mb-4">Custom</p>
              <p className="text-gray-600 mb-6">Build your perfect package with our à la carte options.</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Additional hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Extra bartenders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Glassware rental</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Coffee/Hot Chocolate bar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-brand-cta">✓</span>
                  <span>Tent & backdrop rentals</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-secondary w-full text-center block">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Born from Family, Built for Community
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                513 Sips was born out of equal parts family, community, and a love for creating 
                unforgettable experiences. Growing up with an "open house," there were constantly 
                guests at the table—every holiday or random Saturday seemed to turn into a celebration.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                That tradition shaped me. Amongst my friends, I'm known as "The Hub"—always the one 
                planning or hosting. What started as a fun family reflection grew into something bigger: 
                a vision to create a mobile bar that brings those same feelings of connection and 
                celebration wherever people gather.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
                <span>Read Our Story</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              {/* Placeholder for Eddie's photo */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary to-brand-navy flex items-center justify-center">
                <div className="text-center text-white">
                  <Users size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Photo Coming Soon</p>
                  <p className="text-sm opacity-50">Eddie, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 text-lg">
              Don't just take our word for it—hear from the people we've helped celebrate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card bg-white/5 p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Testimonial coming soon. We're collecting reviews from our amazing clients!"
                </p>
                <p className="text-brand-gold font-semibold">— Happy Client</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/gallery" className="text-brand-gold hover:text-white transition-colors inline-flex items-center space-x-2">
              <span>View All Testimonials</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-primary to-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something unforgettable together. Get in touch for a custom quote 
            tailored to your unique celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg inline-flex items-center justify-center space-x-2">
              <span>Get Your Quote</span>
              <ArrowRight size={20} />
            </Link>
            <a href="tel:513-555-0199" className="btn-secondary text-lg text-white border-white hover:bg-white hover:text-brand-navy">
              Call (513) 555-0199
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}