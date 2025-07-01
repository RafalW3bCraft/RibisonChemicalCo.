import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { User, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  date: string;
  content: string;
  avatar?: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  date, 
  content, 
  avatar, 
  rating,
  delay = 0 
}: TestimonialCardProps) {
  // Generate consistent avatar colors based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-ribison-primary',
      'bg-ribison-blue', 
      'bg-ribison-gold',
      'bg-ribison-green',
      'bg-gradient-to-br from-ribison-primary to-ribison-blue',
      'bg-gradient-to-br from-ribison-blue to-ribison-gold'
    ];
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="bg-white dark:bg-ribison-neutral-800 shadow-ribison-lg hover:shadow-ribison-xl border border-ribison-neutral-200 dark:border-ribison-neutral-700 h-full transition-all duration-300 hover:scale-105">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 shadow-ribison ${getAvatarColor(name)}`}>
              {avatar ? (
                <img 
                  src={avatar} 
                  alt={`${name} - Customer testimonial`}
                  className="w-full h-full rounded-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-white font-bold text-lg">${getInitials(name)}</span>`;
                    }
                  }}
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {getInitials(name)}
                </span>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-bold text-ribison-neutral-900 dark:text-ribison-neutral-100 text-lg">
                {name}
              </h4>
              <p className="text-ribison-neutral-600 dark:text-ribison-neutral-400 text-sm font-medium">
                {role}
              </p>
              <p className="text-ribison-neutral-500 dark:text-ribison-neutral-500 text-xs">
                {date}
              </p>
            </div>
          </div>
          
          <blockquote className="text-ribison-neutral-700 dark:text-ribison-neutral-300 leading-relaxed mb-6 text-readable italic">
            "{content}"
          </blockquote>
          
          <div className="flex text-ribison-gold dark:text-ribison-gold-400" aria-label={`Rating: ${rating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-ribison-neutral-300 dark:text-ribison-neutral-600'}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
