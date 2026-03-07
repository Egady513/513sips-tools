import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How does "Dry Hire" bartending services work?',
      answer: 'We provide everything but the alcohol. Due to state laws, all alcohol must be purchased by the host. We do, however, offer an amazing courier service or customized shopping lists to make procurement easy. (Inquire for Pricing)'
    },
    {
      question: 'What type of events do you bartend?',
      answer: '513 Sips can be customized to suit any private event including BBQs, Birthday Parties, Picnics, Tailgates, Corporate Events, Baby Showers, and Weddings. No event is too small or too big and every event is better with a bar. Note: We can only be hired for public events such as festivals and markets when sponsored by a non-profit/501(c)3 Organization.'
    },
    {
      question: 'What areas do you service?',
      answer: 'Born and raised in Cincinnati, OH, 513 Sips has currently found home in Hyde Park (45208). We service all of Cincinnati, Southwest Indiana and Northern Kentucky. Our packages are priced for events located within a 30 mile radius. We are happy to travel further—please send a request for pricing.'
    },
    {
      question: 'Are you insured? What kind of permits are required?',
      answer: 'Yes! We have vendor liability insurance. We are a licensed Ohio Limited Liability Co. We also have trained and licensed bar staff using the ASK (Alcohol Server Knowledge) program through the state of Ohio. We are happy to work with all venues to provide proper documentation. If your event is on private property, no permit is required for 513 Sips. If your event is on public property, it is your responsibility to obtain the proper permits for your event.'
    },
    {
      question: 'How do you book?',
      answer: 'Start by filling out our Contact Us Page. We start with a consultation to discuss the details of your event; we will then provide you a detailed quote uniquely for you. We do require a 25% non-refundable deposit and signed contract to secure your date. Payment in full is due 2 weeks prior to your event.'
    },
    {
      question: 'How large is your bar? How do we know if it will fit?',
      answer: 'Our bar is a 5\'w×4\'h×2\'d mobile bar on wheels. It can be placed just about anywhere. We do require an additional 4 feet behind the bar for the bartender to have space to operate & for additional setup (additional coolers, prep table, wine cooler).'
    },
    {
      question: 'What is your refund policy?',
      answer: 'When securing a date with us, we turn down other potential clients for that date. Therefore, we are unable to issue refunds of your initial deposit. If you cancel at least two weeks prior to your date, we will do our best to refund any payments made, minus cost of materials already purchased. See contract for details.'
    },
    {
      question: 'What about inclement weather?',
      answer: '513 Sips operates rain or shine. We have a tent option available for when weather is less desirable. This can be added for an additional cost.'
    },
    {
      question: 'Can we customize the drink menu?',
      answer: 'Absolutely! Our Signature Package includes custom menu design and 2 signature cocktails created specifically for your event. We can work with you to create drinks that match your theme, colors, or preferences. For the Golden Standard package, we offer beer, wine, and champagne service.'
    },
    {
      question: 'Do you provide glassware?',
      answer: 'We provide high-quality plastic cups as part of all packages. If you prefer real glassware, we offer glassware rental at $3.50 per glass. We also have hard plastic cups available at $2.50 per glass. Replacement fees apply for broken or missing glassware ($6 per piece).'
    },
    {
      question: 'How many bartenders do we need?',
      answer: 'We recommend 1 bartender per 50 guests. This ensures prompt service and keeps lines short. For events with 51-100 guests, we provide 2 bartenders. For 101-150 guests, we provide 3 bartenders. Additional bartenders can be added at $75 per hour.'
    },
    {
      question: 'What do we need to provide?',
      answer: 'We need a flat, level surface for the bar setup, access to electricity (for lighting and refrigeration), and adequate space (5\' wide × 8\' deep including bartender workspace). You\'ll also need to provide the alcohol (we\'ll give you a shopping list!), but we bring everything else: bar tools, mixers, garnishes, cups, napkins, and ice.'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Got questions? We've got answers. If you don't see what you're looking for, 
            feel free to reach out.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-brand-primary pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="text-brand-cta flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-brand-cta flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-brand-cta text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle size={64} className="mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're here to help! Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-white text-brand-cta px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <span>Contact Us</span>
            </a>
            <a 
              href="tel:513-555-0199"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand-cta transition-colors"
            >
              <span>Call (513) 555-0199</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">View Services</h3>
              <p className="text-gray-600 mb-4">Explore our packages and pricing options.</p>
              <a href="/services" className="text-brand-cta font-semibold hover:underline">
                See Packages →
              </a>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">About Us</h3>
              <p className="text-gray-600 mb-4">Learn more about our story and values.</p>
              <a href="/about" className="text-brand-cta font-semibold hover:underline">
                Our Story →
              </a>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-2">Get a Quote</h3>
              <p className="text-gray-600 mb-4">Ready to book? Let's start planning.</p>
              <a href="/contact" className="text-brand-cta font-semibold hover:underline">
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}