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
        herohomedesktop: "url('/Assets/Homepage/Landing page desktop/Background Image.jpg')",
        serviceshighlightmobile: "url('/Assets/Homepage/What we do Mobile/MobileBackground.jpg')",
        serviceshighlightdesktop: "url('/Assets/Homepage/What we do Desktop/Desktop Background.jpg')",
        testimonialmobile: "url('/Assets/Homepage/Testimonials Mobile/Image.jpg')",
        testimonialdesktop: "url('/Assets/Homepage/Testimonials Desktop/Image.jpg')",
        contactctamobile: "url('/Assets/Homepage/Contact Us Mobile/background.jpg')",
        contactctadesktop: "url('/Assets/Homepage/Contact Us Desktop/background.jpg')",
  
        webServicesMobile: "url('/Assets/Website Devt services/Our services mobile/Background.jpg')",
        webServicesDesktop: "url('/Assets/Website Devt services/Our services desktop/Background.jpg')",

        appDevelopmentMobile: "url('/Assets/Mobile app development services/What we offer mobile/background.jpg')",
        appDevelopmentDesktop: "url('/Assets/Mobile app development services/What we offer desktop/background.jpg')",

        webProcess: "url('/Assets/Website Devt services/Our Process Desktop/Background.jpg')",
        ctaMobile: "url('/Assets/Website Devt services/Get in touch mobile/Background.jpg')",
        ctaDesktop: "url('/Assets/Website Devt services/Get in touch desktop/Background.jpg')",
        footerBackgroundMobile: "url('/Assets/Footer Mobile All pages/Background Image.jpg')",
        footerBackgroundDesktop: "url('/Assets/Footer Desktop All pages/Background Image.jpg')",

        ctaMobileMarketing: "url('/Assets/Digital Marketing services/CTA Mobile/Background.jpg')",
        ctaDesktopMarketing: "url('/Assets/Digital Marketing services/CTA Desktop/Background.jpg')",
        ctaMobileBranding: "url('/Assets/Branding services/CTA mobile/background.jpg')",
        ctaDesktopBranding: "url('/Assets/Branding services/CTA desktop/background.jpg')",
        ctaMobileTraining: "url('/Assets/Training services/Why choose us mobile/background.jpg')",
        ctaDesktopTraining: "url('/Assets/Training services/Why choose us desktop/background.jpg')",
        ctaMobileAppDev: "url('/Assets/Mobile app development services/CTA mobile/background.jpg')",
        ctaDesktopAppDev: "url('/Assets/Mobile app development services/CTA desktop/background.jpg')",
        ctaMobileAbout: "url('/Assets/About Us/Partnerships desktop/image.jpg')",
        ctaDesktopAbout: "url('/Assets/About Us/Partnerships desktop/image.jpg')",


      }
    },
  },
  plugins: [],
} satisfies Config;
