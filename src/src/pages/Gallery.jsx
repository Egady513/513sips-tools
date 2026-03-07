import { useState } from 'react'
import { Camera, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // Placeholder for gallery images - these will be replaced with real photos
  const galleryImages = [
    { id: 1, alt: 'Mobile bar setup at wedding', category: 'Weddings' },
    { id: 2, alt: 'Signature cocktails being prepared', category: 'Drinks' },
    { id: 3, alt: 'Corporate event bar service', category: 'Corporate' },
    { id: 4, alt: 'Birthday celebration setup', category: 'Private Parties' },
    { id: 5, alt: 'Bar decorations and details', category: 'Details' },
    { id: 6, alt: 'Happy guests at the bar', category: 'Events' },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael',
      event: 'Wedding',
      quote: '513 Sips made our wedding reception absolutely perfect! The signature cocktails were a huge hit with our guests.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jennifer T.',
      event: 'Corporate Event',
      quote: 'Professional, punctual, and the drinks were amazing. Our company party was elevated to the next level.',
      rating: 5
    },
    {
      id: 3,
      name: 'The Johnson Family',
      event: 'Anniversary Party',
      quote: 'Eddie and his team went above and beyond. The mobile bar was the centerpiece of our celebration.',
      rating: 5
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery & Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            See our mobile bar in action and hear what our clients have to say.
          </p>
        </div>
      </div>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real events, real moments, real memories. (Photos coming soon!)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-brand-primary to-brand-navy"
                onClick={() => {
                  setCurrentImage(index)
                  setLightboxOpen(true)
                }}
              >
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Camera size={48} className="mb-4 opacity-50" />
                  <p className="text-lg font-semibold opacity-75">{image.category}</p>
                  <p className="text-sm opacity-50 mt-2">Photo Coming Soon</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 italic">
              Have photos from your event with 513 Sips? We'd love to feature them! 
              <a href="mailto:hello@513sips.com" className="text-brand-primary hover:underline ml-1">Send them our way</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it—hear from the people we've helped celebrate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-brand-cta fill-brand-cta" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-brand-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              See Us In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Coming soon! We're working on event highlight videos to show you the 513 Sips experience.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto rounded-xl bg-white/10 flex items-center justify-center">
            <div className="text-center">
              <Camera size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-2xl opacity-75">Video Coming Soon</p>
              <p className="text-lg opacity-50 mt-2">Follow us on Instagram for behind-the-scenes content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-brand-gold"
            onClick={() => setLightboxOpen(false)}
          >
            ✕
          </button>
          
          <button 
            className="absolute left-4 text-white hover:text-brand-gold"
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-4xl max-h-[80vh] aspect-square bg-gradient-to-br from-brand-primary to-brand-navy rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <Camera size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-2xl opacity-75">{galleryImages[currentImage].category}</p>
              <p className="text-lg opacity-50 mt-2">Photo Coming Soon</p>
            </div>
          </div>

          <button 
            className="absolute right-4 text-white hover:text-brand-gold"
            onClick={(e) => {
              e.stopPropagation()
              setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
            }}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  )
}