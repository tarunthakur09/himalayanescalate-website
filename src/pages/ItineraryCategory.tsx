import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getCategoryBySlug } from '../data/itineraries';

const ItineraryCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const categoryData = getCategoryBySlug(category || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Category Not Found</h1>
          <p className="text-slate-600 mb-8">The itinerary category you're looking for doesn't exist.</p>
          <Link
            to="/itineraries"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Itineraries</span>
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
            src={categoryData.image}
            alt={categoryData.name}
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
            <span>Back to Itineraries</span>
          </button>
          
          <div className="max-w-3xl">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Itinerary Category
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {categoryData.name}
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              {categoryData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.destinations.map((destination, index) => (
              <Link
                key={destination.slug}
                to={`/destinations/${destination.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      {destination.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {destination.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center space-x-2 text-sm text-slate-500">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-slate-500 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      View Details
                    </span>
                    <span className="text-amber-600 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ChevronLeft className="w-4 h-4 ml-1 rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your {categoryData.name}?
          </h2>
          <p className="text-slate-300 mb-8">
            Contact our travel experts to customize your perfect trip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918544761004"
              className="flex items-center space-x-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/917807347950?text=Hi, I am interested in ${categoryData.name} with Himalayan Escalate."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-full transition-colors"
            >
              <span>Send Enquiry</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Short Trips', slug: 'short-trips' },
              { name: 'Family Tours', slug: 'family-tours' },
              { name: 'Honeymoon Packages', slug: 'honeymoon-packages' },
              { name: 'Adventure Tours', slug: 'adventure-tours' },
              { name: 'Luxury Tours', slug: 'luxury-tours' },
            ]
              .filter(cat => cat.slug !== category)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/itineraries/${cat.slug}`}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-slate-700 font-medium hover:text-amber-600 transition-colors">
                    {cat.name}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ItineraryCategory;
