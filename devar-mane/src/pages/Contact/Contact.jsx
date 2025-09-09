// src/pages/Contact.jsx
import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const observerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    guests: "1 Guest",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      dates: "",
      guests: "1 Guest",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 Heritage Lane, Cultural District",
        "Traditional Village, State 560001",
        "India",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@devarmane.com", "bookings@devarmane.com"],
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: ["24/7 Available", "Check-in: 2:00 PM", "Check-out: 11:00 AM"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background" data-testid="contact-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title text-5xl md:text-6xl font-bold mb-6" data-testid="contact-page-title">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-page-subtitle">
              Ready to experience the warmth of Devar Mane? Get in touch with us to plan your perfect stay
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-xl fade-in" data-testid="contact-form-container">
              <h2 className="section-title text-2xl font-bold mb-6" data-testid="contact-form-title">
                Send us a Message
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="+91 98765 43210"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    value={formData.dates}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="Check-in to Check-out"
                    data-testid="input-dates"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    data-testid="select-guests"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5+ Guests">5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="Tell us about your travel plans or any special requirements..."
                    data-testid="textarea-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-lg font-semibold text-lg"
                  data-testid="button-submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 fade-in">
              <div className="bg-card p-8 rounded-2xl shadow-xl" data-testid="contact-info-container">
                <h2 className="section-title text-2xl font-bold mb-6" data-testid="contact-info-title">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                      <item.icon className="text-primary text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold mb-1" data-testid={`contact-info-title-${index}`}>
                          {item.title}
                        </h3>
                        <div className="text-muted-foreground">
                          {item.details.map((detail, detailIndex) => (
                            <p key={detailIndex} data-testid={`contact-info-detail-${index}-${detailIndex}`}>
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-xl" data-testid="social-links-container">
                <h3 className="section-title text-xl font-bold mb-4" data-testid="social-links-title">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-opacity-80 transition-colors"
                      aria-label={social.label}
                      data-testid={`social-link-${social.label.toLowerCase()}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-xl" data-testid="quick-booking-container">
                <h3 className="section-title text-xl font-bold mb-4" data-testid="quick-booking-title">
                  Quick Booking
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="quick-booking-description">
                  For immediate reservations, call us directly or WhatsApp us for quick responses.
                </p>
                <div className="flex space-x-4">
                  <button className="btn-primary px-6 py-3 rounded-lg font-semibold flex items-center" data-testid="button-call-now">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </button>
                  <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-opacity-90 transition-colors" data-testid="button-whatsapp">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 fade-in" data-testid="map-section">
            <div className="bg-card p-8 rounded-2xl shadow-xl">
              <h2 className="section-title text-2xl font-bold mb-6 text-center" data-testid="map-title">
                Find Us
              </h2>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center" data-testid="map-placeholder">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Map integration available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50" data-testid="success-message">
          <div className="flex items-center">
            <span className="mr-2">✅</span>
            <div>
              <h3 className="font-semibold">Message Sent!</h3>
              <p>Thank you for your message! We will get back to you soon.</p>
            </div>
            <button
              onClick={() => setShowMessage(false)}
              className="ml-4 text-white hover:text-gray-200"
              data-testid="close-message"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
