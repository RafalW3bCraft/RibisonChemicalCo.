import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '320px',      // Small phones (iPhone SE, Android compact)
      'sm': '375px',      // Standard phones (iPhone 12/13/14, most Android)
      'md': '390px',      // Large phones (iPhone 14 Pro Max, Android large)
      'lg': '768px',      // Tablets (iPad, Android tablets)
      'xl': '1024px',     // Small laptops
      '2xl': '1280px',    // Large laptops/desktops
      '3xl': '1536px',    // Ultra-wide displays
      '4xl': '1920px',    // 4K displays
      // Device-specific breakpoints
      'iphone-se': '320px',
      'iphone': '375px',
      'iphone-plus': '414px',
      'ipad': '768px',
      'ipad-pro': '1024px',
      'android-sm': '360px',
      'android-md': '412px',
      'android-lg': '432px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Enhanced Ribison Brand Colors for Tailwind
        ribison: {
          primary: {
            50: "var(--ribison-primary-50)",
            100: "var(--ribison-primary-100)",
            200: "var(--ribison-primary-200)",
            300: "var(--ribison-primary-300)",
            400: "var(--ribison-primary-400)",
            500: "var(--ribison-primary-500)",
            600: "var(--ribison-primary-600)",
            700: "var(--ribison-primary-700)",
            800: "var(--ribison-primary-800)",
            900: "var(--ribison-primary-900)",
            DEFAULT: "var(--ribison-primary)",
          },
          blue: {
            50: "var(--ribison-blue-50)",
            100: "var(--ribison-blue-100)",
            200: "var(--ribison-blue-200)",
            300: "var(--ribison-blue-300)",
            400: "var(--ribison-blue-400)",
            500: "var(--ribison-blue-500)",
            600: "var(--ribison-blue-600)",
            700: "var(--ribison-blue-700)",
            800: "var(--ribison-blue-800)",
            900: "var(--ribison-blue-900)",
            DEFAULT: "var(--ribison-blue)",
          },
          gold: {
            50: "var(--ribison-gold-50)",
            100: "var(--ribison-gold-100)",
            200: "var(--ribison-gold-200)",
            300: "var(--ribison-gold-300)",
            400: "var(--ribison-gold-400)",
            500: "var(--ribison-gold-500)",
            600: "var(--ribison-gold-600)",
            700: "var(--ribison-gold-700)",
            800: "var(--ribison-gold-800)",
            900: "var(--ribison-gold-900)",
            DEFAULT: "var(--ribison-gold)",
          },
          green: {
            50: "var(--ribison-green-50)",
            100: "var(--ribison-green-100)",
            200: "var(--ribison-green-200)",
            300: "var(--ribison-green-300)",
            400: "var(--ribison-green-400)",
            500: "var(--ribison-green-500)",
            600: "var(--ribison-green-600)",
            700: "var(--ribison-green-700)",
            800: "var(--ribison-green-800)",
            900: "var(--ribison-green-900)",
            DEFAULT: "var(--ribison-green)",
          },
          neutral: {
            50: "var(--ribison-neutral-50)",
            100: "var(--ribison-neutral-100)",
            200: "var(--ribison-neutral-200)",
            300: "var(--ribison-neutral-300)",
            400: "var(--ribison-neutral-400)",
            500: "var(--ribison-neutral-500)",
            600: "var(--ribison-neutral-600)",
            700: "var(--ribison-neutral-700)",
            800: "var(--ribison-neutral-800)",
            900: "var(--ribison-neutral-900)",
          },
          success: "var(--ribison-success)",
          warning: "var(--ribison-warning)",
          error: "var(--ribison-error)",
          info: "var(--ribison-info)",
          platinum: "var(--ribison-platinum)",
          silver: "var(--ribison-silver)",
          copper: "var(--ribison-copper)",
          steel: "var(--ribison-steel)",
          accent: "var(--ribison-accent)",
          body: "var(--ribison-body)",
          dark: "var(--ribison-dark)",
        },
      },
      fontFamily: {
        sans: "var(--ribison-font-family-sans)",
        heading: "var(--ribison-font-family-heading)",
        display: "var(--ribison-font-family-display)",
        mono: "var(--ribison-font-family-mono)",
      },
      boxShadow: {
        'ribison-sm': "var(--ribison-shadow-sm)",
        'ribison': "var(--ribison-shadow)",
        'ribison-md': "var(--ribison-shadow-md)",
        'ribison-lg': "var(--ribison-shadow-lg)",
        'ribison-xl': "var(--ribison-shadow-xl)",
        'ribison-2xl': "var(--ribison-shadow-2xl)",
        'ribison-inner': "var(--ribison-shadow-inner)",
      },
      backgroundImage: {
        'gradient-primary': "var(--ribison-gradient-primary)",
        'gradient-gold': "var(--ribison-gradient-gold)",
        'gradient-hero': "var(--ribison-gradient-hero)",
        'gradient-dark': "var(--ribison-gradient-dark)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        scaleIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
