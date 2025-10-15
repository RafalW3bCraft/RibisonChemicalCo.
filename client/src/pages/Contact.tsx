import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaPhone,
  FaPaperPlane,
  FaSpinner,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaDirections,
  FaEnvelope,
  FaClock,
  FaBuilding
} from "react-icons/fa";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100084773440476&mibextid=ZbWKwL",
    icon: FaFacebookF,
    label: "Facebook",
    color: "hover:bg-blue-600 dark:hover:bg-blue-500"
  },
  {
    href: "https://instagram.com/ribison_chemicals?igshid=ZDdkNTZiNTM=",
    icon: FaInstagram,
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500"
  },
  {
    href: "https://www.linkedin.com/in/ribison-chemicals-company-608b0a33",
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "hover:bg-blue-700 dark:hover:bg-blue-600"
  },
  {
    href: "https://twitter.com/RibisonChem?t=mD8pCjEwNK7AFjYVqs7lZQ&s=09",
    icon: FaTwitter,
    label: "Twitter",
    color: "hover:bg-sky-500 dark:hover:bg-sky-400"
  },
  {
    href: "tel:+917777942233",
    icon: FaPhone,
    label: "Phone",
    color: "hover:bg-ribison-green dark:hover:bg-ribison-green-400"
  }
];

