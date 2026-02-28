import aboutImg from "../../assets/images/food-img39.png";
import { FaCheck } from "react-icons/fa";
import { aboutPoints } from "../../data";
import Button from "../common/Button";
import AnimateOnScroll from "../common/AnimateOnScroll";

const AboutSection = () => {
  return (
    <section id="about" className="py-6 md:py-20 px-6 lg:px-20">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        
        {/* Image on the left */}
        <AnimateOnScroll direction="left" className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="about the craving"
            className="w-full rounded-3xl object-cover"
          />
        </AnimateOnScroll>

        {/* Content on the right */}
        <AnimateOnScroll direction="right" className="w-full md:w-1/2">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            OUR STORY
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white xl:text-5xl">
            About <span className="text-accent">The Craving</span>
          </h2>
          <p className="mt-6 text-textLight leading-relaxed xl:text-lg">
            Every item on our menu is made with fresh ingredients and a whole
            lot of love. Whether you are ordering in or dining out, we make
            sure every bite is worth it.
          </p>

          {/* Bullet points */}
          <ul className="mt-6 flex flex-col gap-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs">
                  <FaCheck />
                </span>
                <p className="text-textLight xl:text-lg">{point}</p>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <Button text="Order Now" className="text-primary" />
            <Button
              text="Read More"
              className="border border-accent text-accent bg-primary hover:bg-secondary"
            />
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default AboutSection;