import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Eye, 
  Target, 
  Shield, 
  Leaf, 
  Lightbulb, 
  Handshake, 
  Globe, 
  Award 
} from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - Ribison Chemicals | Leading Chemical Manufacturer";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gray-50 dark:bg-ribison-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 xs:mb-14 sm:mb-16">
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span className="text-orange-500 dark:text-orange-400">Ribison Chemicals</span>
            </motion.h1>
            <motion.p 
              className="text-lg xs:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2022, we have built a reputation for excellence in the chemical industry, 
              committed to creating sustainable solutions for generations to come.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center mb-12 xs:mb-14 sm:mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Ribison Chemicals Laboratory Team" 
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 transition-colors duration-300">
                <CardContent className="p-6 xs:p-8">
                  <h3 className="text-xl xs:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Our Foundation</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    Founded in 2022, Ribison Chemicals Company is a global leader in Construction Chemicals, 
                    Textile Chemicals, Paint Sector Chemicals, Ceramic Chemicals, Paper Mill Chemicals, 
                    Specialty Chemicals, Minerals Chemicals & Agriculture Chemicals.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We have built a comprehensive range of chemical products that meet the needs of various 
                    industries, with our team of experts having extensive knowledge and experience in the field.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 transition-colors duration-300">
                <CardContent className="p-6 xs:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 dark:bg-orange-400 rounded-full flex items-center justify-center mr-4">
                      <Eye className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl xs:text-2xl font-heading font-bold text-gray-900 dark:text-white">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be the leading chemical manufacturer that drives innovation and progress towards a 
                    sustainable future. We aspire to be the trusted partner for our customers, known for 
                    our commitment to operational excellence, customer service, and social responsibility.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 transition-colors duration-300">
                <CardContent className="p-6 xs:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Target className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl xs:text-2xl font-heading font-bold text-gray-900 dark:text-white">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To produce chemical solutions that improve people's lives and protect the environment, 
                    while adhering to the highest standards of quality and safety. We are dedicated to 
                    providing sustainable and innovative products that exceed our customers' expectations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Sustainable Chemical Manufacturing" 
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-white dark:bg-ribison-neutral-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 xs:mb-14 sm:mb-16">
            <motion.h2 
              className="text-3xl xs:text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-orange-500 dark:text-orange-400">Core Values</span>
            </motion.h2>
            <motion.p 
              className="text-lg xs:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The principles that guide our daily operations and long-term strategic decisions
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8">
            {[
              {
                icon: Shield,
                title: "Quality & Safety",
                description: "We maintain the highest standards of quality control and safety protocols in all our operations."
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Environmental responsibility is at the core of our manufacturing processes and product development."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Continuous research and development to create cutting-edge chemical solutions for modern challenges."
              },
              {
                icon: Handshake,
                title: "Customer Focus",
                description: "Building lasting partnerships through exceptional service and customized solutions."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving customers worldwide while maintaining local expertise and support."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for operational excellence in every aspect of our business operations."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardContent className="p-6 xs:p-8">
                    <div className="w-16 h-16 bg-orange-500/10 dark:bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="text-orange-500 dark:text-orange-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg xs:text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-gray-50 dark:bg-ribison-neutral-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 xs:mb-14 sm:mb-16">
            <motion.h2 
              className="text-3xl xs:text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-orange-500 dark:text-orange-400">Journey</span>
            </motion.h2>
            <motion.p 
              className="text-lg xs:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              From our founding to becoming a global leader in chemical manufacturing
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2022",
                title: "Company Founded",
                description: "Ribison Chemicals Company was established with a vision to become a leading chemical manufacturer in India."
              },
              {
                year: "2022",
                title: "First Product Lines",
                description: "Launched our initial range of construction and textile chemicals, establishing our presence in key markets."
              },
              {
                year: "2023",
                title: "Expansion Phase",
                description: "Expanded into paint, ceramic, and paper mill chemicals, broadening our product portfolio significantly."
              },
              {
                year: "2023",
                title: "Quality Certifications",
                description: "Achieved major quality certifications and established rigorous quality control processes."
              },
              {
                year: "2024",
                title: "Global Reach",
                description: "Expanded operations to serve customers worldwide, establishing ourselves as a global chemical supplier."
              }
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                className="flex flex-col sm:flex-row items-start mb-8 xs:mb-10 sm:mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 xs:w-20 xs:h-20 bg-orange-500 dark:bg-orange-400 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
                  <span className="text-white font-heading font-bold text-sm xs:text-base">{milestone.year}</span>
                </div>
                <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <CardContent className="p-4 xs:p-6">
                    <h3 className="text-lg xs:text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-ribison-dark dark:bg-ribison-neutral-900 text-white transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-5xl font-heading font-bold mb-4 xs:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Partner with <span className="text-orange-500 dark:text-orange-400">Excellence</span>
          </motion.h2>
          <motion.p 
            className="text-lg xs:text-xl text-gray-300 dark:text-gray-400 mb-6 xs:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of satisfied customers who trust Ribison Chemicals for their chemical solution needs.
          </motion.p>
          <motion.div 
            className="flex flex-col xs:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 text-white w-full xs:w-auto">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-900 w-full xs:w-auto">
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}