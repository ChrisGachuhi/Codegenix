import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#D4FF00',
          gray: '#F0F0F0'
          
        },
        secondary: {
          DEFAULT: '#4B5563', // Main gray shade
          light: '#9CA3AF',   // Light gray
          dark: '#374151',    // Dark gray
        },
      },
      backgroundImage: {
        herohomedesktop: "url('/Homepage/Landingpagedesktop/BackgroundImage.jpg')",
        serviceshighlightmobile: "url('/Homepage/What we do Mobile/MobileBackground.jpg')",
        serviceshighlightdesktop: "url('/Homepage/What we do Desktop/DesktopBackground.jpg')",
        testimonialmobile: "url('/Homepage/Testimonials Mobile/Image.jpg')",
        testimonialdesktop: "url('/Homepage/Testimonials Desktop/Image.jpg')",
        contactctamobile: "url('/Homepage/Contact Us Mobile/background.jpg')",
        contactctadesktop: "url('/Homepage/Contact Us Desktop/background.jpg')",
  
        webServicesMobile: "url('/Website Devt services/Our services mobile/Background.jpg')",
        webServicesDesktop: "url('/Website Devt services/Our services desktop/Background.jpg')",

        webProcess: "url('/Website Devt services/Our Process Desktop/Background.jpg')",
        ctaMobile: "url('/Website Devt services/Get in touch mobile/Background.jpg')",
        ctaDesktop: "url('/Website Devt services/Get in touch desktop/Background.jpg')",
       

      }
    },
  },
  plugins: [],
} satisfies Config;
