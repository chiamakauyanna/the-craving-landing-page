import foodImg from "../../assets/images/food-img36.png";
import deliveryImg from "../../assets/images/delivery.png";
import Button from "../common/Button";
import AnimateOnScroll from "../common/AnimateOnScroll";

const PromoBanner = () => {
  return (
    <section id="promo" className="py-20 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Card */}
        <AnimateOnScroll direction="left" className="h-full">
          <div className="h-full relative overflow-hidden rounded-3xl bg-secondary p-6 md:p-10 flex flex-col justify-between">
            <div className="lg:max-w-[75%]">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white xl:text-4xl">
                Choose Your <span className="text-accent">Favorite</span> Food
              </h3>
              <p className="mt-4 text-textLight leading-relaxed font-semibold">
                Browse through our wide selection of burgers, pizza, shawarma,
                small chops and more. Something for every craving, every time.
              </p>
            </div>
            <Button text="View Menu" className="mt-8 w-fit text-primary" />

            {/* Decorative food image — hidden on mobile */}
            <img
              src={foodImg}
              alt="food"
              className="hidden lg:block absolute right-0 bottom-0 w-40 xl:w-48 object-cover opacity-80"
            />
          </div>
        </AnimateOnScroll>

        {/* Right Card */}
        <AnimateOnScroll direction="right" className="h-full">
          <div className="h-full relative overflow-hidden rounded-3xl bg-accent p-6 md:p-10 flex flex-col justify-between">
            <div className="lg:max-w-[75%]">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white xl:text-4xl">
                Order Online and Get Fast Delivery
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed font-semibold">
                Place your order from anywhere and we will bring it straight to
                your door. Hot, fresh and right on time.
              </p>
            </div>
            <Button
              text="Order Now"
              className="mt-8 bg-primary w-fit text-accent hover:bg-secondary"
            />

            {/* Decorative food image — hidden on mobile */}
            <img
              src={deliveryImg}
              alt="delivery"
              className="hidden lg:block absolute right-0 bottom-0 w-40 xl:w-48 object-cover opacity-80"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PromoBanner;
