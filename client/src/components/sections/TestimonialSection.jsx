import { testimonials } from "../../data/index";
import AnimateOnScroll from "../common/AnimateOnScroll";
import StarRating from "../common/StarRating";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 lg:px-20">
      {/* Header */}
      <AnimateOnScroll direction="up">
        <div className="text-center">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm">
            What They Say
          </p>
          <h2 className="font-heading mt-3 text-2xl md:text-3xl font-bold text-white xl:text-5xl">
            Customer <span className="text-accent">Feedback</span>
          </h2>
          <p className="mt-4 text-textLight xl:text-lg max-w-xl mx-auto">
            Do not just take our word for it. Here is what our customers have to
            say.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateOnScroll
            key={testimonial.id}
            direction="up"
            delay={index * 0.15}
            className="h-full"
          >
            <div
              key={testimonial.id}
              className="bg-secondary rounded-3xl p-8 flex flex-col gap-4 hover:border border-accent transition-all duration-300 h-full"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-textLight leading-relaxed">
                {testimonial.review}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-heading font-bold text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-textLight text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
