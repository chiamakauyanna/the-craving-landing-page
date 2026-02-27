import HeroBg from "../../assets/images/food-img-bg.png";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center gap-12 pt-30"
    >
      {/* Content on the left */}
      <div className="text-center">
        <h1 className="text-5xl font-bold xl:text-7xl">
          Feed <span className="text-accent"> The Craving</span>
        </h1>
        <p className="mt-4 font-body text-textLight xl:text-lg">
          Your favorite foods, all in one place. Order now and taste the
          difference.
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex gap-4">
        <Button text="Order Now" className="text-primary" />

        <Button
          text=" View Menu"
          className="bg-primary border-accent text-accent border"
        />
      </div>

      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src={HeroBg}
          alt="hero food"
          className="w-full max-w-2xl object-cover drop-shadow-2xl drop-shadow-accent"
        />
      </div>
    </section>
  );
};

export default HeroSection;
