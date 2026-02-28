import MenuCard from "../ui/MenuCard";
import Button from "../common/Button";
import { menuItems } from "../../data/index";
import AnimateOnScroll from "../common/AnimateOnScroll";

const FeaturedMenuSection = () => {
  return (
    <section id="menu" className="pt-34 px-6 lg:px-20">
      {/* Header */}
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white xl:text-5xl">
            Fan
            <span className="text-accent"> Favorites</span>
          </h2>
        </div>
      </AnimateOnScroll>

      {/* Menu Grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item, index) => (
          <AnimateOnScroll key={item.id} direction="up" delay={index * 0.15}>
            <MenuCard {...item} />
          </AnimateOnScroll>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="mt-12 flex justify-center">
        <Button
          text="View Full Menu"
          className="border border-accent text-accent  bg-primary"
        />
      </div>
    </section>
  );
};

export default FeaturedMenuSection;
