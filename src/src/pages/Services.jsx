import { Link } from 'react-router-dom'
import { Wine, Star, Coffee, Tent, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Every event needs something different. As a dry-hire bar, we do everything 
            but purchase the alcohol. Let's find the perfect fit for your celebration.
          </p>
        </div>
      </div>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Golden Standard */}
            <div className="glass-card p-8 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <Wine className="text-brand-primary" size={32} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-brand-primary mb-2">Golden Standard</h2>
              <p className="text-brand-cta font-bold text-4xl mb-4">$650</p>
              <p className="text-gray-600 mb-6">
                Serving the standard necessities for your event. Perfect for intimate gatherings 
                and classic celebrations.
              </p>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-primary mb-3">What's Included:</h3>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Comprehensive consultation & event planning</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>3 hours of professional bartending service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Mobile bar cart rental (5'×4'×2')</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>1 certified bartender (ASK certified)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Beer, Wine & Champagne service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>All necessities: cups, napkins, straws</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Travel within 30-mile radius</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-primary/5 rounded-lg p-4 mb-6">
                <p className="text-sm text-brand-primary">
                  <strong>Recommended:</strong> 1 bartender per 50 guests
                </p>
              </div>

              <Link to="/contact" className="btn-secondary w-full text-center block">
                Book This Package
              </Link>
            </div>

            {/* The Signature */}
            <div className="glass-card p-8 border-2 border-brand-cta relative flex flex-col">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="w-16 h-16 rounded-full bg-brand-cta/10 flex items-center justify-center mb-6">
                <Star className="text-brand-cta" size={32} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-brand-primary mb-2">The Signature</h2>
              <p className="text-brand-cta font-bold text-4xl mb-4">$850</p>
              <p className="text-gray-600 mb-6">
                Elevating the experience for your event. Custom cocktails and premium touches 
                that make your celebration truly memorable.
              </p>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-primary mb-3">Everything in Golden Standard, plus:</h3>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>2 Signature Cocktails (custom created for your event)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>1 Premade Cocktail (batch prepared)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Custom menu design (printed or digital)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Homemade mixers & fresh ingredients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Homemade syrups & purees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span>Full Bar upgrade (multiple liquor options)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-cta/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-brand-cta">
                  <strong>Perfect for:</strong> Weddings, milestone birthdays, corporate events
                </p>
              </div>

              <Link to="/contact" className="btn-primary w-full text-center block">
                Book This Package
              </Link>
            </div>

            {/* Uniquely Yours */}
            <div className="glass-card p-8 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mb-6">
                <Coffee className="text-brand-secondary" size={32} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-brand-primary mb-2">Uniquely Yours</h2>
              <p className="text-brand-cta font-bold text-4xl mb-4">Custom</p>
              <p className="text-gray-600 mb-6">
                Every event deserves something unique. Build your perfect package with our 
                à la carte options and add-ons.
              </p>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-brand-primary mb-3">Available Add-Ons:</h3>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Additional Hours</strong> — $75/hr pre-booked, $100/hr day-of</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Extra Bartenders</strong> — $75/hr per bartender</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Additional Cocktails</strong> — $150 each</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Basic Mixed Drink Service</strong> — Custom quote</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Coffee/Hot Chocolate Bar</strong> — $100</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Arch Photo Backdrop</strong> — $350</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Bar Decorations</strong> — Custom quote</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Glassware Rental</strong> — $3.50/glass</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-brand-cta mt-0.5 flex-shrink-0" />
                    <span><strong>Tent Rental</strong> — $250</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="btn-secondary w-full text-center block">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first contact to last call, we make the process seamless and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Reach Out',
                description: 'Fill out our contact form or give us a call. Tell us about your event, date, and vision.',
                icon: '01'
              },
              {
                step: '2',
                title: 'Consultation',
                description: 'We\'ll schedule a consultation to discuss details and create a custom quote just for you.',
                icon: '02'
              },
              {
                step: '3',
                title: 'Book Your Date',
                description: 'Secure your date with a 25% non-refundable deposit and signed contract.',
                icon: '03'
              },
              {
                step: '4',
                title: 'Celebrate',
                description: 'We handle setup, service, and breakdown. You enjoy your event!',
                icon: '04'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Important Details</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-gold mb-4">Dry-Hire Service</h3>
              <p className="text-gray-300">
                We provide everything but the alcohol. Due to Ohio state laws, all alcohol must be 
                purchased by the host. We do, however, offer an amazing courier service or customized 
                shopping lists to make it easy. <Link to="/faq" className="text-brand-gold hover:underline">Learn more</Link>
              </p>
            </div>

            <div className="glass-card bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-gold mb-4">Payment Terms</h3>
              <p className="text-gray-300">
                We require a 25% non-refundable deposit and signed contract to secure your date. 
                Payment in full is due 2 weeks prior to your event. We accept credit cards, checks, 
                and electronic payments.
              </p>
            </div>

            <div className="glass-card bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-gold mb-4">Service Area</h3>
              <p className="text-gray-300">
                Based in Hyde Park (45208), we serve all of Cincinnati, Northern Kentucky, and 
                Southwest Indiana. Packages include travel within 30 miles. We're happy to travel 
                further—just ask for a custom quote.
              </p>
            </div>

            <div className="glass-card bg-white/5 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-gold mb-4">Fully Insured</h3>
              <p className="text-gray-300">
                We carry vendor liability insurance and are a licensed Ohio LLC. All bartenders 
                are ASK (Alcohol Server Knowledge) certified. We're happy to provide documentation 
                to your venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every booking includes a thorough consultation and detailed custom quote.
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-2 bg-white text-brand-cta px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}