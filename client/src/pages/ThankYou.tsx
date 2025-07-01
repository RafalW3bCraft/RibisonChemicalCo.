import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  useEffect(() => {
    document.title = "Thank You - Ribison Chemicals | Message Received";
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-ribison-dark mb-4">
                      Thank You!
                    </h1>
                    <p className="text-xl text-ribison-body">
                      Your message has been sent successfully
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                  >
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h2 className="text-lg font-heading font-semibold text-ribison-dark mb-3">
                        What happens next?
                      </h2>
                      <div className="space-y-3 text-left">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-ribison-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <p className="text-ribison-body text-sm">
                            Our team will review your message within <strong>24 hours</strong>
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-ribison-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <p className="text-ribison-body text-sm">
                            A chemical expert will contact you to discuss your requirements
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-ribison-accent rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <p className="text-ribison-body text-sm">
                            We'll provide customized solutions for your chemical needs
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-lg font-heading font-semibold text-ribison-dark mb-4">
                        Need immediate assistance?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Phone className="w-5 h-5 text-blue-600 mr-2" />
                          <div className="text-center">
                            <p className="text-xs text-blue-600 font-medium">Call us now</p>
                            <a 
                              href="tel:+917777942233" 
                              className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                            >
                              +91 7777942233
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center justify-center p-4 bg-green-50 rounded-lg">
                          <Mail className="w-5 h-5 text-green-600 mr-2" />
                          <div className="text-center">
                            <p className="text-xs text-green-600 font-medium">Email us</p>
                            <a 
                              href="mailto:info@ribison.com" 
                              className="text-sm font-semibold text-green-700 hover:text-green-800"
                            >
                              info@ribison.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center"
                  >
                    <Button asChild size="lg" className="bg-ribison-accent hover:bg-ribison-accent/90">
                      <Link href="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/portfolio">
                        Explore Our Portfolio
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-ribison-dark mb-4">
                While You Wait, Explore More
              </h2>
              <p className="text-lg text-ribison-body">
                Learn more about our chemical solutions and company
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-ribison-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-industry text-ribison-accent text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ribison-dark mb-2">Our Sectors</h3>
                    <p className="text-ribison-body text-sm mb-4">
                      Discover our comprehensive range of chemical solutions across 6 major industries.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/portfolio">View Portfolio</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-cogs text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ribison-dark mb-2">Our Services</h3>
                    <p className="text-ribison-body text-sm mb-4">
                      Learn why customers choose us for quality, innovation, and excellence.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-leaf text-green-600 text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ribison-dark mb-2">About Us</h3>
                    <p className="text-ribison-body text-sm mb-4">
                      Discover our journey, vision, and commitment to sustainable chemical solutions.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/about">Our Story</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
