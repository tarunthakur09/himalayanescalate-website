import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { itineraryCategories } from '../data/itineraries';

const Itineraries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            alt="Itineraries"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Curated Experiences
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Itineraries
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Handcrafted travel experiences designed for every type of traveler. 
              From weekend getaways to luxury escapes.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraryCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/itineraries/${category.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-slate-300 text-sm">{category.destinations.length} Destinations</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {category.destinations.slice(0, 4).map((dest, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                        >
                          <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {category.destinations.length > 4 && (
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-600 font-medium">
                          +{category.destinations.length - 4}
                        </div>
                      )}
                    </div>
                    <span className="text-amber-600 font-medium text-sm flex items-center">
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Featured
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Most Popular Itineraries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraryCategories.flatMap(cat => cat.destinations.slice(0, 1)).slice(0, 6).map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      Popular
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{dest.name}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">{dest.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{dest.duration}</span>
                    </div>
                    <Link
                      to={`/destinations/${dest.slug}`}
                      className="text-amber-600 font-medium hover:text-amber-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Itinerary?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our travel experts can create a personalized trip plan tailored to your preferences and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
          >
            <span>Get in Touch</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Itineraries;
