// src/pages/Rooms.jsx
import { useEffect, useRef } from "react";
import {
  Bed,
  Wifi,
  Snowflake,
  Bath,
  TreePine,
  Coffee,
  Tv,
  Sofa,
  Waves,
  GlassWater,
  Users,
  Gamepad2,
  Baby,
  Shield,
  Fan,
  ConciergeBell,
  Car,
  Utensils,
  Leaf,
} from "lucide-react";

export default function Rooms() {
  const observerRef = useRef(null);

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

  const rooms = [
    {
      name: "Heritage Room",
      description:
        "Step into a world of timeless elegance. Our Heritage Room features traditional wooden furniture, handwoven textiles, and antique décor that tells the story of generations past.",
      price: "₹2,500",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      amenities: [
        { icon: Bed, text: "Queen Size Bed" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Snowflake, text: "Air Conditioning" },
        { icon: Bath, text: "Private Bathroom" },
      ],
    },
    {
      name: "Garden View Room",
      description:
        "Wake up to the sight of our beautiful gardens through large windows. This room combines modern comfort with nature's tranquility, perfect for a peaceful retreat.",
      price: "₹3,000",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      amenities: [
        { icon: Bed, text: "King Size Bed" },
        { icon: TreePine, text: "Garden View" },
        { icon: Coffee, text: "Tea/Coffee Maker" },
        { icon: Tv, text: "Smart TV" },
      ],
    },
    {
      name: "Deluxe Suite",
      description:
        "Our most spacious accommodation features a separate sitting area, premium amenities, and enhanced privacy. Perfect for extended stays or special occasions.",
      price: "₹4,000",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      amenities: [
        { icon: Bed, text: "King Size Bed" },
        { icon: Sofa, text: "Sitting Area" },
        { icon: Waves, text: "Mini Spa Kit" },
        { icon: GlassWater, text: "Welcome Refreshments" },
      ],
    },
    {
      name: "Family Room",
      description:
        "Designed for families and groups, this spacious room features multiple sleeping arrangements and a common area where everyone can gather and create memories together.",
      price: "₹5,500",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      amenities: [
        { icon: Bed, text: "Multiple Beds" },
        { icon: Users, text: "Sleeps 6" },
        { icon: Gamepad2, text: "Entertainment Area" },
        { icon: Baby, text: "Child-Friendly" },
      ],
    },
  ];

  const allAmenities = [
    { icon: Wifi, text: "Free WiFi" },
    { icon: Snowflake, text: "Air Conditioning" },
    { icon: Utensils, text: "Complimentary Breakfast" },
    { icon: Car, text: "Free Parking" },
    { icon: ConciergeBell, text: "24/7 Service" },
    { icon: Shield, text: "Safe & Secure" },
    { icon: Fan, text: "Daily Housekeeping" },
    { icon: Leaf, text: "Eco-Friendly" },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background" data-testid="rooms-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title text-5xl md:text-6xl font-bold mb-6" data-testid="rooms-page-title">
              Our Rooms
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="rooms-page-subtitle">
              Choose from our carefully designed rooms, each offering a unique blend of comfort and tradition
            </p>
          </div>

          {/* Room Details */}
          <div className="space-y-20">
            {rooms.map((room, index) => (
              <div key={index} className="fade-in" data-testid={`room-detail-${index}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                    <img
                      src={room.image}
                      alt={room.name}
                      className="rounded-2xl shadow-xl w-full h-auto"
                      data-testid={`room-detail-image-${index}`}
                    />
                  </div>
                  <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                    <h2 className="section-title text-3xl font-bold mb-6" data-testid={`room-detail-title-${index}`}>
                      {room.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`room-detail-description-${index}`}>
                      {room.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {room.amenities.map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center text-muted-foreground" data-testid={`room-amenity-${index}-${amenityIndex}`}>
                          <amenity.icon className="text-primary text-lg mr-3" />
                          <span>{amenity.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-2xl font-bold" data-testid={`room-detail-price-${index}`}>
                        {room.price}/night
                      </span>
                      <button className="btn-primary px-6 py-3 rounded-lg font-semibold" data-testid={`room-book-button-${index}`}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Rooms Include */}
          <div className="mt-20 fade-in">
            <div className="bg-muted rounded-2xl p-12">
              <h2 className="section-title text-3xl font-bold text-center mb-12" data-testid="all-amenities-title">
                All Rooms Include
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {allAmenities.map((amenity, index) => (
                  <div key={index} className="text-center" data-testid={`all-amenity-${index}`}>
                    <amenity.icon className="text-primary text-3xl mb-3 mx-auto" />
                    <p className="text-muted-foreground font-medium">{amenity.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}