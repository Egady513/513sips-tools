import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required'
    if (!formData.eventType) newErrors.eventType = 'Event type is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // In a real implementation, this would send to a backend
      console.log('Form submitted:', formData)
      setSubmitted(true)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-background">
        <div className="bg-brand-navy text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle size={64} className="mx-auto mb-6 text-brand-gold" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-gray-600 mb-8">
            In the meantime, feel free to explore our services or check out our FAQ page 
            for answers to common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="btn-primary">
              View Services
            </a>
            <a href="/faq" className="btn-secondary">
              Read FAQ
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Let's Start Planning</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ready to elevate your event? Fill out the form below and we'll get back to you 
            with a custom quote within 24 hours.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <h2 className="font-heading text-2xl font-bold text-brand-primary mb-6">
                  Request a Quote
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-brand-primary focus:border-transparent`}
                        placeholder="John & Jane Smith"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-brand-primary focus:border-transparent`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="(513) 555-0199"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.eventDate ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-brand-primary focus:border-transparent`}
                      />
                      {errors.eventDate && <p className="mt-1 text-sm text-red-500">{errors.eventDate}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.eventType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-brand-primary focus:border-transparent`}
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="bbq">BBQ / Cookout</option>
                        <option value="tailgate">Tailgate</option>
                        <option value="baby-shower">Baby Shower</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.eventType && <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>}
                    </div>

                    <div>
                      <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Guest Count
                      </label>
                      <select
                        id="guestCount"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-150">101-150 guests</option>
                        <option value="150+">150+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Event
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Share details about your vision, any special requests, or questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto inline-flex items-center justify-center space-x-2 text-lg"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-heading text-xl font-bold text-brand-primary mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-brand-cta mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:513-555-0199" className="text-gray-600 hover:text-brand-primary">
                        (513) 555-0199
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="text-brand-cta mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:hello@513sips.com" className="text-gray-600 hover:text-brand-primary">
                        hello@513sips.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-brand-cta mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">
                        Hyde Park, Cincinnati, OH 45208<br />
                        <span className="text-sm">Serving Cincinnati, N. Kentucky & SW Indiana</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-brand-cta mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-brand-primary text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">1.</span>
                    <span>We'll review your request within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">2.</span>
                    <span>Schedule a consultation call to discuss details</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">3.</span>
                    <span>Receive your custom quote</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">4.</span>
                    <span>Secure your date with deposit & contract</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}