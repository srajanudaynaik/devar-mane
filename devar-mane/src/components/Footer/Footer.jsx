// src/components/Footer.jsx
import {
  Home,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const services = [
    "Room Booking",
    "Local Tours",
    "Traditional Meals",
    "Airport Pickup",
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="grid grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center mb-4">
              <Home className="text-primary text-2xl mr-3" />
              <h3 className="font-serif text-xl font-bold">Devar Mane</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Experience authentic hospitality and feel like home away from home.
              Creating memories since generations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary hover:text-opacity-80 transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-opacity-80 transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-opacity-80 transition-colors"
                data-testid="footer-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Home
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  About Us
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Rooms
                </span>
              </li>
              <li>
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service) => (
                <li
                  key={service}
                  data-testid={`footer-service-${service
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center" data-testid="footer-phone">
                <Phone className="h-4 w-4 text-primary mr-2" />
                +91 98765 43210
              </p>
              <p className="flex items-center" data-testid="footer-email">
                <Mail className="h-4 w-4 text-primary mr-2" />
                hello@devarmane.com
              </p>
              <p className="flex items-center" data-testid="footer-address">
                <MapPin className="h-4 w-4 text-primary mr-2" />
                Traditional Village, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p data-testid="footer-copyright">
            &copy; 2024 Devar Mane. All rights reserved. Made with ❤️ for
            travelers who seek authentic experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}