import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import FeaturedMenuSection from "./components/sections/FeaturedMenuSection";
import AboutSection from "./components/sections/AboutSection";
import PromoBanner from "./components/sections/PromoBanner";
import Footer from "./components/sections/Footer";
import TestimonialsSection from "./components/sections/TestimonialSection";
import BookingSection from "./components/sections/BookingSection";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedMenuSection />
      <AboutSection />
      <PromoBanner />
      <TestimonialsSection/>
      <BookingSection/>
      <Footer />
    </div>
  );
};

export default App;
