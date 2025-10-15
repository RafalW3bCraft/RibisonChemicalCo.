import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { motion } from "framer-motion";

const chemicalSectors = [
  {
    title: "Textile Chemicals",
    description: "Advanced chemical solutions for textile processing, dyeing, and finishing",
    icon: "fas fa-tshirt",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Construction Chemicals",
    description: "High-performance additives for concrete, adhesives, and building materials",
    icon: "fas fa-building",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Paint & Coatings",
    description: "Innovative chemicals for paint formulation, pigments, and protective coatings",
    icon: "fas fa-palette",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Ceramic Chemicals",
    description: "Specialized chemicals for ceramic processing, glazing, and surface treatments",
    icon: "fas fa-shapes",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Paper Mill Chemicals",
    description: "Comprehensive chemicals for pulp processing, bleaching, and paper production",
    icon: "fas fa-file-alt",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Agriculture Chemicals",
    description: "Sustainable agricultural solutions including fertilizers and crop protection",
    icon: "fas fa-seedling",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const testimonials = [
  {
    name: "Chris Watson",
    role: "Manufacturing Director",
    date: "Dec 2, 2022",
    content: "Ribison Chemical Company has exceeded my expectations with their exceptional products and outstanding customer service. Their commitment to sustainability is truly impressive and gives me confidence in choosing them as my go-to chemical supplier.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5
  },
  {
    name: "Jane Gyale",
    role: "Operations Manager", 
    date: "Dec 13, 2022",
    content: "I highly recommend Ribison Chemical Company for their outstanding products and unparalleled customer service. Their dedication to sustainability and quality has earned my trust and loyalty as a customer. I am confident in their ability to meet my business needs.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b772b1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    rating: 5
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "Ribison Chemicals - Leading Chemical Manufacturing Company | Premium Industrial Solutions";
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading chemical manufacturing company specializing in premium industrial chemicals, laboratory reagents, and custom chemical solutions. ISO certified with 20+ years of excellence in chemical innovation.');
    }
  }, []);

  return (
    <main className="min-h-screen" role="main">
      <HeroSection />
      
      <StatsSection />
      
      <section className="py-responsive bg-ribison-neutral-50 dark:bg-ribison-neutral-800">
        <div className="container-responsive">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16 spacing-mobile">
            <motion.h2 
              className="text-responsive-2xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About <span className="text-ribison-primary dark:text-ribison-primary-400">Ribison Chemicals</span>
            </motion.h2>
            <motion.p 
              className="text-responsive-base text-ribison-neutral-600 dark:text-ribison-neutral-300 max-w-3xl mx-auto leading-relaxed px-4 xs:px-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Since 2022, we have built a reputation for excellence in the chemical industry, 
              committed to creating sustainable solutions for generations to come.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Ribison Chemicals Laboratory Team" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-ribison-neutral-800 shadow-lg dark:shadow-ribison-lg border-0 dark:border dark:border-ribison-neutral-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-4">Our Foundation</h3>
                  <p className="text-ribison-neutral-700 dark:text-ribison-neutral-300 leading-relaxed mb-4">
                    Founded in 2022, Ribison Chemicals Company is a global leader in Construction Chemicals, 
                    Textile Chemicals, Paint Sector Chemicals, Ceramic Chemicals, Paper Mill Chemicals, 
                    Specialty Chemicals, Minerals Chemicals & Agriculture Chemicals.
                  </p>
                  <p className="text-ribison-neutral-700 dark:text-ribison-neutral-300 leading-relaxed">
                    We have built a comprehensive range of chemical products that meet the needs of various 
                    industries, with our team of experts having extensive knowledge and experience in the field.
                  </p>
                </CardContent>
              </Card>
              
              <Button asChild size="lg" className="bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chemical Sectors Preview */}
      <section className="py-20 bg-white dark:bg-ribison-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our <span className="text-ribison-primary dark:text-ribison-primary-400">Chemical Sectors</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-ribison-neutral-700 dark:text-ribison-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Comprehensive chemical solutions across diverse industries, delivering excellence and innovation
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemicalSectors.map((sector, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-ribison-lg dark:hover:shadow-ribison-2xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ribison-neutral-900/90 dark:from-ribison-neutral-800/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <i className={`${sector.icon} text-ribison-primary dark:text-ribison-primary-400 text-2xl mr-3`}></i>
                    <h3 className="text-xl font-heading font-bold text-white dark:text-ribison-neutral-100">{sector.title}</h3>
                  </div>
                  <p className="text-ribison-neutral-200 dark:text-ribison-neutral-300 text-sm">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-ribison-accent hover:bg-ribison-accent/90">
              <Link href="/portfolio">View All Sectors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-ribison-neutral-50 dark:bg-ribison-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Client <span className="text-ribison-primary dark:text-ribison-primary-400">Testimonials</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-ribison-neutral-700 dark:text-ribison-neutral-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Hear what our satisfied clients say about our chemical solutions and services
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ribison-neutral-900 dark:bg-ribison-neutral-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white dark:text-ribison-neutral-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ready to Start Your <span className="text-ribison-primary dark:text-ribison-primary-400">Chemical Journey</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-ribison-neutral-300 dark:text-ribison-neutral-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Contact our expert team today for personalized chemical solutions that meet your industry needs.
          </motion.p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Button asChild size="lg" className="bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white dark:border-ribison-neutral-400 text-white dark:text-ribison-neutral-200 hover:bg-white hover:text-ribison-neutral-900 dark:hover:bg-ribison-neutral-700 dark:hover:text-ribison-neutral-100 transition-all duration-300">
              <a href="tel:+917777942233">
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
