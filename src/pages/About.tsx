import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Compass, Heart, Shield, Award, Users, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Compass,
      title: 'Authentic Experiences',
      description: 'We believe in creating genuine connections with local cultures and communities.'
    },
    {
      icon: Heart,
      title: 'Passion for Travel',
      description: 'Our love for India drives us to showcase its beauty to travelers from around the world.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Your safety and comfort are our top priorities on every journey.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of your travel experience.'
    }
  ];

  const stats = [
    { value: '31+', label: 'Destinations' },
    { value: '20+', label: 'Curated Itineraries' },
    { value: '5000+', label: 'Happy Travelers' },
    { value: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="About Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Who We Are
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              About Himalayan Escalate
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Your trusted travel partner for discovering the incredible diversity of India.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Crafting Unforgettable Journeys Across India
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Himalayan Escalate was founded with a simple mission: to help travelers discover 
                  the incredible diversity of India. From the snow-capped peaks of the Himalayas to 
                  the serene backwaters of Kerala, we curate journeys that showcase the best of 
                  what India has to offer.
                </p>
                <p>
                  Our team of experienced travel experts has explored every corner of the country, 
                  handpicking the most authentic experiences, comfortable accommodations, and 
                  knowledgeable local guides to ensure your journey is nothing short of extraordinary.
                </p>
                <p>
                  Whether you're seeking adventure in the mountains, relaxation on pristine beaches, 
                  or cultural immersion in historic cities, we have the perfect itinerary for you.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1626010448982-5d629e62f3d5?w=400&q=80"
                alt="Himalayas"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80"
                alt="Kerala"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80"
                alt="Rajasthan"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&q=80"
                alt="North East"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Travel Experience"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                We Plan. You Explore.
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Local Guides</h3>
                    <p className="text-slate-600">Our team knows every corner of India, ensuring authentic experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Customized Itineraries</h3>
                    <p className="text-slate-600">Tailored trips that match your interests, budget, and travel style.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Support</h3>
                    <p className="text-slate-600">We are always just a call away, wherever you are in India.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 mb-8">
            Let us help you discover the magic of India. Contact our travel experts today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition-colors"
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

export default About;
