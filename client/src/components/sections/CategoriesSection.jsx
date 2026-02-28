import { categories } from "../../data/index";
import AnimateOnScroll from "../common/AnimateOnScroll";

const CategoriesSection = () => {
  return (
    <section id="categories" className="mt-20 px-6 lg:px-20 text-white">
      <AnimateOnScroll direction="up">
        <h2 className="font-heading text-center text-2xl md:text-3xl font-bold xl:text-5xl">
          What Are You <span className="text-accent">Craving?</span>
        </h2>
      </AnimateOnScroll>

      <div className="mt-20 grid grid-cols-4 md:grid-cols-6 gap-8 lg:grid-cols-8 items-center justify-items-center">
        {categories.map((category, index) => (
          <AnimateOnScroll key={category.id} direction="up" delay={index * 0.1}>
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
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
