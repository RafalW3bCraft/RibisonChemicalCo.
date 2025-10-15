import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link focus-visible-enhanced">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1" role="main">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={ThankYou} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "Ribison Chemicals - Leading Chemical Manufacturer";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ribison Chemicals - Global leader in Construction, Textile, Paint, Ceramic, Paper Mill & Agriculture Chemicals. Committed to sustainable chemical solutions since 2022.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ribison Chemicals - Global leader in Construction, Textile, Paint, Ceramic, Paper Mill & Agriculture Chemicals. Committed to sustainable chemical solutions since 2022.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="ribison-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
