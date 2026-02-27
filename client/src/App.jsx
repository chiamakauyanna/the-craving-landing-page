import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import FeaturedMenuSection from "./components/sections/FeaturedMenuSection";
import AboutSection from "./components/sections/AboutSection";
import PromoBanner from "./components/sections/PromoBanner";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedMenuSection />
      <AboutSection />
      <PromoBanner />
      <Footer />
    </div>
  );
};

export default App;
