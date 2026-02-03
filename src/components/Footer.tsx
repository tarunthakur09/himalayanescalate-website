import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white">
              Himalayan Escalate
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted travel partner across India. Discover the magic of North India, 
              South India, and North-East India with our curated journeys.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/himalayanescalate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/16ovsjyGXX/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/itineraries" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Itineraries
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/manali" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link to="/destinations/leh-ladakh" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Kashmir & Ladakh
                </Link>
              </li>
              <li>
                <Link to="/destinations/rishikesh" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Uttarakhand
                </Link>
              </li>
              <li>
                <Link to="/destinations/rajasthan" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link to="/destinations/kerala-backwaters" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Kerala
                </Link>
              </li>
              <li>
                <Link to="/destinations?region=northeast" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  North-East India
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918544761004"
                  className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+91 85447 61004</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917807347950"
                  className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+91 78073 47950</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917807347950?text=Hi, I am interested in booking a tour with Himalayan Escalate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-sm">WhatsApp: 78073 47950</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@himalayanescalate.com"
                  className="flex items-center space-x-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">sales@himalayanescalate.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            © {currentYear} Himalayan Escalate. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
