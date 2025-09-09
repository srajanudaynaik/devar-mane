// src/pages/About.jsx
import { useEffect, useRef } from "react";
import { Heart, Leaf, Users } from "lucide-react";

export default function About() {
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

  const features = [
    {
      icon: Heart,
      title: "Authentic Hospitality",
      description:
        "Experience genuine warmth and care that comes from the heart",
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      description:
        "Eco-friendly practices that respect our environment and traditions",
    },
    {
      icon: Users,
      title: "Cultural Exchange",
      description:
        "Share stories, learn traditions, and create lasting friendships",
    },
  ];

  const family = [
    {
      name: "Krishnan Uncle",
      role: "Host & Storyteller",
      description:
        "The patriarch of our family, known for his fascinating stories and warm welcome",
      initial: "K",
    },
    {
      name: "Lakshmi Aunty",
      role: "Chef & Cultural Guide",
      description:
        "Master of traditional cuisine and keeper of family recipes",
      initial: "L",
    },
    {
      name: "Arjun",
      role: "Activity Coordinator",
      description:
        "Your guide to local adventures and hidden gems in the area",
      initial: "A",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-background" data-testid="about-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-16 fade-in">
            <h1 className="section-title text-5xl md:text-6xl font-bold mb-6" data-testid="about-page-title">
              About Devar Mane
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-page-subtitle">
              Our story of hospitality, tradition, and creating memorable experiences for travelers
            </p>
          </div>

          {/* Heritage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <h2 className="section-title text-3xl font-bold mb-6" data-testid="heritage-title">
                Our Heritage
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="heritage-description-1">
                Devar Mane has been a symbol of warm hospitality for over three
                generations. What started as a family home has evolved into a
                cherished homestay that preserves the essence of traditional
                living while embracing modern comfort.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="heritage-description-2">
                Our name, "Devar Mane," translates to "God's House" in the local
                language, reflecting our belief that every guest is a blessing. We take pride in sharing our culture, our stories, and our home with travelers from around the world.
              </p>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Traditional heritage architecture of Devar Mane"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="heritage-image"
              />
            </div>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Traditional cooking and family hospitality"
                className="rounded-2xl shadow-xl w-full h-auto"
                data-testid="philosophy-image"
              />
            </div>
            <div className="fade-in order-1 lg:order-2">
              <h2 className="section-title text-3xl font-bold mb-6" data-testid="philosophy-title">
                Our Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="philosophy-description-1">
                At Devar Mane, we believe that travel is not just about visiting
                places, but about experiencing cultures, forming connections, and
                creating lasting memories. Our philosophy centers around treating every guest as family.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="philosophy-description-2">
                From the moment you arrive, you become part of our extended
                family. We share our meals, our traditions, and our local
                knowledge to ensure your stay is not just comfortable, but truly enriching.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-muted rounded-2xl p-12 mb-20 fade-in">
            <h2 className="section-title text-3xl font-bold text-center mb-12" data-testid="features-title">
              What Makes Us Special
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center" data-testid={`feature-${index}`}>
                  <feature.icon className="text-primary text-4xl mb-4 mx-auto" />
                  <h3 className="font-serif text-xl font-semibold mb-3" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet the Family */}
          <div className="text-center fade-in">
            <h2 className="section-title text-3xl font-bold mb-6" data-testid="family-title">
              Meet Our Family
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="family-subtitle">
              The heart of Devar Mane lies in our family's dedication to making
              your stay memorable. Get to know the people who will welcome you
              home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {family.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg"
                  data-testid={`family-member-${index}`}
                >
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                    {member.initial}
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2" data-testid={`family-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground mb-3" data-testid={`family-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`family-description-${index}`}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}