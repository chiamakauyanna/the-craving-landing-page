import { useState } from "react";
import Button from "../common/Button";
import InputField from "../common/InputField";
import { bookingInfo } from "../../data";
import AnimateOnScroll from "../common/AnimateOnScroll";

const BookingSection = () => {
  const [activeTab, setActiveTab] = useState("order");

  return (
    <section id="booking" className="py-20 px-6 lg:px-20">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        
        {/* Left Content */}
        <AnimateOnScroll direction="left" className="w-full lg:w-1/2">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            Get In Touch
          </p>
          <h2 className="font-heading mt-3 text-2xl md:text-3xl font-bold text-white xl:text-5xl">
            Dine In <span className="text-accent">or Delivery</span>
          </h2>
          <p className="mt-6 text-textLight leading-relaxed xl:text-lg">
            Whether you want your food delivered hot to your door or prefer to
            dine with us, we have got you covered. Place your order or book a
            table in minutes.
          </p>

          {/* Info */}
          <div className="mt-10 flex flex-col gap-4">
            {bookingInfo.map((info) => (
              <div key={info.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shrink-0">
                  {info.icon}
                </div>
                <p className="text-textLight">{info.text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Right Form */}
        <AnimateOnScroll direction="right" className="w-full lg:w-1/2">
          <div className="bg-secondary rounded-3xl p-8">
            {/* Toggle */}
            <div className="flex rounded-full bg-primary p-1 mb-8">
              <button
                onClick={() => setActiveTab("order")}
                className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === "order"
                    ? "bg-accent text-white"
                    : "text-textLight hover:text-white"
                }`}
              >
                Order Delivery
              </button>
              <button
                onClick={() => setActiveTab("reservation")}
                className={`flex-1 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === "reservation"
                    ? "bg-accent text-white"
                    : "text-textLight hover:text-white"
                }`}
              >
                Book a Table
              </button>
            </div>

            {/* Order Form */}
            {activeTab === "order" && (
              <div className="flex flex-col gap-4">
                <InputField label="Full Name" placeholder="Enter your name" />
                <InputField
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <InputField
                  label="Delivery Address"
                  placeholder="Enter your delivery address"
                />
                <InputField
                  label="Your Order"
                  type="textarea"
                  placeholder="What would you like to order?"
                />
                <Button
                  text="Place Order"
                  className="text-primary mt-2 w-fit"
                />
              </div>
            )}

            {/* Reservation Form */}
            {activeTab === "reservation" && (
              <div className="flex flex-col gap-4">
                <InputField label="Full Name" placeholder="Enter your name" />
                <InputField
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <InputField label="Preferred Date" type="date" />
                <InputField label="Preferred Time" type="time" />
                <InputField
                  label="Number of Guests"
                  type="number"
                  placeholder="How many guests?"
                  min={1}
                  max={20}
                />
                <Button
                  text="Reserve Table"
                  className="text-primary mt-2 w-fit"
                />
              </div>
            )}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default BookingSection;