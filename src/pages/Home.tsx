import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, Phone, ChevronRight, Star, Compass, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { destinations } from '../data/destinations';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const featuredDestinations = destinations.slice(0, 6);

  const regions = [
    {
      name: 'North India',
      description: 'Himachal Pradesh, Kashmir, Ladakh, Uttarakhand, Punjab, Rajasthan',
      count: 18,
      image: 'https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=600&q=80',
      path: '/destinations?region=north'
    },
    {
      name: 'South India',
      description: 'Kerala, Karnataka, Tamil Nadu, Andhra Pradesh',
      count: 8,
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
      path: '/destinations?region=south'
    },
    {
      name: 'North-East India',
      description: 'Sikkim, Meghalaya, Assam, Arunachal Pradesh',
      count: 5,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=600&q=80',
      path: '/destinations?region=northeast'
    }
  ];

  const testimonials = [
    {
      quote: "Our honeymoon to Manali was perfectly planned. Everything from hotels to transport was seamless. Highly recommend!",
      author: "Rahul & Priya",
      location: "Delhi",
      rating: 5
    },
    {
      quote: "Amazing Kerala trip! The houseboat experience was unforgettable. Great service and support throughout.",
      author: "The Sharma Family",
      location: "Mumbai",
      rating: 5
    },
    {
      quote: "Spiti Valley expedition was a life-changing experience. Professional guides and well-organized trip.",
      author: "Aditya",
      location: "Bangalore",
      rating: 5
    }
  ];

  const features = [
    {
      icon: Compass,
      title: "Expert Local Guides",
      description: "Our team knows every corner of India, ensuring authentic experiences."
    },
    {
      icon: Calendar,
      title: "Customized Itineraries",
      description: "Tailored trips that match your interests, budget, and travel style."
    },
    {
      icon: Shield,
      title: "24/7 Support",
      description: "We are always just a call away, wherever you are in India."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="Himalayan Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 reveal">
            Discover Incredible India
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 reveal">
            Your Journey Across
            <br />
            <span className="text-amber-400">India Begins Here</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 reveal">
            Curated journeys across North India, South India, and North-East India. 
            From the Himalayas to the backwaters of Kerala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
            <Link
              to="/destinations"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-all flex items-center space-x-2"
            >
              <span>Explore Destinations</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/itineraries"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all border border-white/30"
            >
              View Itineraries
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto reveal">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">31+</p>
              <p className="text-slate-300 text-sm mt-1">Destinations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">20+</p>
              <p className="text-slate-300 text-sm mt-1">Itineraries</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-amber-400">5000+</p>
              <p className="text-slate-300 text-sm mt-1">Happy Travelers</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Explore Regions Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Explore Regions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Discover India's Diversity
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              From snow-capped mountains to tropical beaches, explore the best of India with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <Link
                key={region.name}
                to={region.path}
                className="group relative overflow-hidden rounded-2xl reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{region.name}</h3>
                  <p className="text-slate-300 text-sm mb-4">{region.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-semibold">{region.count} Destinations</span>
                    <span className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 reveal">
            <div>
              <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
                Popular Destinations
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Trending Now</h2>
            </div>
            <Link
              to="/destinations"
              className="hidden sm:flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              <span>View All</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-medium rounded-full">
                      {destination.state}
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-amber-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm text-slate-500">{destination.region === 'north' ? 'North India' : destination.region === 'south' ? 'South India' : 'North-East India'}</span>
                    </div>
                    <span className="text-amber-600 font-medium text-sm flex items-center">
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              <span>View All Destinations</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              We Plan. You Explore.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-8 reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What Our Travelers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today and let our experts craft the perfect itinerary for your Indian adventure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+918544761004"
              className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-full hover:bg-slate-100 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: 85447 61004</span>
            </a>
            <a
              href="https://wa.me/917807347950?text=Hi, I am interested in booking a tour with Himalayan Escalate."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
