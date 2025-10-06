// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { Wifi, Utensils, Car, Star, MapPin } from "lucide-react";

export default function Home({ onPageChange }) {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const rooms = [
    { name: "Heritage Room", description: "Traditional charm with modern amenities", price: "₹2,500/night", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Garden View", description: "Peaceful retreat overlooking lush gardens", price: "₹3,000/night", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Deluxe Suite", description: "Spacious suite with premium facilities", price: "₹4,000/night", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
    { name: "Family Room", description: "Perfect for families and group stays", price: "₹5,500/night", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" },
  ];

  const nearbyPlaces = [
    { name: "Ancient Temple", description: "Sacred heritage site with stunning architecture", distance: "2 km away", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
    { name: "Spice Plantation", description: "Guided tours through aromatic spice gardens", distance: "5 km away", image: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
    { name: "Mystic Falls", description: "Breathtaking waterfall perfect for nature walks", distance: "8 km away", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
    { name: "Local Market", description: "Vibrant marketplace with local crafts and foods", distance: "3 km away", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
    { name: "Valley Viewpoint", description: "Panoramic views of rolling hills and valleys", distance: "12 km away", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
    { name: "Heritage Center", description: "Explore traditional arts and cultural exhibits", distance: "6 km away", image: "https://images.unsplash.com/photo/1544735716/392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", location: "Traveler from UK", rating: 5, comment: "Devar Mane truly felt like a home away from home. The warmth of the hosts and the authentic experiences made our stay unforgettable.", initial: "S" },
    { name: "Rajesh Patel", location: "Family from Mumbai", rating: 5, comment: "The hospitality was exceptional, and the traditional meals were absolutely delicious. We'll definitely be back!", initial: "R" },
    { name: "Maria Garcia", location: "Solo Traveler", rating: 5, comment: "A perfect blend of tradition and comfort. The rooms were clean, the location peaceful, and the hosts incredibly friendly.", initial: "M" },
  ];

  return (
    <div>
      <HeroBanner onPageChange={onPageChange} />

      {/* ----------  About Section  ---------- */}
      <section className="py-20 bg-background" data-testid="home-about-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Cozy traditional homestay interior"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="about-image"
              />
            </div>

            <div className="fade-in">
              <h2 className="section-title text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">
                About Devar Mane
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description-1">
                Nestled in the heart of tradition, Devar Mane offers an authentic homestay experience
                that blends cultural heritage with modern comfort. Our family has been welcoming
                guests for generations, creating memories that last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="about-description-2">
                From traditional cuisine prepared with love to comfortable accommodations designed
                for your peace, every detail at Devar Mane reflects our commitment to making you
                feel at home.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-muted-foreground" data-testid="amenity-wifi">
                  <Wifi className="text-primary text-xl mr-3" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center text-muted-foreground" data-testid="amenity-meals">
                  <Utensils className="text-primary text-xl mr-3" />
                  <span>Home Cooked Meals</span>
                </div>
                <div className="flex items-center text-muted-foreground" data-testid="amenity-parking">
                  <Car className="text-primary text-xl mr-3" />
                  <span>Free Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------  Rooms Section  (only part changed)  ---------- */}
      <section className="py-20 bg-muted" data-testid="home-rooms-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6" data-testid="rooms-title">
              Our Comfortable Rooms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="rooms-subtitle">
              Each room is thoughtfully designed to provide the perfect blend of comfort and authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="room-card card-hover bg-card rounded-xl overflow-hidden shadow-lg fade-in"
                data-testid={`room-card-${index}`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                  data-testid={`room-image-${index}`}
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2" data-testid={`room-name-${index}`}>
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`room-description-${index}`}>
                    {room.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold" data-testid={`room-price-${index}`}>
                      {room.price}
                    </span>
                    {/* 👇 single change: navigate to Rooms page */}
                    <button
                      onClick={() => onPageChange("rooms")}
                      className="btn-primary px-4 py-2 rounded-lg text-sm"
                      data-testid={`room-details-button-${index}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------  Nearby Places Section  ---------- */}
      <section className="py-20 bg-background" data-testid="home-nearby-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6" data-testid="nearby-title">
              Explore Nearby
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="nearby-subtitle">
              Discover amazing places and experiences just minutes away from Devar Mane
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="card-hover bg-card rounded-xl overflow-hidden shadow-lg fade-in"
                data-testid={`nearby-place-${index}`}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                  data-testid={`nearby-image-${index}`}
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2" data-testid={`nearby-name-${index}`}>
                    {place.name}
                  </h3>
                  <p className="text-muted-foreground mb-3" data-testid={`nearby-description-${index}`}>
                    {place.description}
                  </p>
                  <div className="flex items-center text-sm text-accent" data-testid={`nearby-distance-${index}`}>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{place.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------  Testimonials Section  ---------- */}
      <section className="py-20 bg-muted" data-testid="home-testimonials-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6" data-testid="testimonials-title">
              Guest Experiences
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="testimonials-subtitle">
              What our guests say about their stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg fade-in"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex mb-4" data-testid={`testimonial-rating-${index}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic" data-testid={`testimonial-comment-${index}`}>
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground" data-testid={`testimonial-location-${index}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}