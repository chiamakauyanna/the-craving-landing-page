import MenuCard from "../ui/MenuCard";
import burger from "../../assets/images/food-img33.png";
import pizza from "../../assets/images/food-img18.png";
import chickenandchips from "../../assets/images/food-img8.png";
import sharwarma from "../../assets/images/sharwarma.jpg";
import Button from "../common/Button";

const menuItems = [
  {
    id: 1,
    name: "Smash Burger",
    price: "3,500",
    image: burger,
    tag: "Popular",
  },
  { id: 2, name: "Pepperoni Pizza", price: "5,200", image: pizza, tag: "New" },
  {
    id: 3,
    name: "Chicken and chips",
    price: "5,800",
    image: chickenandchips,
    tag: null,
  },
  {
    id: 4,
    name: "Chicken Shawarma",
    price: "3,500",
    image: sharwarma,
    tag: "Popular",
  },
];

const FeaturedMenuSection = () => {
  return (
    <section id="menu" className="py-34 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-white xl:text-5xl">
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
          className="border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 bg-primary"
        />
      </div>
    </section>
  );
};

export default FeaturedMenuSection;
