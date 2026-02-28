import HeroBg from "../../assets/images/food-img-bg.png";
import AnimateOnScroll from "../common/AnimateOnScroll";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center gap-12 pt-40"
    >
      {/* Heading and subtext */}
      <AnimateOnScroll direction="up" mountOnly>
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold xl:text-7xl">
            Feed <span className="text-accent">The Craving</span>
          </h1>
          <p className="mt-4 font-body text-textLight xl:text-lg px-15">
            Your favorite foods, all in one place. Order now and taste the
            difference.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Buttons */}
      <AnimateOnScroll direction="up" mountOnly delay={0.2}>
        <div className="flex gap-4">
          <a href="#booking">
            <Button text="Order Now" className="text-primary" />
          </a>
          <a href="#menu">
            <Button
              text="View Menu"
              className="bg-primary border-accent text-accent border hover:bg-secondary"
            />
          </a>
        </div>
      </AnimateOnScroll>

      {/* Image */}
      <AnimateOnScroll
        direction="up"
        mountOnly
        delay={0.4}
        className="w-full flex justify-center"
      >
        <img
          src={HeroBg}
          alt="hero food"
          className="w-full max-w-2xl object-cover drop-shadow-2xl drop-shadow-accent"
        />
      </AnimateOnScroll>

    </section>
  );
};

export default HeroSection;