export default function Contact() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - Ribison Chemicals | Get In Touch";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      sector: "",
      message: "",
      saveInfo: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setLocation("/thank-you");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  useEffect(() => {
    document.title = "Contact Ribison Chemicals Company | Premium Chemical Manufacturing Solutions in Gujarat, India";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Contact Ribison Chemicals Company for premium industrial chemical solutions in Gujarat, India. ISO certified manufacturer specializing in Construction, Textile, Paint, Ceramic, Paper Mill & Agriculture chemicals. Call +91 7777942233 or visit our Wankaner facility. Expert chemical consultation available.';
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'contact ribison chemicals, chemical manufacturer gujarat, industrial chemicals morbi, wankaner chemical company, construction chemicals supplier, textile chemicals india, paint chemicals manufacturer, ceramic chemicals gujarat, paper mill chemicals, agriculture chemicals, chemical consultation, ISO certified chemical company, chemical solutions india, ribison chemicals contact number, chemical factory gujarat';
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = keywords;
      document.head.appendChild(keywordsMeta);
    }

    document.documentElement.lang = 'en-IN';

    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (!existingSchema || !existingSchema.textContent?.includes('ContactPage')) {
      const schema = document.createElement('script');
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Ribison Chemicals Company",
        "description": description,
        "url": window.location.href,
        "mainEntity": {
          "@type": "Organization",
          "name": "Ribison Chemicals Company",
          "url": "https://ribison-chemicals.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7777942233",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Hindi", "Gujarati"],
            "areaServed": "IN"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "75, Star Plaza Complex, 27NH",
            "addressLocality": "Wankaner",
            "addressRegion": "Gujarat",
            "postalCode": "363621",
            "addressCountry": "IN"
          }
        }
      });
      document.head.appendChild(schema);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-ribison-neutral-50 via-white to-ribison-primary-50 dark:from-ribison-neutral-900 dark:via-ribison-neutral-800 dark:to-ribison-neutral-900">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ribison-primary/5 via-transparent to-ribison-gold/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.1)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.05)_0%,transparent_50%)]"></div>
        <div className="container-responsive relative z-10">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <motion.div
              className="inline-flex items-center px-3 xs:px-4 py-2 bg-gradient-to-r from-ribison-primary/10 to-ribison-gold/10 rounded-full mb-4 xs:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaBuilding className="text-ribison-primary mr-2 text-sm xs:text-base" />
              <span className="text-xs xs:text-sm font-medium text-ribison-primary dark:text-ribison-primary-300">Industry Leading Chemical Solutions</span>
            </motion.div>
            <motion.h1 
              className="text-responsive-3xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-4 xs:mb-6 leading-tight px-4 xs:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In <span className="bg-gradient-to-r from-ribison-primary to-ribison-gold bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-responsive-base text-ribison-neutral-600 dark:text-ribison-neutral-300 max-w-3xl mx-auto leading-relaxed px-4 xs:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to discuss your chemical needs? Contact our expert team for personalized solutions and cutting-edge chemical innovations.
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white dark:bg-ribison-neutral-900 shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-ribison-primary to-ribison-primary-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">Address</h4>
                        <p className="text-ribison-neutral-600 dark:text-ribison-neutral-300 leading-relaxed">
                          75, Star Plaza Complex, 27NH<br />
                          Wankaner, Morbi, India - 363621
                        </p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-ribison-green to-ribison-green-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">Phone Numbers</h4>
                        <div className="space-y-1">
                          <a href="tel:+917777942233" className="block text-ribison-neutral-600 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-300 transition-colors duration-200">
                            +91 7777942233
                          </a>
                          <a href="tel:+919574008982" className="block text-ribison-neutral-600 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-300 transition-colors duration-200">
                            +91 9574008982
                          </a>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-ribison-gold to-ribison-gold-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">Email</h4>
                        <a href="mailto:info@ribison.com" className="text-ribison-neutral-600 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-300 transition-colors duration-200">
                          info@ribison.com
                        </a>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex items-start group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                        <FaClock className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">Business Hours</h4>
                        <div className="text-ribison-neutral-600 dark:text-ribison-neutral-300 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p className="text-sm text-ribison-neutral-500 dark:text-ribison-neutral-400">Sunday: Closed</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="mt-8 pt-8 border-t border-ribison-neutral-200 dark:border-ribison-neutral-700">
                    <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-4">Follow Us</h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((social) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-12 h-12 bg-ribison-primary rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                            aria-label={social.label}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-ribison-neutral-900 p-8 rounded-2xl shadow-xl border border-ribison-neutral-200 dark:border-ribison-neutral-700 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-ribison-primary/5 to-ribison-gold/5 rounded-xl -z-10"></div>
                <h3 className="text-2xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-6">Send Us a Message</h3>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-ribison-neutral-900">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className="form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-ribison-dark">Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              {...field} 
                              className="form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-ribison-dark">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="+91 XXXXX XXXXX" 
                              {...field}
                              value={field.value || ""}
                              className="form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-ribison-dark">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Company name" 
                              {...field}
                              value={field.value || ""}
                              className="form-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="sector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-ribison-dark">Industry Sector</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                          <FormControl>
                            <SelectTrigger className="form-input">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="textile">Textile</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="paint">Paint & Coatings</SelectItem>
                            <SelectItem value="ceramic">Ceramic</SelectItem>
                            <SelectItem value="paper">Paper Mill</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-ribison-dark">Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6}
                            placeholder="Tell us about your chemical requirements..." 
                            {...field} 
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="saveInfo"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <Label className="text-sm text-ribison-body">
                            Save my information for faster contact in the future
                          </Label>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-ribison-primary to-ribison-gold hover:from-ribison-primary-600 hover:to-ribison-gold-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
          
          {/* Google Maps Integration */}
          <motion.div 
            className="mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-ribison-neutral-900 shadow-xl border border-ribison-neutral-200 dark:border-ribison-neutral-700 overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-ribison-primary to-ribison-gold rounded-lg flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100">Find Us</h3>
                </div>
                <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg border border-ribison-neutral-200 dark:border-ribison-neutral-600 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5!2d70.969620!3d22.623518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM3JzI0LjYiTiA3MMKwNTgnMTAuNiJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ribison Chemicals Location - Star Plaza Complex, Wankaner, Morbi"
                    onError={(e) => {
                      const target = e.target as HTMLIFrameElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.map-fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  ></iframe>
                  <div className="map-fallback hidden absolute inset-0 bg-gradient-to-br from-ribison-neutral-100 to-ribison-neutral-200 dark:from-ribison-neutral-700 dark:to-ribison-neutral-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      <FaMapMarkerAlt className="text-4xl text-ribison-primary mb-4 mx-auto" />
                      <h4 className="text-lg font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">
                        Map Loading...
                      </h4>
                      <p className="text-ribison-neutral-600 dark:text-ribison-neutral-300 text-sm mb-4">
                        Star Plaza Complex, Wankaner, Morbi<br />
                        Gujarat 363621, India
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <a 
                          href="https://maps.google.com/?q=22.623518,70.969620"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 text-sm text-ribison-primary bg-ribison-primary-50 hover:bg-ribison-primary-100 rounded-lg transition-colors duration-200"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Open in Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-6 bg-gradient-to-br from-ribison-neutral-50 to-ribison-neutral-100 dark:from-ribison-neutral-800 dark:to-ribison-neutral-700 rounded-xl border border-ribison-neutral-200 dark:border-ribison-neutral-600">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-ribison-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-ribison-neutral-900 dark:text-ribison-neutral-100 mb-2">Our Location</h4>
                      <p className="text-ribison-neutral-600 dark:text-ribison-neutral-300 text-sm leading-relaxed">
                        75, Star Plaza Complex, 27NH<br />
                        Wankaner, Morbi, Gujarat<br />
                        India - 363621
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                        <motion.a 
                          href="https://maps.google.com/?q=22.623518,70.969620+(Star+Plaza+Complex,+Wankaner,+Morbi,+Gujarat)"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 text-sm text-ribison-primary dark:text-ribison-primary-300 bg-ribison-primary-50 dark:bg-ribison-primary-900/20 hover:bg-ribison-primary-100 dark:hover:bg-ribison-primary-900/30 rounded-lg transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View in Google Maps
                        </motion.a>
                        <motion.a 
                          href="https://maps.google.com/maps/dir/?api=1&destination=22.623518,70.969620"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 text-sm text-ribison-green dark:text-ribison-green-300 bg-ribison-green-50 dark:bg-ribison-green-900/20 hover:bg-ribison-green-100 dark:hover:bg-ribison-green-900/30 rounded-lg transition-all duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaDirections className="mr-2" />
                          Get Directions
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
