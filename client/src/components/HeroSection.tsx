import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen hero-landscape android-sm:min-h-[80vh] android-md:min-h-[85vh] android-lg:min-h-[90vh] tablet:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ribison-primary via-ribison-blue to-ribison-gold dark:from-ribison-neutral-900 dark:via-ribison-neutral-800 dark:to-ribison-neutral-900"></div>

      <div className="absolute inset-0 bg-black/15 android-sm:bg-black/18 android-md:bg-black/20 android-lg:bg-black/22 tablet:bg-black/20 dark:bg-black/30 dark:android-sm:bg-black/35 dark:android-md:bg-black/40 dark:android-lg:bg-black/42 dark:tablet:bg-black/40 backdrop-blur-sm android-sm:backdrop-blur android-md:backdrop-blur-md"></div>

      <div className="hidden sm:block absolute top-20 left-10 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-white/10 dark:bg-ribison-primary/20 rounded-full animate-float"></div>
      <div className="hidden md:block absolute top-32 right-20 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-ribison-blue/20 dark:bg-ribison-blue/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="hidden lg:block absolute bottom-40 left-1/4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-ribison-gold/20 dark:bg-ribison-gold/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="hidden xl:block absolute top-1/2 right-1/3 w-6 sm:w-8 h-6 sm:h-8 bg-ribison-primary/15 dark:bg-ribison-primary/25 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

      <div className="relative z-10 android-container">
        <div className="max-w-5xl mx-auto text-center android-md:text-left sm:text-left android-spacing">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white/20 dark:bg-ribison-neutral-800/90 backdrop-blur-md rounded-full text-sm sm:text-base font-semibold text-white dark:text-ribison-neutral-100 border border-white/30 dark:border-ribison-neutral-600/50 shadow-lg">
              🧪 Global Chemical Innovation Leader
            </span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white dark:text-ribison-neutral-100 mb-6 sm:mb-8 leading-tight"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <span className="block mb-2">Transforming</span>
            <span className="block mb-2 text-ribison-blue-300 dark:text-ribison-blue-400">Industries</span>
            <span className="block mb-2">Through</span>
            <span className="block text-ribison-gold dark:text-ribison-primary-400">Chemistry</span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-white/90 dark:text-ribison-neutral-200 mb-8 sm:mb-10 max-w-3xl mx-auto sm:mx-0 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pioneering sustainable chemical solutions for Construction, Textile, Paint, Ceramic, Paper Mill & Agriculture industries worldwide
          </motion.p>

          <motion.div 
            className="flex flex-col gap-4 items-stretch justify-center 
                       /* Mobile devices - always vertical */
                       xs:flex-col xs:gap-4 xs:items-stretch
                       android-sm:flex-col android-sm:gap-4 android-sm:items-stretch
                       android-md:flex-col android-md:gap-5 android-md:items-stretch
                       android-lg:flex-col android-lg:gap-5 android-lg:items-stretch
                       /* iPhone specific */
                       portrait:flex-col portrait:gap-4 portrait:items-stretch
                       /* Tablet and larger - horizontal */
                       tablet:flex-row tablet:gap-6 tablet:items-center tablet:justify-start
                       lg:flex-row lg:gap-6 lg:items-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              asChild 
              className="bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-bold 
                         text-base xs:text-base android-sm:text-base android-md:text-lg android-lg:text-lg tablet:text-lg lg:text-lg
                         px-6 xs:px-6 android-sm:px-6 android-md:px-7 android-lg:px-8 tablet:px-8 lg:px-8
                         py-3 xs:py-3 android-sm:py-3 android-md:py-4 android-lg:py-4 tablet:py-4 lg:py-4
                         rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                         w-full tablet:w-auto lg:w-auto
                         /* Touch optimization */
                         active:scale-95 touch-manipulation select-none
                         /* Minimum touch target */
                         min-h-[48px] android-sm:min-h-[50px] android-md:min-h-[52px]"
            >
              <Link href="/portfolio" className="flex items-center justify-center">
                🚀 Explore Solutions
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-ribison-primary dark:border-ribison-neutral-300 dark:text-ribison-neutral-100 dark:hover:bg-ribison-neutral-100 dark:hover:text-ribison-primary font-bold 
                         text-base xs:text-base android-sm:text-base android-md:text-lg android-lg:text-lg tablet:text-lg lg:text-lg
                         px-6 xs:px-6 android-sm:px-6 android-md:px-7 android-lg:px-8 tablet:px-8 lg:px-8
                         py-3 xs:py-3 android-sm:py-3 android-md:py-4 android-lg:py-4 tablet:py-4 lg:py-4
                         rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                         w-full tablet:w-auto lg:w-auto
                         /* Touch optimization */
                         active:scale-95 touch-manipulation select-none
                         /* Minimum touch target */
                         min-h-[48px] android-sm:min-h-[50px] android-md:min-h-[52px]"
            >
              <Link href="/contact" className="flex items-center justify-center">
                📞 Get In Touch
              </Link>
            </Button>
          </motion.div>

          <motion.div 
            className="mt-6 xs:mt-8 sm:mt-10 md:mt-14 lg:mt-16
                       /* Mobile-first grid layout */
                       grid grid-cols-1 gap-4
                       /* Small mobile devices */
                       xs:grid-cols-1 xs:gap-5
                       /* Android small to medium */
                       android-sm:grid-cols-1 android-sm:gap-4
                       android-md:grid-cols-1 android-md:gap-5
                       android-lg:grid-cols-1 android-lg:gap-5
                       /* iPhone portrait */
                       portrait:grid-cols-1 portrait:gap-4
                       /* Tablet and larger - 3 columns */
                       sm:grid-cols-1 md:grid-cols-3
                       tablet:grid-cols-3 tablet:gap-6
                       lg:grid-cols-3 lg:gap-8
                       /* Container sizing */
                       max-w-7xl mx-auto 
                       /* Responsive padding */
                       px-4 xs:px-5 sm:px-6 md:px-4 lg:px-6 xl:px-0
                       /* Mobile landscape - horizontal layout for better space usage */
                       landscape:max-md:grid-cols-3 landscape:max-md:gap-3 landscape:max-md:px-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="group bg-white/25 dark:bg-ribison-neutral-800/60 backdrop-blur-md 
                           /* Responsive padding */
                           p-5 xs:p-6 sm:p-6 md:p-5 lg:p-6 xl:p-8
                           /* Android specific padding */
                           android-sm:p-5 android-md:p-6 android-lg:p-6
                           /* Responsive border radius */
                           rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-xl lg:rounded-2xl
                           border border-white/50 dark:border-ribison-neutral-600/60 
                           shadow-lg sm:shadow-xl hover:shadow-2xl 
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:bg-white/30 dark:hover:bg-ribison-neutral-800/70
                           /* Enhanced touch optimizations */
                           active:scale-[0.98] active:shadow-md
                           touch-manipulation select-none cursor-pointer
                           /* Responsive minimum heights */
                           min-h-[140px] xs:min-h-[150px] sm:min-h-[160px] 
                           android-sm:min-h-[140px] android-md:min-h-[150px] android-lg:min-h-[160px]
                           md:min-h-[180px] lg:min-h-[190px]
                           /* Mobile landscape - compact design */
                           landscape:max-md:p-4 landscape:max-md:min-h-[120px] landscape:max-md:rounded-lg
                           /* Improved accessibility */
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
>
              <div className="flex items-center 
                             mb-4 xs:mb-5 sm:mb-4 md:mb-4 lg:mb-5
                             /* Always center on mobile, left-align on larger screens */
                             flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row
                             /* Mobile landscape - row layout */
                             landscape:max-md:flex-row landscape:max-md:mb-3">
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-16 sm:h-16 
                               md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18
                               /* Android specific sizing */
                               android-sm:w-14 android-sm:h-14 android-md:w-15 android-md:h-15 android-lg:w-16 android-lg:h-16
                               bg-ribison-secondary dark:bg-ribison-primary 
                               rounded-full flex items-center justify-center 
                               mr-0 lg:mr-4 mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-0
                               shadow-lg group-hover:shadow-xl
                               transition-all duration-300
                               flex-shrink-0
                               /* Mobile landscape optimizations */
                               landscape:max-md:w-12 landscape:max-md:h-12 landscape:max-md:mr-3 landscape:max-md:mb-0">
                  <i className="fas fa-award text-ribison-neutral-900 dark:text-white 
                                text-xl xs:text-2xl sm:text-2xl md:text-xl lg:text-2xl
                                android-sm:text-lg android-md:text-xl android-lg:text-2xl
                                landscape:max-md:text-base"></i>
                </div>
                <h3 className="font-heading font-bold 
                               text-xl xs:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl
                               android-sm:text-lg android-md:text-xl android-lg:text-xl
                               text-white dark:text-ribison-neutral-100 
                               leading-tight text-center lg:text-left
                               landscape:max-md:text-sm landscape:max-md:text-left">
                  ISO Certified
                </h3>
              </div>
              <p className="text-base xs:text-base sm:text-lg md:text-sm lg:text-base
                           android-sm:text-sm android-md:text-base android-lg:text-base
                           text-white/90 dark:text-ribison-neutral-200 
                           leading-relaxed text-readable 
                           text-center lg:text-left
                           landscape:max-md:text-xs landscape:max-md:text-left landscape:max-md:leading-snug">
                International quality standards and certifications
              </p>
            </div>

            <div className="group bg-white/25 dark:bg-ribison-neutral-800/60 backdrop-blur-md 
                           /* Responsive padding */
                           p-5 xs:p-6 sm:p-6 md:p-5 lg:p-6 xl:p-8
                           /* Android specific padding */
                           android-sm:p-5 android-md:p-6 android-lg:p-6
                           /* Responsive border radius */
                           rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-xl lg:rounded-2xl
                           border border-white/50 dark:border-ribison-neutral-600/60 
                           shadow-lg sm:shadow-xl hover:shadow-2xl 
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:bg-white/30 dark:hover:bg-ribison-neutral-800/70
                           /* Enhanced touch optimizations */
                           active:scale-[0.98] active:shadow-md
                           touch-manipulation select-none cursor-pointer
                           /* Responsive minimum heights */
                           min-h-[140px] xs:min-h-[150px] sm:min-h-[160px] 
                           android-sm:min-h-[140px] android-md:min-h-[150px] android-lg:min-h-[160px]
                           md:min-h-[180px] lg:min-h-[190px]
                           /* Mobile landscape - compact design */
                           landscape:max-md:p-4 landscape:max-md:min-h-[120px] landscape:max-md:rounded-lg
                           /* Improved accessibility */
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
              <div className="flex items-center 
                             mb-4 xs:mb-5 sm:mb-4 md:mb-4 lg:mb-5
                             /* Always center on mobile, left-align on larger screens */
                             flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row
                             /* Mobile landscape - row layout */
                             landscape:max-md:flex-row landscape:max-md:mb-3">
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-16 sm:h-16 
                               md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18
                               /* Android specific sizing */
                               android-sm:w-14 android-sm:h-14 android-md:w-15 android-md:h-15 android-lg:w-16 android-lg:h-16
                               bg-ribison-primary dark:bg-ribison-blue 
                               rounded-full flex items-center justify-center 
                               mr-0 lg:mr-4 mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-0
                               shadow-lg group-hover:shadow-xl
                               transition-all duration-300
                               flex-shrink-0
                               /* Mobile landscape optimizations */
                               landscape:max-md:w-12 landscape:max-md:h-12 landscape:max-md:mr-3 landscape:max-md:mb-0">
                  <i className="fas fa-leaf text-white 
                                text-xl xs:text-2xl sm:text-2xl md:text-xl lg:text-2xl
                                android-sm:text-lg android-md:text-xl android-lg:text-2xl
                                landscape:max-md:text-base"></i>
                </div>
                <h3 className="font-heading font-bold 
                               text-xl xs:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl
                               android-sm:text-lg android-md:text-xl android-lg:text-xl
                               text-white dark:text-ribison-neutral-100 
                               leading-tight text-center lg:text-left
                               landscape:max-md:text-sm landscape:max-md:text-left">
                  Eco-Friendly
                </h3>
              </div>
              <p className="text-base xs:text-base sm:text-lg md:text-sm lg:text-base
                           android-sm:text-sm android-md:text-base android-lg:text-base
                           text-white/90 dark:text-ribison-neutral-200 
                           leading-relaxed text-readable 
                           text-center lg:text-left
                           landscape:max-md:text-xs landscape:max-md:text-left landscape:max-md:leading-snug">
                Sustainable and environmentally responsible solutions
              </p>
            </div>

            <div className="group bg-white/25 dark:bg-ribison-neutral-800/60 backdrop-blur-md 
                           /* Responsive padding */
                           p-5 xs:p-6 sm:p-6 md:p-5 lg:p-6 xl:p-8
                           /* Android specific padding */
                           android-sm:p-5 android-md:p-6 android-lg:p-6
                           /* Responsive border radius */
                           rounded-xl xs:rounded-xl sm:rounded-2xl md:rounded-xl lg:rounded-2xl
                           border border-white/50 dark:border-ribison-neutral-600/60 
                           shadow-lg sm:shadow-xl hover:shadow-2xl 
                           transition-all duration-300 ease-out
                           hover:-translate-y-1 hover:bg-white/30 dark:hover:bg-ribison-neutral-800/70
                           /* Enhanced touch optimizations */
                           active:scale-[0.98] active:shadow-md
                           touch-manipulation select-none cursor-pointer
                           /* Responsive minimum heights */
                           min-h-[140px] xs:min-h-[150px] sm:min-h-[160px] 
                           android-sm:min-h-[140px] android-md:min-h-[150px] android-lg:min-h-[160px]
                           md:min-h-[180px] lg:min-h-[190px]
                           /* Mobile landscape - compact design */
                           landscape:max-md:p-4 landscape:max-md:min-h-[120px] landscape:max-md:rounded-lg
                           /* Improved accessibility */
                           focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent">
              <div className="flex items-center 
                             mb-4 xs:mb-5 sm:mb-4 md:mb-4 lg:mb-5
                             /* Always center on mobile, left-align on larger screens */
                             flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row
                             /* Mobile landscape - row layout */
                             landscape:max-md:flex-row landscape:max-md:mb-3">
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-16 sm:h-16 
                               md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18
                               /* Android specific sizing */
                               android-sm:w-14 android-sm:h-14 android-md:w-15 android-md:h-15 android-lg:w-16 android-lg:h-16
                               bg-ribison-accent dark:bg-ribison-gold 
                               rounded-full flex items-center justify-center 
                               mr-0 lg:mr-4 mb-3 xs:mb-3 sm:mb-3 md:mb-3 lg:mb-0
                               shadow-lg group-hover:shadow-xl
                               transition-all duration-300
                               flex-shrink-0
                               /* Mobile landscape optimizations */
                               landscape:max-md:w-12 landscape:max-md:h-12 landscape:max-md:mr-3 landscape:max-md:mb-0">
                  <i className="fas fa-shipping-fast text-white 
                                text-xl xs:text-2xl sm:text-2xl md:text-xl lg:text-2xl
                                android-sm:text-lg android-md:text-xl android-lg:text-2xl
                                landscape:max-md:text-base"></i>
                </div>
                <h3 className="font-heading font-bold 
                               text-xl xs:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl
                               android-sm:text-lg android-md:text-xl android-lg:text-xl
                               text-white dark:text-ribison-neutral-100 
                               leading-tight text-center lg:text-left
                               landscape:max-md:text-sm landscape:max-md:text-left">
                  Fast Delivery
                </h3>
              </div>
              <p className="text-base xs:text-base sm:text-lg md:text-sm lg:text-base
                           android-sm:text-sm android-md:text-base android-lg:text-base
                           text-white/90 dark:text-ribison-neutral-200 
                           leading-relaxed text-readable 
                           text-center lg:text-left
                           landscape:max-md:text-xs landscape:max-md:text-left landscape:max-md:leading-snug">
                Reliable and efficient supply chain network
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatType: "loop"
        }}
      >
        <div className="bg-black/20 dark:bg-ribison-neutral-800/50 backdrop-blur-sm p-3 rounded-full border border-white/20 dark:border-ribison-neutral-600/30">
          <i className="fas fa-chevron-down text-white dark:text-ribison-neutral-200 text-lg"></i>
        </div>
      </motion.div>


    </section>
  );
}