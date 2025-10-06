import { useEffect, useRef } from "react";
import "./HeroBanner.css"; // plain-css mirror of Tailwind

export default function HeroBanner({ onPageChange }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".fade-in")
              .forEach((el, idx) =>
                setTimeout(() => el.classList.add("visible"), idx * 200)
              );
          }
        });
      },
      { threshold: 0.1 }
    );
    const curr = heroRef.current;
    if (curr) observer.observe(curr);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="hero-banner"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 fade-in">
          Welcome to Devar Mane
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 fade-in">
          Feel Like Home Away From Home
        </p>

        <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto fade-in">
          Experience the warmth of traditional hospitality with modern comfort.
          Your perfect homestay awaits.
        </p>
        
        <button
          onClick={() => onPageChange("contact")}
          className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold fade-in hover:shadow-lg transition-all duration-300"
          data-testid="hero-cta-button"
        >
          Book Your Stay
        </button>
      </div>
    </section>
  );
}