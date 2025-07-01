import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  DollarSign, 
  Award, 
  Lightbulb, 
  Truck, 
  Handshake, 
  Leaf,
  Beaker,
  BadgeCheck,
  Settings,
  Headphones,
  Globe,
  Shield,
  Check
} from "lucide-react";

const services = [
  {
    icon: DollarSign,
    title: "Cost-Effective Manufacturing",
    description: "Our commitment to cost-effective manufacturing processes is reflected in operational excellence, continuous improvement, and adaptability to changing market conditions.",
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
  },
  {
    icon: Award,
    title: "Superior Quality Control",
    description: "Our quality control program includes regular testing of raw materials, in-process testing, and final product testing with strict adherence to standard operating procedures.",
    color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Lightbulb,
    title: "Innovative Product Development",
    description: "We differentiate ourselves through innovative solutions, maintaining a leading position by providing tailored and efficient chemical solutions for evolving customer needs.",
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  },
  {
    icon: Truck,
    title: "Efficient Supply Chain",
    description: "Our efficient supply chain management enables quick response to changes in customer demand or market conditions, providing greater flexibility and agility.",
    color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
  },
  {
    icon: Handshake,
    title: "Strong Customer Relationships",
    description: "Our commitment to strong customer relationships is reflected in our core values and is ingrained in our company culture for lasting partnerships.",
    color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "We implement strict quality control and safety protocols to ensure environmental safety, staying up-to-date with the latest regulations and best practices.",
    color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with understanding your specific chemical requirements and industry needs."
  },
  {
    step: "02",
    title: "Analysis",
    description: "Our experts analyze your requirements and recommend the most suitable chemical solutions."
  },
  {
    step: "03",
    title: "Customization",
    description: "We customize our chemical formulations to meet your exact specifications and quality standards."
  },
  {
    step: "04",
    title: "Production",
    description: "Manufacturing begins with strict quality control measures and environmental safety protocols."
  },
  {
    step: "05",
    title: "Quality Testing",
    description: "Comprehensive testing ensures all products meet our high standards before delivery."
  },
  {
    step: "06",
    title: "Delivery & Support",
    description: "Timely delivery with ongoing technical support and customer service excellence."
  }
];

const capabilities = [
  {
    title: "Research & Development",
    description: "State-of-the-art R&D facilities for continuous innovation",
    icon: Beaker
  },
  {
    title: "Quality Assurance",
    description: "ISO certified quality management systems",
    icon: BadgeCheck
  },
  {
    title: "Custom Formulations",
    description: "Tailored chemical solutions for specific applications",
    icon: Settings
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and consulting services",
    icon: Headphones
  },
  {
    title: "Global Distribution",
    description: "Worldwide shipping and logistics capabilities",
    icon: Globe
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with international chemical regulations",
    icon: Shield
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - Ribison Chemicals | Chemical Manufacturing Excellence";
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
              Why Choose <span className="text-ribison-accent">Ribison</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We excel in delivering exceptional chemical solutions through our commitment to excellence and innovation
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="service-card bg-white dark:bg-gray-800 shadow-lg border-0 h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-ribison-dark dark:text-white mb-4">{service.title}</h3>
                    <p className="text-ribison-body dark:text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-ribison-accent">Process</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A systematic approach to delivering superior chemical solutions from concept to delivery
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-ribison-accent rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-heading font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-ribison-dark dark:text-white mb-4">{step.title}</h3>
                <p className="text-ribison-body dark:text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Our <span className="text-ribison-accent">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive capabilities that enable us to serve diverse chemical industry needs
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-ribison-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-ribison-dark dark:text-white mb-4">{capability.title}</h3>
                    <p className="text-ribison-body dark:text-gray-300 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-ribison-neutral-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-ribison-dark dark:text-white mb-4 lg:mb-6">
                Quality <span className="text-ribison-accent">Standards</span>
              </h2>
              <p className="text-lg sm:text-xl text-ribison-body dark:text-gray-300 mb-6 lg:mb-8">
                Our commitment to quality is unwavering. Every product undergoes rigorous testing and quality 
                assurance processes to ensure it meets the highest industry standards.
              </p>
              
              <div className="space-y-6">
                {[
                  "ISO 9001:2015 Quality Management System",
                  "Environmental Management ISO 14001",
                  "Occupational Health & Safety Standards",
                  "International Chemical Safety Guidelines",
                  "Continuous Quality Improvement Programs"
                ].map((standard, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-ribison-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-ribison-body dark:text-gray-300">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Quality Control Laboratory" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-ribison-neutral-900 dark:bg-ribison-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 sm:mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Experience <span className="text-ribison-gold">Excellence</span>?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let our expert team help you find the perfect chemical solutions for your business needs.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-ribison-accent hover:bg-ribison-accent/90 text-white w-full sm:w-auto">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-300 text-gray-200 hover:bg-white hover:text-ribison-dark w-full sm:w-auto">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
