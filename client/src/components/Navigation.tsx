import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location === "/";
    }
    return location.startsWith(path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/98 dark:bg-ribison-neutral-900/98 backdrop-blur-md shadow-lg dark:shadow-ribison-xl border-b border-ribison-neutral-200 dark:border-ribison-neutral-700"
          : "bg-background/90 dark:bg-ribison-neutral-900/90 backdrop-blur-md"
      )}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 xs:h-18 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 xs:space-x-3 hover:scale-105 transition-transform duration-300 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative p-1">
              <div className="h-10 xs:h-12 sm:h-14 lg:h-16 flex items-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Ribison Chemicals Logo" 
                  className="h-8 xs:h-10 sm:h-12 lg:h-14 w-auto"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={cn(
                    "nav-link relative py-2 px-1",
                    "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-ribison-primary after:left-0 after:bottom-0 after:transition-all after:duration-300",
                    isActivePath(item.href)
                      ? "nav-link-active after:w-full"
                      : "hover:after:w-full"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button 
                asChild 
                className="bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-semibold text-sm lg:text-base py-2 lg:py-3 px-3 lg:px-4 rounded-lg transition-all duration-300 shadow-ribison hover:shadow-ribison-md group"
              >
                <a href="tel:+917777942233" className="flex items-center">
                  <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 group-hover:animate-pulse" />
                  <span className="hidden sm:inline">Call Now</span>
                  <span className="sm:hidden">Call</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-ribison-neutral-700 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-400"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[320px] bg-background border-ribison-neutral-200 dark:border-ribison-neutral-700"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8 pt-4">
                    <div className="flex items-center">
                      <img 
                        src="/assets/logo.png" 
                        alt="Ribison Chemicals Logo" 
                        className="h-10 w-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={cn(
                          "text-base font-medium transition-all duration-200 py-4 px-4 rounded-lg",
                          isActivePath(item.href)
                            ? "text-ribison-primary dark:text-ribison-primary-400 bg-ribison-primary-50 dark:bg-ribison-primary-900/20"
                            : "text-ribison-neutral-700 dark:text-ribison-neutral-300 hover:text-ribison-primary dark:hover:text-ribison-primary-400 hover:bg-ribison-neutral-100 dark:hover:bg-ribison-neutral-800"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Button 
                      asChild 
                      className="w-full bg-ribison-primary hover:bg-ribison-primary-600 dark:bg-ribison-primary-500 dark:hover:bg-ribison-primary-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-ribison hover:shadow-ribison-md group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a href="tel:+917777942233" className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}