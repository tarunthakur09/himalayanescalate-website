import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, ChevronLeft, Clock, Star, Phone, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getDestinationBySlug, destinations } from '../data/destinations';

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const destination = getDestinationBySlug(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Destination Not Found</h1>
          <p className="text-slate-600 mb-8">The destination you're looking for doesn't exist.</p>
          <Link
            to="/destinations"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Destinations</span>
          </button>
          
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              {destination.state}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {destination.name}
            </h1>
            <p className="text-xl text-amber-400 mb-6">{destination.tagline}</p>
            <p className="text-lg text-slate-200 leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 text-amber-500 mr-3" />
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {destination.overview}
                </p>
              </div>

              {/* Best Time to Visit */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Calendar className="w-6 h-6 text-amber-500 mr-3" />
                  Best Time to Visit
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {destination.bestTimeToVisit}
                </p>
              </div>

              {/* Best For */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-amber-500 mr-3" />
                  Best For
                </h2>
                <div className="flex flex-wrap gap-3">
                  {destination.bestFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sample Itineraries */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-amber-500 mr-3" />
                  Sample Itineraries
                </h2>
                <div className="space-y-6">
                  {destination.sampleItineraries.map((itinerary, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-slate-900">{itinerary.title}</h3>
                        <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full">
                          {itinerary.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {itinerary.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="flex items-center space-x-1 text-sm text-slate-600"
                          >
                            <Star className="w-4 h-4 text-amber-400" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden">
                      <img
                        src={image}
                        alt={`${destination.name} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Plan Your Trip</h3>
                  <p className="text-slate-300 text-sm mb-6">
                    Let our experts craft the perfect itinerary for your {destination.name} adventure.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+918544761004"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 rounded-full transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/917807347950?text=Hi, I am interested in booking a tour to ${destination.name} with Himalayan Escalate."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-white/30 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <span>Send Enquiry</span>
                    </Link>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Location</p>
                        <p className="text-sm text-slate-600">{destination.state}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">Region</p>
                        <p className="text-sm text-slate-600">
                          {destination.region === 'north' ? 'North India' : destination.region === 'south' ? 'South India' : 'North-East India'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">More Destinations in {destination.state}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations
              .filter(d => d.state === destination.state && d.id !== destination.id)
              .slice(0, 4)
              .map((relatedDest) => (
                <Link
                  key={relatedDest.id}
                  to={`/destinations/${relatedDest.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedDest.image}
                      alt={relatedDest.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {relatedDest.name}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
