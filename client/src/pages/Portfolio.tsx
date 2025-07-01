import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Shirt, 
  Building, 
  Palette, 
  Shapes, 
  FileText, 
  Sprout,
  Car,
  Cpu,
  Apple,
  Pill
} from "lucide-react";

const chemicalSectors = [
  {
    title: "Textile Chemicals",
    description: "Advanced chemical solutions for textile processing, dyeing, and finishing operations. Our comprehensive range includes dyes, pigments, auxiliaries, and specialty chemicals.",
    icon: Shirt,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Textile Dyes", "Finishing Agents", "Bleaching Chemicals", "Sizing Agents"],
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Construction Chemicals",
    description: "High-performance additives for concrete, adhesives, and building materials. Engineered to enhance durability, strength, and performance of construction projects.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Concrete Admixtures", "Waterproofing Chemicals", "Adhesives", "Sealants"],
    color: "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400"
  },
  {
    title: "Paint & Coatings",
    description: "Innovative chemicals for paint formulation, pigments, and protective coatings. Solutions that enhance color, durability, and performance characteristics.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Paint Additives", "Pigments", "Resins", "Coating Agents"],
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
  },
  {
    title: "Ceramic Chemicals",
    description: "Specialized chemicals for ceramic processing, glazing, and surface treatments. Formulated to enhance ceramic properties and manufacturing efficiency.",
    icon: Shapes,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Glazing Agents", "Ceramic Binders", "Surface Treatments", "Firing Aids"],
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
  },
  {
    title: "Paper Mill Chemicals",
    description: "Comprehensive chemicals for pulp processing, bleaching, and paper production. Solutions that improve paper quality, strength, and production efficiency.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Pulping Chemicals", "Bleaching Agents", "Paper Additives", "Coating Chemicals"],
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  },
  {
    title: "Agriculture Chemicals",
    description: "Sustainable agricultural solutions including fertilizers and crop protection chemicals. Designed to enhance crop yield while protecting the environment.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Fertilizers", "Pesticides", "Growth Regulators", "Soil Conditioners"],
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  }
];

const applications = [
  {
    industry: "Automotive",
    description: "Chemical solutions for automotive manufacturing and maintenance",
    icon: Car,
    applications: ["Surface Treatments", "Adhesives", "Lubricants", "Cleaning Agents"]
  },
  {
    industry: "Electronics",
    description: "Specialized chemicals for electronic component manufacturing",
    icon: Cpu,
    applications: ["PCB Chemicals", "Cleaning Solvents", "Protective Coatings", "Etching Solutions"]
  },
  {
    industry: "Food Processing",
    description: "Food-grade chemicals for processing and preservation",
    icon: Apple,
    applications: ["Preservatives", "Processing Aids", "Cleaning Chemicals", "Quality Enhancers"]
  },
  {
    industry: "Pharmaceuticals",
    description: "High-purity chemicals for pharmaceutical applications",
    icon: Pill,
    applications: ["API Intermediates", "Excipients", "Solvents", "Catalysts"]
  }
];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Our Portfolio - Ribison Chemicals | Chemical Sectors & Solutions";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-ribison-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ribison-dark dark:text-white mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-ribison-accent">Chemical Sectors</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive chemical solutions across diverse industries, delivering excellence and innovation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chemical Sectors */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-ribison-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {chemicalSectors.map((sector, index) => (
              <motion.div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ribison-dark/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <sector.icon className="w-6 h-6 text-ribison-accent mr-3" />
                    <h3 className="text-xl font-heading font-bold text-white">{sector.title}</h3>
                  </div>
                  <p className="text-gray-200 text-sm mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.products.slice(0, 2).map((product, idx) => (
                      <span key={idx} className="text-xs bg-ribison-accent/20 text-ribison-accent px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                    {sector.products.length > 2 && (
                      <span className="text-xs bg-gray-600/20 text-gray-300 px-2 py-1 rounded">
                        +{sector.products.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sectors */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-ribison-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ribison-dark dark:text-white mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Sector <span className="text-ribison-accent">Details</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our comprehensive range of chemical products and their applications
            </motion.p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {chemicalSectors.map((sector, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Card className="h-full bg-white dark:bg-gray-800">
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 ${sector.color} rounded-full flex items-center justify-center mr-4`}>
                          <sector.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-ribison-dark dark:text-white">{sector.title}</h3>
                      </div>
                      
                      <p className="text-ribison-body dark:text-gray-300 leading-relaxed mb-6">{sector.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-heading font-semibold text-ribison-dark dark:text-white mb-3">Key Products:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {sector.products.map((product, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-ribison-accent rounded-full mr-2"></div>
                              <span className="text-ribison-body dark:text-gray-300 text-sm">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="bg-ribison-accent hover:bg-ribison-accent/90">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-ribison-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ribison-dark dark:text-white mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Industry <span className="text-ribison-accent">Applications</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our chemical solutions serve various industries with specialized applications
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-ribison-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ribison-dark dark:text-white mb-2">{app.industry}</h3>
                    <p className="text-ribison-body dark:text-gray-300 text-sm mb-4">{app.description}</p>
                    <div className="space-y-1">
                      {app.applications.map((application, idx) => (
                        <div key={idx} className="text-xs text-ribison-body dark:text-gray-300">
                          • {application}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ribison-neutral-900 dark:bg-ribison-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Custom <span className="text-ribison-accent">Chemical Solutions</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team of experts can develop tailored chemical solutions to meet your specific industry requirements.
          </motion.p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-ribison-accent hover:bg-ribison-accent/90">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ribison-dark">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
