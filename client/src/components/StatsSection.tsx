import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { animateCounter } from "@/lib/utils";

const stats = [
  { target: 500, label: "Happy Clients", suffix: "" },
  { target: 50, label: "Chemical Products", suffix: "" },
  { target: 6, label: "Industry Sectors", suffix: "" },
  { target: 99, label: "Client Satisfaction", suffix: "%" }
];

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            const counters = entry.target.querySelectorAll('.counter');
            counters.forEach((counter, index) => {
              const target = stats[index].target;
              animateCounter(counter as HTMLElement, target, 2000);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-ribison-neutral-900 dark:bg-ribison-neutral-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut",
                type: "tween"
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-ribison-primary dark:text-ribison-primary-400 mb-2 flex items-center justify-center">
                <span className="counter">0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-ribison-neutral-300 dark:text-ribison-neutral-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
