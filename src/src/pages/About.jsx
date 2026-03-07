import { Users, Award, Heart, MapPin } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Born from family, built for community. The story of how 513 Sips came to be.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <section className="py-16 md:py-24 bg-brand-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              513 Sips was born out of equal parts family, community, and a love for creating 
              unforgettable experiences. Growing up with an "open house," there were constantly 
              guests at the table; every holiday or random Saturday seemed to turn into a celebration. 
              That tradition shaped me; that's why amongst my friends, I'm known as "The Hub." Always 
              the one planning or hosting.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I carry that through my role as The Greater Cincinnati Penn State Alumni President 
              and everything else I do, trying to make moments matter and celebrate. What sticks 
              with me is how every gathering seemed to elevate friends into family.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              My dad and I often joke about that upbringing and where it's gotten us today—how 
              the best events, the ones that cater to the guests, carry the moments that bring 
              people closer together. It wasn't long after one of our chats, drinks in hand, we 
              agreed that a good bar is often the centerpoint of those gatherings: it's where 
              stories are told, jokes are made and memories are cemented.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              That conversation sparked the idea for 513 Sips. A name that pays homage to our 
              home city, Cincinnati. What started as a fun family reflection grew into something 
              bigger: a vision to create a mobile bar that brings those same feelings of connection 
              and celebration wherever people gather. Now I get to help others create those same 
              unforgettable memories that they will cherish for the rest of their life.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              At the end of the day, 513 Sips isn't just about serving drinks—it's about carrying 
              on a tradition: making hosting effortless, elevating every gathering, and helping 
              friends feel like family.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-brand-primary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">Faith First</h3>
              <p className="text-gray-600">
                We operate with Christian integrity in all we do. Honesty, truth, respect, and 
                vulnerability guide our business practices and customer relationships.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-cta/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-brand-cta" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in the power of gathering. Every event is an opportunity to bring 
                people together and create lasting connections.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="text-brand-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">Excellence</h3>
              <p className="text-gray-600">
                From our certified bartenders to our attention to detail, we strive for excellence 
                in every aspect of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* Placeholder for Eddie's photo */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-primary to-brand-navy border-4 border-brand-gold flex items-center justify-center">
                <div className="text-center">
                  <Users size={80} className="mx-auto mb-4 opacity-50" />
                  <p className="text-2xl opacity-75">Photo Coming Soon</p>
                  <p className="text-lg opacity-50 mt-2">Eddie, Founder & Owner</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Meet Eddie
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Founder, Owner, and Chief Celebration Officer
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not behind the bar or planning events, you'll find me serving as the 
                Greater Cincinnati Penn State Alumni President, exploring Cincinnati's food scene, 
                or spending time with family. I'm a firm believer that the best moments in life 
                happen when people gather around good drinks and better company.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My approach to 513 Sips is simple: treat every event like I'm hosting friends in 
                my own home. That means attention to detail, genuine hospitality, and creating 
                an atmosphere where memories are made.
              </p>
              <div className="flex items-center space-x-2 text-brand-gold">
                <MapPin size={20} />
                <span>Hyde Park, Cincinnati, OH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-cta text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold mb-8">Licensed & Certified</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <Award size={48} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Licensed LLC</h3>
                <p className="text-sm opacity-90">Elevated Ventures EG, LLC<br/>Ohio Limited Liability Company</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Award size={48} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">ASK Certified</h3>
                <p className="text-sm opacity-90">All bartenders certified through<br/>Ohio's Alcohol Server Knowledge program</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Award size={48} className="mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Fully Insured</h3>
                <p className="text-sm opacity-90">Vendor liability insurance<br/>Venue documentation provided</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}