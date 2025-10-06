import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import "./Header.css"; 

export default function Header({ onPageChange, currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Rooms", page: "rooms" },
    { name: "Contact", page: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-card shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('home')} 
            className="flex items-center group"
          >
            <Home className="text-primary text-2xl mr-3 group-hover:scale-110 transition-transform" />
            <h1 className="font-serif text-2xl font-bold text-foreground">
              Devar Mane
            </h1>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className={`nav-item font-medium px-3 py-2 rounded-md text-sm transition-colors ${
                    currentPage === item.page
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                className={`nav-item block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  currentPage === item.page
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-primary"
                }`}
                data-testid={`mobile-nav-${item.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}