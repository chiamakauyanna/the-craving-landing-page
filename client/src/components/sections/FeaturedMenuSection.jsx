import MenuCard from "../ui/MenuCard";
import Button from "../common/Button";
import { menuItems } from "../../data/index";

const FeaturedMenuSection = () => {
  return (
    <section id="menu" className="py-34 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white xl:text-5xl">
          Fan
          <span className="text-accent"> Favorites</span>
        </h2>
      </div>

      {/* Menu Grid */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            tag={item.tag}
          />
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
