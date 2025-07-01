import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100084773440476&mibextid=ZbWKwL",
    icon: Facebook,
    label: "Facebook"
  },
  {
    href: "https://instagram.com/ribison_chemicals?igshid=ZDdkNTZiNTM=",
    icon: Instagram,
    label: "Instagram"
  },
  {
    href: "https://www.linkedin.com/in/ribison-chemicals-company-608b0a33",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://twitter.com/RibisonChem?t=mD8pCjEwNK7AFjYVqs7lZQ&s=09",
    icon: Twitter,
    label: "Twitter"
  },
  {
    href: "tel:+917777942233",
    icon: Phone,
    label: "Phone"
  }
];

export default function Footer() {
  return (
    <footer className="bg-ribison-neutral-900 dark:bg-ribison-neutral-900 text-white dark:text-ribison-neutral-100 py-responsive border-t border-ribison-neutral-700 dark:border-ribison-neutral-800">
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6">
              {/* Logo and Company Name */}
              <div className="flex flex-col xs:flex-row xs:items-center space-y-4 xs:space-y-0 xs:space-x-4 mb-6">
                <img 
                  src="/assets/logo.png"
                  alt="Ribison Chemicals Company - Leading Chemical Innovation" 
                  className="h-14 xs:h-16 w-auto object-contain"
                  loading="lazy"
                />
                <div className="text-center xs:text-left">
                  <h3 className="text-xl xs:text-2xl font-heading font-bold text-ribison-primary dark:text-ribison-primary-400">
                    Ribison
                  </h3>
                  <p className="text-base xs:text-lg font-medium text-ribison-neutral-400 dark:text-ribison-neutral-500 -mt-1">
                    Chemicals
                  </p>
                </div>
              </div>
              
              {/* Company Description */}
              <p className="text-ribison-neutral-300 dark:text-ribison-neutral-300 leading-relaxed mb-6 max-w-lg text-sm xs:text-base">
                Ribison Chemical Co. is a leading chemical manufacturer, dedicated to providing 
                high-quality products and excellent customer service to clients around the world.
              </p>
              
              {/* Social Media Links */}
              <div>
                <h5 className="text-sm font-semibold text-ribison-primary dark:text-ribison-primary-400 mb-3">
                  Follow Us
                </h5>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 xs:w-12 xs:h-12 bg-ribison-primary dark:bg-ribison-primary-600 rounded-xl flex items-center justify-center hover:bg-ribison-primary-600 dark:hover:bg-ribison-primary-500 transition-all duration-300 hover:scale-110 shadow-ribison hover:shadow-ribison-lg group"
                        aria-label={`Follow us on ${social.label}`}
                      >
                        <IconComponent className="h-4 w-4 xs:h-5 xs:w-5 text-white group-hover:text-white transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-lg font-heading font-semibold mb-6 text-ribison-primary dark:text-ribison-primary-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ribison-neutral-300 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-400 transition-colors duration-300 text-sm xs:text-base inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="min-w-0">
            <h4 className="text-lg font-heading font-semibold mb-6 text-ribison-primary dark:text-ribison-primary-400">
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-ribison-primary dark:text-ribison-primary-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-ribison-neutral-300 dark:text-ribison-neutral-300 text-sm leading-relaxed">
                  <p>75, Star Plaza Complex</p>
                  <p>27NH, Wankaner, Morbi</p>
                  <p>India - 363621</p>
                </div>
              </div>
              
              {/* Phone Numbers */}
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-ribison-primary dark:text-ribison-primary-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-ribison-neutral-300 dark:text-ribison-neutral-300 text-sm space-y-1">
                  <a 
                    href="tel:+917777942233" 
                    className="hover:text-ribison-primary dark:hover:text-ribison-primary-400 transition-colors duration-300 block"
                  >
                    +91 7777942233
                  </a>
                  <a 
                    href="tel:+919574008982" 
                    className="hover:text-ribison-primary dark:hover:text-ribison-primary-400 transition-colors duration-300 block"
                  >
                    +91 9574008982
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-ribison-primary dark:text-ribison-primary-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@ribison.com" 
                  className="text-ribison-neutral-300 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-400 transition-colors duration-300 text-sm break-all"
                >
                  info@ribison.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-ribison-neutral-700 dark:border-ribison-neutral-800 mt-8 xs:mt-12 pt-6 xs:pt-8">
          <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center space-y-4 xs:space-y-0">
            <p className="text-ribison-neutral-400 dark:text-ribison-neutral-400 text-xs xs:text-sm text-center xs:text-left">
              © 2024 Ribison Chemicals Company. All rights reserved.
            </p>
            <p className="text-ribison-neutral-400 dark:text-ribison-neutral-400 text-xs xs:text-sm text-center xs:text-right">
              Designed By <a 
                href="https://t.me/RafalW3bCraft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ribison-primary dark:text-ribison-primary-400 font-medium hover:text-ribison-primary-600 dark:hover:text-ribison-primary-300 transition-colors duration-300"
              >
                RafalW3bCraft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}