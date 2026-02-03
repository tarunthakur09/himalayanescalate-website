import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, X, Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [itinerariesOpen, setItinerariesOpen] = useState(false);
  const location = useLocation();

  const destinationsRef = useRef<HTMLDivElement>(null);
  const itinerariesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationsRef.current && !destinationsRef.current.contains(event.target as Node)) {
        setDestinationsOpen(false);
      }
      if (itinerariesRef.current && !itinerariesRef.current.contains(event.target as Node)) {
        setItinerariesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const destinationsItems = [
    { name: 'North India', path: '/destinations?region=north' },
    { name: 'South India', path: '/destinations?region=south' },
    { name: 'North-East India', path: '/destinations?region=northeast' },
  ];

  const itinerariesItems = [
    { name: 'Short Trips', path: '/itineraries/short-trips' },
    { name: 'Family Tours', path: '/itineraries/family-tours' },
    { name: 'Honeymoon Packages', path: '/itineraries/honeymoon-packages' },
    { name: 'Adventure Tours', path: '/itineraries/adventure-tours' },
    { name: 'Luxury Tours', path: '/itineraries/luxury-tours' },
    { name: 'Corporate / Group Tours', path: '/itineraries/corporate-group-tours' },
    { name: 'More...', path: '/itineraries' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Himalayan Escalate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              Home
            </Link>

            {/* Destinations Dropdown */}
            <div
              ref={destinationsRef}
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  location.pathname.includes('/destinations')
                    ? 'text-amber-400'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                <span>Destinations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${destinationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-0 w-48 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                  destinationsOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {destinationsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setDestinationsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Itineraries Dropdown */}
            <div
              ref={itinerariesRef}
              className="relative"
              onMouseEnter={() => setItinerariesOpen(true)}
              onMouseLeave={() => setItinerariesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                  location.pathname.includes('/itineraries')
                    ? 'text-amber-400'
                    : 'text-white hover:text-amber-400'
                }`}
              >
                <span>Itineraries</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${itinerariesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                  itinerariesOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  {itinerariesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setItinerariesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-amber-400' : 'text-white hover:text-amber-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918544761004"
              className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">85447 61004</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-full transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-slate-900/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            to="/"
            className="block text-lg font-medium text-white hover:text-amber-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Destinations */}
          <div className="space-y-2">
            <span className="block text-lg font-medium text-amber-400">Destinations</span>
            <div className="pl-4 space-y-2">
              {destinationsItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-sm text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Itineraries */}
          <div className="space-y-2">
            <span className="block text-lg font-medium text-amber-400">Itineraries</span>
            <div className="pl-4 space-y-2">
              {itinerariesItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-sm text-slate-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link
            to="/about"
            className="block text-lg font-medium text-white hover:text-amber-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-lg font-medium text-white hover:text-amber-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 border-t border-slate-700">
            <a
              href="tel:+918544761004"
              className="flex items-center space-x-2 text-white"
            >
              <Phone className="w-5 h-5" />
              <span>85447 61004</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
