// src/components/HeroBanner.jsx
import { useEffect, useRef } from "react";

export default function HeroBanner() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeElements = entry.target.querySelectorAll(".fade-in");
            fadeElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = heroRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="hero-banner"
    >
      <div className="hero-overlay absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1
          className="font-serif text-5xl md:text-7xl font-bold mb-6 fade-in"
          data-testid="hero-title"
        >
          Welcome to Devar Mane
        </h1>

        <p
          className="text-xl md:text-2xl mb-8 text-gray-200 fade-in"
          data-testid="hero-subtitle"
        >
          Feel Like Home Away From Home
        </p>

        <p
          className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto fade-in"
          data-testid="hero-description"
        >
          Experience the warmth of traditional hospitality with modern comfort.
          Your perfect homestay awaits.
        </p>

        <button
          className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold  hover:shadow-lg transition duration-100 bg-orange-500"
          data-testid="hero-cta-button"
        >
          Book Your Stay
          
        </button>
      </div>
    </section>
  );
}