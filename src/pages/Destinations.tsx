import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, ChevronRight, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const regionParam = searchParams.get('region');
  const [activeRegion, setActiveRegion] = useState<string>(regionParam || 'all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (regionParam) {
      setActiveRegion(regionParam);
    }
  }, [regionParam]);

  const filteredDestinations = activeRegion === 'all'
    ? destinations
    : destinations.filter(d => d.region === activeRegion);

  const regions = [
    { id: 'all', name: 'All Regions', count: destinations.length },
    { id: 'north', name: 'North India', count: destinations.filter(d => d.region === 'north').length },
    { id: 'south', name: 'South India', count: destinations.filter(d => d.region === 'south').length },
    { id: 'northeast', name: 'North-East India', count: destinations.filter(d => d.region === 'northeast').length },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Destinations"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Explore India
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Destinations
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover 31+ incredible destinations across North India, South India, and North-East India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 sm:hidden">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="text-slate-600 font-medium">Filter by Region</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeRegion === region.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {region.name}
                <span className={`ml-2 ${activeRegion === region.id ? 'text-white/80' : 'text-slate-400'}`}>
                  ({region.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination, index) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-medium rounded-full">
                      {destination.state}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">
                      {destination.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-slate-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs">
                        {destination.region === 'north' ? 'North India' : destination.region === 'south' ? 'South India' : 'North-East India'}
                      </span>
                    </div>
                    <span className="text-amber-600 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No destinations found in this region.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-slate-300 mb-8">
            Let us create a custom itinerary just for you. Contact our travel experts today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors"
          >
            <span>Plan Your Trip</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
