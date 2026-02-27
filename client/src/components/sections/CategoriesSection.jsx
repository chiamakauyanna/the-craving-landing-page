import burger from "../../assets/images/food-img14(1).png";
import suya from "../../assets/images/food-img34.png";
import dessert from "../../assets/images/food-img2.png";
import smoothie from "../../assets/images/food-img31.png";
import pizza from "../../assets/images/food-img3.jpg";
import chicken from "../../assets/images/chicken.jpg";
import smallchops from "../../assets/images/small-chops.png";
import sharwarma from "../../assets/images/food-img25.png";

const categories = [
  { id: 1, name: "Burgers", image: burger },
  { id: 2, name: "Pizza", image: pizza },
  { id: 3, name: "Fried Chicken", image: chicken },
  { id: 4, name: "Shawarma", image: sharwarma },
  { id: 5, name: "Small Chops", image: smallchops },
  { id: 6, name: "Suya", image: suya },
  { id: 7, name: "Smoothie", image: smoothie },
  { id: 8, name: "Dessert", image: dessert },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="mt-20 px-6 lg:px-20 text-white">
      <h2 className="font-heading text-center text-3xl font-bold xl:text-5xl">
        What Are You <span className="text-accent">Craving?</span>
      </h2>

      <div className="mt-20 grid grid-cols-3 gap-8 lg:grid-cols-4 xl:grid-cols-8 items-center justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group flex flex-col items-center gap-3 cursor-pointer"
          >
            <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent transition-all duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div></div>
            <p className="text-sm xl:text-base font-semibold group-hover:text-accent text-center font-heading">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
