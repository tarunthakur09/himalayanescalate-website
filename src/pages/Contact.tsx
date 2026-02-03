import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitMessage('Thank you for your enquiry! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 85447 61004', '+91 78073 47950'],
      href: 'tel:+918544761004'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sales@himalayanescalate.com'],
      href: 'mailto:sales@himalayanescalate.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9 AM - 8 PM', 'Sunday: 10 AM - 6 PM'],
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Have questions about your trip? We're here to help you plan the perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-slate-600 hover:text-amber-600 transition-colors">
                          {item.details[0]}
                        </a>
                      ) : (
                        item.details.map((detail, i) => (
                          <p key={i} className="text-slate-600">{detail}</p>
                        ))
                      )}
                    </div>
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Follow Us</h3>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://www.instagram.com/himalayanescalate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/16ovsjyGXX/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/917807347950?text=Hi, I am interested in booking a tour with Himalayan Escalate."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                        placeholder="e.g., Manali, Kerala, Goa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Number of Travelers
                      </label>
                      <select
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      >
                        <option value="">Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your travel plans, preferences, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 text-white font-semibold rounded-full transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Our Location</h2>
            <p className="text-slate-600 mt-2">Based in India, serving travelers worldwide</p>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-[21/9] bg-slate-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Himalayan Escalate</p>
                <p className="text-slate-500">India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
